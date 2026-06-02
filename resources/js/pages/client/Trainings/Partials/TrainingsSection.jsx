import { TransText } from '@/components/TransText';
import { useAppContext } from '@/context/appContext';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import TrainingCard from './TrainingCard';

gsap.registerPlugin(ScrollTrigger);

export default function TrainingsSection({ id, label, title, subtitle, programs, gray }) {
    const { darkMode } = useAppContext();

    useGSAP(() => {
        gsap.from(`#${id} .training-card`, {
            y: 60,
            opacity: 0,
            stagger: 0.2,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: `#${id}`,
                start: 'top 80%',
            },
        });
    });

    if (!programs?.length) return null;

    const sectionBg = gray
        ? darkMode ? '#0f0f0f' : '#f9fafb'
        : darkMode ? '#0f0f0f' : '#ffffff';

    return (
        <section
            id={id}
            className="flex flex-col gap-10 px-7 py-16 md:px-16"
            style={{ backgroundColor: sectionBg }}
        >
            <div className="w-full pb-4 text-center">
                <p className="text-lg md:text-xl" style={{ color: darkMode ? '#fee819' : '#0f0f0f' }}>
                    <TransText {...label} />
                </p>
                <h2 className="text-4xl font-bold md:text-5xl" style={{ color: darkMode ? '#ffffff' : '#0f0f0f' }}>
                    <TransText {...title} />
                </h2>
                {subtitle && (
                    <p className="mx-auto mt-3 max-w-2xl text-base md:text-lg" style={{ color: darkMode ? '#9ca3af' : '#6b7280' }}>
                        <TransText {...subtitle} />
                    </p>
                )}
            </div>

            <div className="flex flex-col gap-6">
                {programs.map((program) => (
                    <div key={program.slug} className="training-card">
                        <TrainingCard program={program} />
                    </div>
                ))}
            </div>
        </section>
    );
}
