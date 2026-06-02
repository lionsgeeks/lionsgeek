import { Button } from '@/components/Button';
import { TransText } from '@/components/TransText';
import { useAppContext } from '@/context/appContext';
import gsap from 'gsap';
import { useEffect, useRef } from 'react';
import codingIllustration from '../../../../../assets/images/Programmer-cuate.svg';
import mediaIllustration from '../../../../../assets/images/recording_a_movie.svg';

const TITLES = {
    en: "Level up your <span class='text-alpha'>Digital Skills</span>",
    fr: "Développez vos <span class='text-alpha'>Compétences Digitales</span>",
    ar: "ارتقِ <span class='text-alpha'>بمهاراتك الرقمية</span>",
};

export default function TrainingsHero({ stats = {}, programs = [] }) {
    const { selectedLanguage, darkMode } = useAppContext();
    const leftside  = useRef(null);
    const rightside = useRef(null);

    useEffect(() => {
        gsap.fromTo(leftside.current,  { x: '-100%', opacity: '0' }, { x: '0%', duration: 0.5, delay: 0.5, opacity: '1', ease: 'power2.out' });
        gsap.fromTo(rightside.current, { x: '100%',  opacity: '0' }, { x: '0%', duration: 0.5, delay: 0.5, opacity: '1', ease: 'power2.out' });
    }, []);

    const openCount    = programs.filter((p) => p.enrollment_status === 'open').length;
    const totalCohorts = stats.total_cohorts   ?? 0;
    const tracksCount  = stats.formations_count ?? 2;

    return (
        <div className={`min-h-screen w-full ${darkMode ? 'bg-[#0f0f0f] text-white' : 'bg-white text-black'}`}>
            <div className="pt-20 px-5 grid grid-cols-1 items-center gap-10 sm:mx-10 lg:mt-10 lg:grid-cols-2 lg:gap-20">

                {/* ── LEFT ── */}
                <div
                    ref={leftside}
                    className="order-2 mt-8 w-full space-y-6 text-center sm:mt-16 sm:ml-0 sm:w-[90%] sm:space-y-8 lg:order-1 lg:ml-16 lg:w-[85%] lg:text-left"
                >
                    <h1
                        className={`text-3xl font-extrabold sm:text-4xl md:text-5xl lg:text-6xl ${selectedLanguage === 'ar' ? 'text-right' : ''}`}
                        dangerouslySetInnerHTML={{ __html: TITLES[selectedLanguage] || TITLES.en }}
                    />

                    <p className="text-sm sm:text-base md:text-lg">
                        <TransText
                            en="Free, hands-on programs in coding and digital media. Choose between an intensive 6-month bootcamp or a targeted 3-week course — open to everyone."
                            fr="Des programmes gratuits et pratiques en codage et médias digitaux. Choisissez entre un bootcamp intensif de 6 mois ou une formation ciblée de 3 semaines — ouverts à tous."
                            ar="برامج مجانية وعملية في البرمجة والإعلام الرقمي. اختر بين معسكر تدريبي مكثف لمدة 6 أشهر أو دورة مستهدفة لمدة 3 أسابيع — مفتوحة للجميع."
                        />
                    </p>

                    {/* Live DB stats */}
                    <div className={`flex flex-wrap justify-center gap-8 lg:justify-start ${selectedLanguage === 'ar' ? 'lg:justify-end' : ''}`}>
                        <div className="flex flex-col items-center lg:items-start">
                            <span className="text-4xl font-extrabold text-alpha">{openCount}</span>
                            <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                <TransText en="programs open" fr="programmes ouverts" ar="برنامج مفتوح" />
                            </span>
                        </div>
                        <div className={`w-px self-stretch ${darkMode ? 'bg-white/10' : 'bg-gray-200'}`} />
                        <div className="flex flex-col items-center lg:items-start">
                            <span className="text-4xl font-extrabold text-alpha">{tracksCount}</span>
                            <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                <TransText en="tracks" fr="filières" ar="مسارات" />
                            </span>
                        </div>
                        {totalCohorts > 0 && (
                            <>
                                <div className={`w-px self-stretch ${darkMode ? 'bg-white/10' : 'bg-gray-200'}`} />
                                <div className="flex flex-col items-center lg:items-start">
                                    <span className="text-4xl font-extrabold text-alpha">{totalCohorts}</span>
                                    <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                        <TransText en="cohorts" fr="cohortes" ar="فوج" />
                                    </span>
                                </div>
                            </>
                        )}
                    </div>

                    <Button
                        className="px-10 py-3"
                        onClick={() => document.getElementById('long')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        <TransText en="Explore programs" fr="Explorer les programmes" ar="استكشف البرامج" />
                    </Button>
                </div>

                {/* ── RIGHT — two storyset illustrations ── */}
                <div
                    ref={rightside}
                    className="order-1 flex w-full items-end justify-center gap-4 lg:order-2 lg:justify-end"
                >
                    <div className="flex w-1/2 flex-col items-center">
                        <img
                            loading="lazy"
                            src={codingIllustration}
                            alt="coding illustration"
                            className="w-full object-contain"
                        />
                    </div>

                    <div className={`h-28 w-px self-center opacity-20 ${darkMode ? 'bg-white' : 'bg-black'}`} />

                    <div className="flex w-1/2 flex-col items-center">
                        <img
                            loading="lazy"
                            src={mediaIllustration}
                            alt="media illustration"
                            className="w-full object-contain"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
}
