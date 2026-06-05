import { TransText } from '@/components/TransText';
import { useAppContext } from '@/context/appContext';
import { useGSAP } from '@gsap/react';
import { router } from '@inertiajs/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import codeInfoImage from '../../../../../assets/images/codeInfo.png';
import mediaInfoImage from '../../../../../assets/images/mediaInfo.png';

gsap.registerPlugin(ScrollTrigger);

/* ─── Icons ─────────────────────────────────────────────────── */

const CodeIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
        <path fillRule="evenodd" d="M14.447 3.026a.75.75 0 0 1 .527.921l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.527ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 0 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
    </svg>
);

const CameraIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
    </svg>
);

const ClockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
);

const ArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
);

/* ─── Copy ───────────────────────────────────────────────────── */

const SECTION_HEADER = {
    label: { en: 'Our programs', fr: 'Nos programmes', ar: 'برامجنا' },
    title: { en: 'Two paths, four tracks', fr: 'Deux parcours, quatre filières', ar: 'مساران، أربع مسارات' },
    subtitle: {
        en: 'Whether you have a week or six months, there is a program designed for you — in coding or digital media.',
        fr: 'Que vous ayez une semaine ou six mois, il existe un programme conçu pour vous — en coding ou en médias digitaux.',
        ar: 'سواء كان لديك أسبوع أو ستة أشهر، هناك برنامج مصمم لك — في البرمجة أو الإعلام الرقمي.',
    },
};

const PROGRAMS = [
    {
        id: 'long',
        number: '01',
        badge: { en: 'Normal program', fr: 'Programme normal', ar: 'البرنامج العادي' },
        duration: { en: '6 months', fr: '6 mois', ar: '6 أشهر' },
        title: {
            en: 'A full immersion to become a professional',
            fr: 'Une immersion complète pour devenir professionnel',
            ar: 'انغماس كامل لتصبح محترفاً',
        },
        description: {
            en: 'Six months of intensive training, 5 days a week alongside coaches and a community of driven peers — until you are job-ready.',
            fr: "Six mois de formation intensive, 5 jours par semaine aux côtés de coachs et d'une communauté motivée — jusqu'à être prêt pour l'emploi.",
            ar: 'ستة أشهر من التدريب المكثف، 5 أيام في الأسبوع إلى جانب المدربين ومجتمع متحمس — حتى تصبح جاهزاً لسوق العمل.',
        },
        isShort: false,
        tracks: [
            {
                id: 'coding-long',
                track: 'coding',
                icon: <CodeIcon />,
                trackBadge: { en: 'Coding', fr: 'Coding', ar: 'البرمجة' },
                title: { en: 'Full Stack Web Developer', fr: 'Développeur Web Full Stack', ar: 'مطور ويب متكامل' },
                description: {
                    en: 'Six months to become a complete web developer. Work on real-world projects, collaborate with a team, and graduate with a portfolio ready for the job market.',
                    fr: 'Six mois pour devenir un développeur web complet. Travaillez sur des projets réels, collaborez en équipe et obtenez un portfolio prêt pour le marché du travail.',
                    ar: 'ستة أشهر لتصبح مطور ويب متكاملاً. اعمل على مشاريع حقيقية، تعاون مع فريق، وتخرج بمحفظة أعمال قوية جاهزة لسوق العمل.',
                },
            },
            {
                id: 'media-long',
                track: 'media',
                icon: <CameraIcon />,
                trackBadge: { en: 'Media', fr: 'Média', ar: 'الإعلام' },
                title: { en: 'Digital Content Creator', fr: 'Créateur de contenu digital', ar: 'منشئ المحتوى الرقمي' },
                description: {
                    en: 'Six months to master video production end-to-end. From framing a shot to delivering polished final cuts, build the expertise to create professional digital content.',
                    fr: "Six mois pour maîtriser la production vidéo de bout en bout. Du cadrage au montage final soigné, développez l'expertise pour créer du contenu numérique professionnel.",
                    ar: 'ستة أشهر لإتقان إنتاج الفيديو من البداية للنهاية. من تأطير اللقطات إلى المونتاج النهائي، ابنِ الخبرة اللازمة لإنشاء محتوى رقمي احترافي.',
                },
            },
        ],
    },
    {
        id: 'short',
        number: '02',
        badge: { en: 'Short program', fr: 'Programme court', ar: 'برنامج قصير' },
        title: {
            en: 'A first step into the digital world',
            fr: 'Un premier pas dans le monde digital',
            ar: 'الخطوة الأولى نحو العالم الرقمي',
        },
        description: {
            en: 'One intensive week to discover your chosen field. Hands-on from day one, free of charge, open to everyone.',
            fr: "Une semaine intensive pour découvrir votre domaine. Pratique dès le premier jour, gratuite, ouverte à tous.",
            ar: 'أسبوع مكثف لاكتشاف مجالك المختار. عملي من اليوم الأول، مجاني، مفتوح للجميع.',
        },
        isShort: true,
        tracks: [
            {
                id: 'coding-short',
                track: 'coding',
                icon: <CodeIcon />,
                trackBadge: { en: 'Coding', fr: 'Coding', ar: 'البرمجة' },
                title: { en: 'Web Development — 1 week', fr: 'Développement Web — 1 semaine', ar: 'تطوير الويب — أسبوع واحد' },
                description: {
                    en: 'An introduction to web creation. Build your very first project from scratch, guided step by step — no prior experience needed.',
                    fr: 'Une introduction à la création web. Réalisez votre tout premier projet de zéro, guidé étape par étape — sans expérience préalable.',
                    ar: 'مقدمة في إنشاء الويب. أنشئ مشروعك الأول من الصفر، مع توجيه خطوة بخطوة — بدون خبرة مسبقة.',
                },
            },
            {
                id: 'media-short',
                track: 'media',
                icon: <CameraIcon />,
                trackBadge: { en: 'Media', fr: 'Média', ar: 'الإعلام' },
                title: { en: 'Digital Content — 1 week', fr: 'Contenu Digital — 1 semaine', ar: 'المحتوى الرقمي — أسبوع واحد' },
                description: {
                    en: 'Explore video creation and visual storytelling. Shoot, edit, and produce your first short content piece from day one.',
                    fr: 'Explorez la création vidéo et le storytelling visuel. Filmez, montez et produisez votre premier contenu dès le premier jour.',
                    ar: 'استكشف إنشاء الفيديو والسرد البصري. صور وحرر وأنتج أول محتوى لك منذ اليوم الأول.',
                },
            },
        ],
    },
];

