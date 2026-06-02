<?php

namespace App\Http\Controllers;

use App\Models\InfoSession;
use Illuminate\Support\Collection;
use Inertia\Inertia;
use Inertia\Response;

class TrainingController extends Controller
{
    public function index(): Response
    {
        $openSessions = InfoSession::query()
            ->withCount('participants')
            ->where('is_private', false)
            ->where('isFinish', false)
            ->get();

        $completedCount = InfoSession::where('isFinish', true)->count();

        $programs = collect(config('trainings.programs'))
            ->map(fn (array $program) => array_merge($program, [
                'enrollment_status' => $this->resolveEnrollmentStatus($openSessions, $program),
                'next_date'         => $this->resolveNextDate($openSessions, $program),
                'available_places'  => $this->resolveAvailablePlaces($openSessions, $program),
                'sessions_count'    => $this->resolveSessionsCount($openSessions, $program),
            ]))
            ->values();

        $heroStats = [
            'programs_open'   => $programs->where('enrollment_status', 'open')->count(),
            'total_cohorts'   => $completedCount + $openSessions->count(),
            'formations_count' => 2,
        ];

        return Inertia::render('client/Trainings/index', [
            'heroStats'     => $heroStats,
            'longPrograms'  => $programs->where('format', 'long')->values(),
            'shortPrograms' => $programs->where('format', 'short')->values(),
        ]);
    }

    private function matchingSessions(Collection $sessions, array $program): Collection
    {
        return $sessions->filter(
            fn (InfoSession $s) =>
                $s->formation === $program['formation']
                && ($s->format ?? 'long') === $program['format']
        );
    }

    private function resolveEnrollmentStatus(Collection $sessions, array $program): string
    {
        $matching = $this->matchingSessions($sessions, $program)
            ->where('isAvailable', true);

        if ($matching->isEmpty()) {
            return 'closed';
        }

        if ($matching->every(fn (InfoSession $s) => $s->isFull)) {
            return 'full';
        }

        return 'open';
    }

    private function resolveNextDate(Collection $sessions, array $program): ?string
    {
        $next = $this->matchingSessions($sessions, $program)
            ->where('isAvailable', true)
            ->filter(fn (InfoSession $s) => !$s->isFull)
            ->sortBy('start_date')
            ->first();

        return $next?->start_date?->format('d M Y');
    }

    private function resolveAvailablePlaces(Collection $sessions, array $program): int
    {
        return (int) $this->matchingSessions($sessions, $program)
            ->where('isAvailable', true)
            ->filter(fn (InfoSession $s) => !$s->isFull)
            ->sum(fn (InfoSession $s) => max(0, $s->places - ($s->participants_count ?? 0)));
    }

    private function resolveSessionsCount(Collection $sessions, array $program): int
    {
        return $this->matchingSessions($sessions, $program)->count();
    }
}
