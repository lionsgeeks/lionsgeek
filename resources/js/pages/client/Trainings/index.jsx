import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import TrainingsHero from './Partials/TrainingsHero';
import TrainingsSection from './Partials/TrainingsSection';

const LONG_LABEL = { en: 'Long formations', fr: 'Formations longues', ar: 'تكوينات طويلة' };
const LONG_TITLE = { en: 'Intensive programs', fr: 'Programmes intensifs', ar: 'البرامج المكثفة' };
const LONG_SUB = {
    en: '6-month bootcamps, 5 days a week — a total immersion to transform you into a professional.',
    fr: 'Des bootcamps de 6 mois, 5 jours par semaine — une immersion totale pour faire de vous un professionnel.',
    ar: 'معسكرات تدريب 6 أشهر، 5 أيام في الأسبوع — انغماس كامل لتحويلك إلى محترف.',
};

const SHORT_LABEL = { en: 'Short formations', fr: 'Formations courtes', ar: 'تكوينات قصيرة' };
const SHORT_TITLE = { en: 'Quick-start courses', fr: 'Cours de démarrage rapide', ar: 'دورات البداية السريعة' };
const SHORT_SUB = {
    en: 'Compact 3-week programs to build targeted skills and get hands-on experience fast.',
    fr: 'Des programmes compacts de 3 semaines pour acquérir des compétences ciblées et gagner en expérience rapidement.',
    ar: 'برامج مدمجة لمدة 3 أسابيع لبناء مهارات موجهة واكتساب خبرة عملية بسرعة.',
};

export default function TrainingsIndex({ heroStats = {}, longPrograms = [], shortPrograms = [] }) {
    const allPrograms = [...longPrograms, ...shortPrograms];

    return (
        <AppLayout>
            <Head title="Trainings" />
            <TrainingsHero stats={heroStats} programs={allPrograms} />
            <TrainingsSection id="long" label={LONG_LABEL} title={LONG_TITLE} subtitle={LONG_SUB} programs={longPrograms} gray={false} />
            <TrainingsSection id="short" label={SHORT_LABEL} title={SHORT_TITLE} subtitle={SHORT_SUB} programs={shortPrograms} gray />
        </AppLayout>
    );
}