const BUTTONS = {
    details: { en: 'More details', fr: 'Plus de détails', ar: 'تفاصيل أكثر' },
};

/* ─── Track Card (horizontal) ───────────────────────────────── */

function trackLongImageClass(track) {
    return track === 'coding' ? 'bg-image-coding' : 'bg-image-media';
}

function trackLongImageLayoutClass(track) {
    return track === 'coding' ? 'bg-cover bg-bottom' : 'bg-cover bg-center';
}

function trackShortImageSrc(track) {
    return track === 'coding' ? codeInfoImage : mediaInfoImage;
}

function TrackCard({ card, format, rtl }) {
    const isCoding = card.track === 'coding';
    const isShort = format === 'short';
    const trackUrl = isCoding ? '/coding' : '/media';
    const detailsUrl = `${trackUrl}?format=${format}`;

    return (
        <div
            className={`
                track-card group flex min-h-[280px] overflow-hidden rounded-2xl border border-gray-200
                bg-white shadow-sm transition-all duration-300
                hover:-translate-y-0.5 hover:shadow-xl
                dark:border-white/10 dark:bg-beta
                ${rtl ? 'flex-row-reverse' : 'flex-row'}
            `}
        >
            <div className={`flex flex-1 flex-col justify-between gap-5 p-7 md:p-9 ${rtl ? 'items-end text-right' : ''}`}>
                <div className="flex flex-col gap-4">
                    <div className={`flex flex-wrap items-center gap-2 ${rtl ? 'flex-row-reverse' : ''}`}>
                        <span
                            className={`
                                flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold
                                ${rtl ? 'flex-row-reverse' : ''} bg-darker/80 text-alpha dark:bg-alpha/20 dark:text-alpha
                            `}
                        >
                            {card.icon}
                            <TransText {...card.trackBadge} />
                        </span>

                        <span className="flex items-center gap-1 rounded-full bg-alpha/15 px-3 py-1 text-xs font-bold text-darker dark:text-alpha">
                            <ClockIcon />
                            <span>{isShort ? '1 week' : '6 months'}</span>
                        </span>
                    </div>

                    <h4 className="text-xl font-extrabold leading-tight text-darker dark:text-white md:text-2xl">
                        <TransText {...card.title} />
                    </h4>

                    <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                        <TransText {...card.description} />
                    </p>
                </div>

                <div className={`flex ${rtl ? 'justify-end' : ''}`}>
                    <button
                        type="button"
                        onClick={() => router.visit(detailsUrl)}
                        className="
                            flex items-center gap-2 rounded-lg bg-alpha px-5 py-2.5
                            text-sm font-bold text-darker transition-all duration-200
                            hover:brightness-110 active:scale-95
                        "
                    >
                        <TransText {...BUTTONS.details} />
                        <ArrowIcon />
                    </button>
                </div>
            </div>

            <div className="relative hidden min-h-[280px] w-2/5 flex-shrink-0 self-stretch overflow-hidden sm:block">
                {isShort ? (
                    <img
                        src={trackShortImageSrc(card.track)}
                        alt=""
                        className="absolute inset-0 size-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                ) : (
                    <div
                        className={`
                            absolute inset-0 size-full
                            ${trackLongImageLayoutClass(card.track)} ${trackLongImageClass(card.track)}
                            transition-transform duration-700 group-hover:scale-105
                        `}
                    />
                )}
            </div>
        </div>
    );
}

