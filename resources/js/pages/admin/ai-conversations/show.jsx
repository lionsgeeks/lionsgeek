import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AppLayout from '@/layouts/app-layout';
import { Head, router, usePage } from '@inertiajs/react';
import { ArrowLeft, Download, Calendar, User, MessageSquare, Bot, User as UserIcon } from 'lucide-react';
import AdminPageHeader from '../components/AdminPageHeader';

export default function Show() {
    const { conversation } = usePage().props;

    const formatDate = (date) => {
        if (!date) return 'N/A';
        return new Date(date).toLocaleString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        });
    };

    const formatTime = (date) => {
        if (!date) return 'N/A';
        return new Date(date).toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
        });
    };

    const exportConversation = () => {
        const dataStr = JSON.stringify(conversation, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `conversation-${conversation.session_id}-${Date.now()}.json`;
        link.click();
    };

    return (
        <AppLayout>
            <Head title={`Conversation ${conversation.session_id}`} />
            <AdminPageHeader
                icon={MessageSquare}
                title="Conversation Details"
                description="Full conversation details and messages"
            />

            <div className="space-y-6">
                {/* Back Button */}
                <Button
                    onClick={() => router.visit('/admin/ai-conversations')}
                    variant="outline"
                    className="gap-2"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Conversations
                </Button>

                {/* Conversation Info */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <MessageSquare className="w-5 h-5 text-alpha" />
                            Conversation Information
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-sm font-semibold text-gray-600">Session ID</p>
                                <p className="text-sm font-mono">{conversation.session_id}</p>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-gray-600">Message Count</p>
                                <Badge>{conversation.message_count}</Badge>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-gray-600">Started At</p>
                                <p className="text-sm flex items-center gap-1">
                                    <Calendar className="w-3 h-3" />
                                    {formatDate(conversation.started_at)}
                                </p>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-gray-600">Last Message</p>
                                <p className="text-sm flex items-center gap-1">
                                    <Calendar className="w-3 h-3" />
                                    {formatDate(conversation.last_message_at)}
                                </p>
                            </div>
                            {conversation.user_ip && (
                                <div>
                                    <p className="text-sm font-semibold text-gray-600">User IP</p>
                                    <p className="text-sm flex items-center gap-1">
                                        <User className="w-3 h-3" />
                                        {conversation.user_ip}
                                    </p>
                                </div>
                            )}
                            <div>
                                <p className="text-sm font-semibold text-gray-600">Created</p>
                                <p className="text-sm">{formatDate(conversation.created_at)}</p>
                            </div>
                        </div>

                        <div className="pt-4 border-t">
                            <Button onClick={exportConversation} variant="outline" className="gap-2">
                                <Download className="w-4 h-4" />
                                Export Conversation
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                {/* Messages */}
                <Card>
                    <CardHeader>
                        <CardTitle>Messages</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {conversation.messages && Array.isArray(conversation.messages) ? (
                                conversation.messages.map((message, index) => (
                                    <div
                                        key={message.id || index}
                                        className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                    >
                                        <div
                                            className={`max-w-[80%] rounded-lg p-4 ${
                                                message.sender === 'user'
                                                    ? 'bg-alpha text-white'
                                                    : 'bg-gray-100 text-gray-900'
                                            }`}
                                        >
                                            <div className="flex items-start gap-2 mb-2">
                                                {message.sender === 'user' ? (
                                                    <UserIcon className="w-4 h-4 mt-0.5" />
                                                ) : (
                                                    <Bot className="w-4 h-4 mt-0.5" />
                                                )}
                                                <span className="text-xs font-semibold uppercase">
                                                    {message.sender === 'user' ? 'User' : 'AI Assistant'}
                                                </span>
                                            </div>
                                            <p className="text-sm whitespace-pre-wrap break-words">
                                                {message.text}
                                            </p>
                                            {message.timestamp && (
                                                <p className="text-xs mt-2 opacity-70">
                                                    {formatTime(message.timestamp)}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-500 text-center py-8">No messages found</p>
                            )}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}

