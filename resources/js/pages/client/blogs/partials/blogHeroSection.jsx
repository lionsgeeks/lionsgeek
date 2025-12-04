import { useAppContext } from '@/context/appContext';
import { Link, usePage } from '@inertiajs/react';
import { AiFillPicture } from 'react-icons/ai';
import { Button } from '../../../../components/Button';
import { TransText } from '../../../../components/TransText';

export const BlogHeroSection = () => {
    const { blogs } = usePage().props;
    const { selectedLanguage, darkMode } = useAppContext();

    const formatDate = (date) => {
        return new Date(date).toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    };


    return (
        <>
            {blogs ? (
                <>
                    <div className={`flex flex-col gap-4 pt-8 sm:pt-12 md:pt-16 lg:flex-row lg:gap-8 lg:pt-[10vh] ${blogs[blogs.length -1] ? 'block' : 'hidden'}`}>
                        <div className="w-full lg:w-1/2">
                            <img
                                loading="lazy"
                                className="h-58 w-full rounded-xl object-fill shadow-lg sm:h-80 md:h-96 lg:h-[60vh]"
                                src={'storage/images/blog/' + blogs[blogs.length -1]?.image}
                                alt={blogs[blogs.length -1]?.title[selectedLanguage]}
                            />
                        </div>

                        <div className="flex w-full flex-col gap-4 sm:gap-6 lg:w-[40%] lg:justify-center lg:px-4 xl:px-8">
                            <p className="text-sm sm:text-base" style={{ color: darkMode ? '#d1d5db' : '#6b7280' }}>
                                {formatDate(blogs[blogs.length -1]?.created_at)}
                            </p>
                            <h1
                                className="text-xl leading-tight font-bold sm:text-2xl md:text-3xl lg:text-4xl"
                                style={{ color: darkMode ? '#ffffff' : '#0f0f0f' }}
                            >
                                {blogs[blogs.length -1]?.title[selectedLanguage]}
                            </h1>
                            <div className="reset-tw text-sm leading-relaxed sm:text-base" style={{ color: darkMode ? '#d1d5db' : '#4b5563' }}>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html:
                                            blogs[blogs.length -1]?.description[selectedLanguage].length > 200
                                                ? blogs[blogs.length -1]?.description[selectedLanguage].slice(0, 200) + '...'
                                                : blogs[blogs.length -1]?.description[selectedLanguage],
                                    }}
                                />
                            </div>
                            <div className="flex items-center justify-center pt-2 sm:justify-start sm:pt-4">
                                <Link href={`/blogs/${blogs[blogs.length -1]?.id}`} className="cursor-pointer">
                                    <Button children={'Read Article'} />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className={`${blogs[blogs.length -1] ? 'hidden' : 'flex'} h-[20rem] items-center justify-center px-4`}>
                        <p className="text-center text-xl font-bold sm:text-2xl md:text-3xl" style={{ color: darkMode ? '#ffffff' : '#0f0f0f' }}>
                            <TransText
                                en="No available Blogs for the Moment"
                                ar="لا توجد مدونات متوفرة في الوقت الحالي"
                                fr="Aucun blog disponible pour le moment"
                            />
                        </p>
                    </div>
                </>
            ) : (
                <>
                    <div className="mt-8 flex h-[20rem] w-full flex-col gap-4 rounded-md sm:h-[24rem] md:mt-[4.5rem] md:h-[26rem] md:flex-row md:gap-8 md:p-6 lg:gap-12 lg:p-10">
                        <div className="skeleton flex h-[50%] w-full items-center justify-center rounded-lg bg-skeleton2 md:h-full md:w-[48%]">
                            <AiFillPicture className="text-4xl opacity-30 sm:text-5xl md:text-6rem" />
                        </div>
                        <div className="flex w-full flex-col gap-3 py-4 md:w-[40%]">
                            <div className="skeleton h-6 w-full rounded-md bg-skeleton2 sm:h-7"></div>
                            <div className="skeleton h-6 w-full rounded-md bg-skeleton2 sm:h-7"></div>
                            <div className="skeleton h-6 w-[70%] rounded-md bg-skeleton2 sm:h-7"></div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};