/* ─── Program Section ────────────────────────────────────────── */

function ProgramSection({ program, rtl }) {
    return (
        <div className="program-block">
            {/* Program header */}
            <div
                className={`
                    mb-6 flex flex-wrap items-end justify-between gap-4
                    ${rtl ? 'flex-row-reverse text-right' : ''}
                `}
            >
                <div className={`flex flex-col gap-2 ${rtl ? 'items-end' : ''}`}>
                    {/* Number + badge row */}
                    <div className={`flex items-center gap-3 ${rtl ? 'flex-row-reverse' : ''}`}>
                        <span className="text-5xl font-black leading-none text-darker/10 dark:text-white/10">
                            {program.number}
                        </span>
                        <div className={`flex flex-col gap-1 ${rtl ? 'items-end' : ''}`}>
                            <div className={`flex items-center gap-2 ${rtl ? 'flex-row-reverse' : ''}`}>
                                <span
                                    className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest ${program.isShort
                                            ? 'bg-alpha/10 text-beta dark:bg-alpha/20 dark:text-alpha'
                                            : 'bg-alpha/20 text-beta dark:bg-alpha/20 dark:text-alpha'
                                        }`}
                                >
                                    <TransText {...program.badge} />
                                </span>
                                {/* <span className="flex items-center gap-1 text-sm font-bold text-alpha">
                                    <ClockIcon />
                                    <TransText {...program.duration} />
                                </span> */}
                            </div>
                        </div>
                    </div>

                    <h3 className="text-2xl font-extrabold text-darker dark:text-white md:text-3xl">
                        <TransText {...program.title} />
                    </h3>
                </div>

                <p className="max-w-sm text-sm leading-relaxed text-gray-500 dark:text-gray-400 md:text-base">
                    <TransText {...program.description} />
                </p>
            </div>

            {/* Accent divider */}
            <div className={`mb-6 h-px w-16 bg-alpha ${rtl ? 'self-end' : ''}`} />

            {/* Track cards */}
            <div className="flex flex-col gap-4">
                {program.tracks.map((card) => (
                    <TrackCard
                        key={card.id}
                        card={card}
                        format={program.id}
                        rtl={rtl}
                    />
                ))}
            </div>
        </div>
    );
}

/* ─── Section root ───────────────────────────────────────────── */

export default function ProgramsOverview() {
    const { selectedLanguage } = useAppContext();
    const rtl = selectedLanguage === 'ar';

    useGSAP(() => {
        gsap.from('.program-block', {
            y: 60,
            opacity: 0,
            stagger: 0.3,
            duration: 0.9,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '#programs-overview',
                start: 'top 78%',
            },
        });
    });

    return (
        <section
            id="programs-overview"
            className="bg-white px-7 py-20 dark:bg-[#0f0f0f] md:px-16"
        >
            {/* ── Section header ── */}
            <div className={`mx-auto mb-16 max-w-2xl ${rtl ? 'text-right' : 'text-center'}`}>
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-alpha">
                    <TransText {...SECTION_HEADER.label} />
                </p>
                <h2 className="text-4xl font-extrabold text-darker dark:text-white md:text-5xl">
                    <TransText {...SECTION_HEADER.title} />
                </h2>
                <p className="mt-5 text-base leading-relaxed text-gray-500 dark:text-gray-400 md:text-lg">
                    <TransText {...SECTION_HEADER.subtitle} />
                </p>
            </div>

            {/* ── Programs ── */}
            <div className="mx-auto flex max-w-6xl flex-col gap-16">
                {PROGRAMS.map((program) => (
                    <ProgramSection key={program.id} program={program} rtl={rtl} />
                ))}
            </div>
        </section>
    );
}
