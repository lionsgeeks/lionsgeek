import { Button } from '@/components/Button';
import { TransText } from '@/components/TransText';
import { useAppContext } from '@/context/appContext';
import { router } from '@inertiajs/react';
import { PROGRAM_CONTENT, SESSION_STATUS } from './trainingsContent';

const ClockIcon = ({ darkMode }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-5 shrink-0"
        style={{ stroke: darkMode ? '#fee819' : '#0f0f0f' }}
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
);

const FeeIcon = ({ darkMode }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-5 shrink-0"
        style={{ stroke: darkMode ? '#fee819' : '#0f0f0f' }}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
        />
    </svg>
);

const CalendarIcon = ({ darkMode }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="size-5 shrink-0"
        style={{ stroke: darkMode ? '#fee819' : '#0f0f0f' }}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
        />
    </svg>
);

const TRACK_BADGE = {
    Coding: { label: 'Coding', bg: 'bg-blue-100', text: 'text-blue-700' },
    Media: { label: 'Media', bg: 'bg-purple-100', text: 'text-purple-700' },
};

const FORMAT_BADGE = {
    long: { en: 'Long — 6 months', fr: '6 mois', ar: '6 أشهر', bg: 'bg-[#fee819]/20', text: 'text-[#0f0f0f]' },
    short: { en: 'GeekLab — 5 days', fr: 'GeekLab — 5 jours', ar: 'GeekLab — 5 أيام', bg: 'bg-green-100', text: 'text-green-700' },
};

export default function TrainingCard({ program }) {
    const { selectedLanguage, darkMode } = useAppContext();
    const rtl = selectedLanguage === 'ar';
    const content = PROGRAM_CONTENT[program.slug];
    const isReverse = program.layout === 'reverse';
    const textColor = darkMode ? '#ffffff' : '#0f0f0f';
    const isOpen = program.enrollment_status === 'open';
    const applyUrl = `/postuler?type=${program.apply_type}&format=${program.format}`;
    const trackBadge = TRACK_BADGE[program.formation] ?? { label: program.formation, bg: 'bg-gray-100', text: 'text-gray-700' };
    const formatBadge = FORMAT_BADGE[program.format] ?? FORMAT_BADGE.long;

    const rowClass = rtl
        ? `text-end ${isReverse ? 'md:flex-row' : 'md:flex-row-reverse'}`
        : isReverse
        ? 'md:flex-row-reverse'
        : 'md:flex-row';

    return (
        <article
            id={program.slug}
            className={`group flex scroll-mt-28 flex-col-reverse overflow-hidden rounded-xl border-2 transition-shadow duration-300 hover:shadow-xl ${rowClass} ${
                darkMode ? 'border-white/10' : 'border-gray-100'
            }`}
            style={{ backgroundColor: darkMode ? 'var(--color-beta)' : '#ffffff' }}
        >
            {/* Text side */}
            <div className="relative flex flex-1 flex-col justify-center overflow-hidden px-8 py-12 lg:px-12">
                {/* Decorative background icon */}
                {program.formation === 'Coding' ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className={`pointer-events-none absolute h-[130%] -top-1/4 ${
                            rtl ? 'right-0 rotate-45' : 'left-0 rotate-45'
                        } ${darkMode ? 'fill-white/[4%]' : 'fill-black/[4%]'} transition-all duration-700 group-hover:scale-90 group-hover:opacity-60`}
                    >
                        <path
                            fillRule="evenodd"
                            d="M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z"
                            clipRule="evenodd"
                        />
                    </svg>
                ) : (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className={`pointer-events-none absolute h-[130%] -top-1/4 ${
                            rtl ? 'left-0 -rotate-45' : 'right-0 -rotate-45'
                        } ${darkMode ? 'stroke-white/[4%]' : 'stroke-black/[4%]'} transition-all duration-700 group-hover:scale-90 group-hover:opacity-60`}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                        />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                    </svg>
                )}

                <div className="relative z-10 flex flex-col gap-4">
                    {/* Badges */}
                    <div className={`flex flex-wrap gap-2 ${rtl ? 'flex-row-reverse' : ''}`}>
                        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${trackBadge.bg} ${trackBadge.text}`}>
                            {trackBadge.label}
                        </span>
                        <span className={`rounded-full px-3 py-1 text-xs font-semibold ${formatBadge.bg} ${formatBadge.text}`}>
                            {selectedLanguage === 'ar' ? formatBadge.ar : selectedLanguage === 'fr' ? formatBadge.fr : formatBadge.en}
                        </span>
                    </div>

                    <h2 className="text-3xl font-bold md:text-5xl lg:text-balance" style={{ color: textColor }}>
                        <TransText {...content.title} />
                    </h2>

                    <p className="text-base md:text-lg" style={{ color: darkMode ? '#d1d5db' : '#4b5563' }}>
                        <TransText {...content.description} />
                    </p>

                    <div className="mt-2 flex flex-col gap-3">
                        <div className={`flex items-center gap-3 ${rtl ? 'flex-row-reverse' : ''}`}>
                            <ClockIcon darkMode={darkMode} />
                            <span className="text-sm md:text-base" style={{ color: textColor }}>
                                <TransText {...content.duration} />
                            </span>
                        </div>
                        <div className={`flex items-center gap-3 ${rtl ? 'flex-row-reverse' : ''}`}>
                            <FeeIcon darkMode={darkMode} />
                            <span className="text-sm md:text-base" style={{ color: textColor }}>
                                <TransText {...content.fee} />
                            </span>
                        </div>
                        <div className={`flex items-center gap-3 ${rtl ? 'flex-row-reverse' : ''}`}>
                            <CalendarIcon darkMode={darkMode} />
                            <span className="text-sm md:text-base" style={{ color: textColor }}>
                                <TransText {...content.commitment} />
                            </span>
                        </div>
                    </div>

                    <div className={`mt-2 flex w-fit ${rtl ? 'self-end' : ''}`}>
                        {isOpen ? (
                            <Button onClick={() => router.visit(applyUrl)}>
                                <TransText {...SESSION_STATUS.open} />
                            </Button>
                        ) : (
                            <div
                                className={`cursor-not-allowed rounded-lg border px-4 py-2 text-sm select-none ${
                                    program.enrollment_status === 'closed'
                                        ? darkMode
                                            ? 'border-alpha text-alpha'
                                            : 'bg-[#252529] text-[#fee819]'
                                        : 'border-red-400 text-red-400'
                                }`}
                            >
                                <TransText {...SESSION_STATUS[program.enrollment_status]} />
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Image side */}
            <div className={`h-64 overflow-hidden md:h-auto md:w-[55%] ${isReverse ? 'md:rounded-l-xl' : 'md:rounded-r-xl'}`}>
                <div
                    className={`${program.image_class} size-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105 ${
                        isReverse ? 'md:rounded-l-xl' : 'md:rounded-r-xl'
                    }`}
                />
            </div>
        </article>
    );
}
