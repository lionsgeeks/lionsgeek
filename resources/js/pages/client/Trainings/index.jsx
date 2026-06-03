import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import ProgramsOverview from './Partials/ProgramsOverview';
import TrainingsHero from './Partials/TrainingsHero';

export default function TrainingsIndex({ heroStats = {}, longPrograms = [], shortPrograms = [] }) {
    const allPrograms = [...longPrograms, ...shortPrograms];

    return (
        <AppLayout>
            <Head title="Trainings" />
            <TrainingsHero stats={heroStats} programs={allPrograms} />
            <ProgramsOverview />
        </AppLayout>
    );
}
