import { useAppContext } from '@/context/appContext';
import { Link, usePage } from '@inertiajs/react';
import { AiFillPicture } from 'react-icons/ai';

export const BlogContentsSection = () => {
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
            <div className="flex flex-col gap-3 py-2 lg:flex-wrap">
                {blogs?.length > 1 && (
                    <h1 className={`py-6 text-center text-3xl font-extrabold md:py-10 md:text-4xl ${darkMode ? 'text-white' : 'text-black'}`}>Our Blogs</h1>
                )}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
                    {blogs?.length > 0 ? (
                        blogs.reverse().map((blog, index) => (
                            <div className={`${blogs[0].id == blog.id ? 'hidden' : 'block'} `} key={index}>
                                <Link
                                    href={`/blogs/${blog.id}`}
                                    className={`group relative block h-52 w-full cursor-pointer overflow-hidden rounded-lg border border-beta shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl sm:h-72 md:h-80 lg:h-80`}
                                >
                                    <img
                                        className="absolute h-full w-full object-fill transition-transform duration-300 group-hover:scale-100"
                                        src={'storage/images/blog/' + blog.image}
                                        alt={blog.title[selectedLanguage]}
                                    />
                                    <div className="absolute top-0 h-1/6 w-full bg-gradient-to-t from-black/10 to-black/80"></div>
                                    <div className="absolute bottom-0 h-1/3 w-full bg-gradient-to-t from-black/90 via-black/70 to-transparent"></div>
                                    <div className="absolute z-20 flex h-full w-full flex-col justify-between px-4 py-4 sm:px-5 sm:py-5 md:px-6 md:py-6">
                                        <p className="text-end text-xs text-white/90 sm:text-sm md:text-base">{formatDate(blog.created_at)}</p>
                                        <h1 className={`text-end text-sm font-semibold text-white sm:text-base md:text-lg lg:text-xl`} title={blog.title[selectedLanguage]}>
                                            {blog.title[selectedLanguage]}
                                        </h1>
                                    </div>
                                </Link>
                            </div>
                        ))
                    ) : (
                        <div className="flex w-full flex-col px-4 md:px-6">
                            <h1 className={`py-10 text-center text-4xl font-extrabold`}>Our Blog</h1>
                            <div className="flex gap-[calc(5%/3)]">
                                {Array.from({ length: 3 }).map((_, index) => (
                                    <div
                                        key={index}
                                        className={`${index !== 0 && 'max-md:hidden'} skeleton flex h-[18rem] w-full items-center justify-center gap-5 rounded-md bg-skeleton1 p-6 md:h-[22rem] md:w-[calc(100%/3)]`}
                                    >
                                        <AiFillPicture className="text-[8rem] opacity-30" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};
