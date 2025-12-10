<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ChatbotConversation;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;

class ChatbotConversationController extends Controller
{
    public function index(Request $request)
    {
        $conversations = ChatbotConversation::orderBy('created_at', 'desc')
            ->paginate(20);

        return Inertia::render('admin/ai-conversations/index', [
            'conversations' => $conversations,
        ]);
    }

    public function show($id)
    {
        $conversation = ChatbotConversation::findOrFail($id);

        return Inertia::render('admin/ai-conversations/show', [
            'conversation' => $conversation,
        ]);
    }

    public function export(Request $request)
    {
        $format = $request->get('format', 'json');
        $conversations = ChatbotConversation::orderBy('created_at', 'desc')->get();

        if ($format === 'csv') {
            return $this->exportToCsv($conversations);
        }

        // JSON export
        $filename = 'ai-conversations-' . date('Y-m-d') . '.json';
        $jsonData = json_encode($conversations, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
        
        return response($jsonData, 200, [
            'Content-Type' => 'application/json; charset=utf-8',
            'Content-Disposition' => "attachment; filename=\"{$filename}\"",
        ]);
    }

    private function exportToCsv($conversations)
    {
        $filename = 'ai-conversations-' . date('Y-m-d') . '.csv';
        $headers = [
            'Content-Type' => 'text/csv; charset=utf-8',
            'Content-Disposition' => "attachment; filename=\"{$filename}\"",
        ];

        $callback = function () use ($conversations) {
            // Add BOM for UTF-8 to ensure Excel displays correctly
            echo "\xEF\xBB\xBF";
            
            $file = fopen('php://output', 'w');
            
            // CSV Headers
            fputcsv($file, [
                'ID',
                'Session ID',
                'Message Count',
                'Started At',
                'Last Message At',
                'User IP',
                'User Agent',
                'Created At',
                'Messages (JSON)',
            ]);

            foreach ($conversations as $conv) {
                $messagesJson = '';
                if ($conv->messages && is_array($conv->messages)) {
                    $messagesJson = json_encode($conv->messages, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
                }

                fputcsv($file, [
                    $conv->id,
                    $conv->session_id,
                    $conv->message_count,
                    $conv->started_at ? $conv->started_at->format('Y-m-d H:i:s') : '',
                    $conv->last_message_at ? $conv->last_message_at->format('Y-m-d H:i:s') : '',
                    $conv->user_ip ?? '',
                    $conv->user_agent ?? '',
                    $conv->created_at->format('Y-m-d H:i:s'),
                    $messagesJson,
                ]);
            }

            fclose($file);
        };

        return response()->stream($callback, 200, $headers);
    }

    public function destroy($id)
    {
        $conversation = ChatbotConversation::findOrFail($id);
        $conversation->delete();

        return back();
    }
}
