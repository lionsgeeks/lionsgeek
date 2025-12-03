import { useAppContext } from '@/context/appContext';
import AppLayout from '@/layouts/app-layout';
import { Head, Link, usePage } from '@inertiajs/react';

export default function BlogDetails() {
    const { blogs, blog } = usePage().props;

    const { selectedLanguage, darkMode } = useAppContext();

    return (
        <AppLayout>
            <Head title="Blog Details" />
            {blog && (
                <div className="p-4 sm:p-6 md:p-8 lg:p-16" style={{ backgroundColor: darkMode ? '#0f0f0f' : '#ffffff' }}>
                    <div className="mb-6 sm:mb-8">
                        <img
                            loading="lazy"
                            className="h-52 w-full rounded-xl object-cover object-center shadow-lg sm:h-64 md:h-80 lg:h-96 lg:rounded-2xl"
                            src={'/storage/images/blog/' + blog.image}
                            alt={blog.title[selectedLanguage]}
                        />
                    </div>

                    <h1
                        dir={selectedLanguage == "ar" ? "rtl" : "ltr"}
                        className="mb-6 text-2xl font-extrabold leading-tight sm:mb-8 sm:text-3xl md:mb-12 md:text-4xl lg:mb-16 lg:text-5xl"
                        style={{ color: darkMode ? '#ffffff' : '#0f0f0f' }}>
                        {blog.title[selectedLanguage]}
                    </h1>

                    <div className="flex flex-col gap-6 lg:flex-row lg:gap-8">
                        <div className="w-full lg:w-3/4 lg:pe-6">
                            <div className="view ql-editor reset-tw prose prose-sm max-w-none sm:prose-base lg:prose-lg"
                                style={{ color: darkMode ? '#ffffff' : '#0f0f0f' }}>
                                <div
                                    dir={selectedLanguage == "ar" ? "rtl" : "ltr"}
                                    className="text-sm leading-relaxed sm:text-base lg:text-lg"
                                    dangerouslySetInnerHTML={{
                                        __html: blog.description[selectedLanguage],
                                    }}
                                    style={{ color: darkMode ? '#ffffff' : '#0f0f0f' }}
                                />
                            </div>
                        </div>

                        <div className="w-full border-t border-gray-200 pt-6 lg:mt-0 lg:w-1/4 lg:border-t-0 lg:border-l lg:border-gray-300 lg:pl-6 lg:pt-0">
                            <div className="sticky top-6 flex max-h-[calc(100vh-8rem)] flex-col gap-4 overflow-y-auto">
                                <h2 className="mb-2 text-xl font-bold sm:text-2xl" style={{ color: darkMode ? '#ffffff' : '#0f0f0f' }}>
                                    More Blog Articles:
                                </h2>
                                <div className="flex flex-col gap-4">
                                    {blogs.map(
                                        (blg, index) =>
                                            blg.id != blog.id && (
                                                <Link
                                                    key={index}
                                                    href={`/blogs/${blg.id}`}
                                                    className="group flex gap-3 rounded-lg border border-gray-200 p-3 transition-all duration-200 hover:border-gray-400 hover:shadow-md dark:border-gray-700 dark:hover:border-gray-500"
                                                    style={{ backgroundColor: darkMode ? '#1a1a1a' : '#f9fafb' }}
                                                >
                                                    <div className='flex flex-col w-full'>

                                                        <img
                                                            loading="lazy"
                                                            className="h-20 w-full flex-shrink-0 rounded-lg object-cover sm:h-24 mb-2"
                                                            src={'/storage/images/blog/' + blg.image}
                                                            alt={blg.title[selectedLanguage]}
                                                        />
                                                        <div className=" flex min-w-0 flex-1 flex-col gap-2 overflow-hidden">
                                                            <p
                                                                className="line-clamp-2 text-xs font-bold leading-tight sm:text-sm"
                                                                style={{ color: darkMode ? '#ffffff' : '#0f0f0f' }}
                                                            >
                                                                {blg.title[selectedLanguage]}
                                                            </p>

                                                            <div
                                                                className="line-clamp-3 text-[10px] leading-relaxed sm:text-xs"
                                                                style={{ color: darkMode ? '#d1d5db' : '#6b7280' }}
                                                                dangerouslySetInnerHTML={{
                                                                    __html:
                                                                        blg.description[selectedLanguage].length > 100
                                                                            ? blg.description[selectedLanguage].slice(0, 100) + '...'
                                                                            : blg.description[selectedLanguage],
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </Link>
                                            ),
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </AppLayout>
    );
}
