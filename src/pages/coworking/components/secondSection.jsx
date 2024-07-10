import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaWifi, FaUsers } from "react-icons/fa";
import { PiSecurityCameraDuotone } from "react-icons/pi";

export const SecondSectionCoworking = () => {
    const { t } = useTranslation();
    return (
        <div className='p-5 lg:px-16 py-20 flex flex-col gap-5'>
            <div className='w-full text-center pb-10'>
                <h1 className='text-lg lg:text-xl'>{t('main.coworking.section2.titleSection.first')}</h1>
                <h1 className='text-2xl lg:text-5xl font-bold'>{t('main.coworking.section2.titleSection.second')}</h1>
            </div>
            <div className='w-full flex flex-wrap justify-evenly gap-y-7 gap-x-1  lg:py-5'>
                <div className='w-5/6 md:w-[45%] lg:w-1/4 px-5 py-10 flex flex-col text-center items-center gap-2  shadow-lg rounded-xl hover:scale-105 duration-300 '>
                    <div className='size-20 '>
                        <FaWifi className='w-full h-full fill-alpha' /> 
                    </div>
                    <h1 className='text-xl font-bold'>{t('main.coworking.section2.cards.wifi.title')}</h1>
                    <p className='text-sm'>{t('main.coworking.section2.cards.wifi.description')}</p>
                </div>
                <div className='w-5/6 md:w-[45%] lg:w-1/4 px-5 py-10 flex flex-col text-center items-center gap-2  shadow-lg rounded-xl hover:scale-105 duration-300 '>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-20 fill-alpha ">
                        <path d="M12 9a3.75 3.75 0 1 0 0 7.5A3.75 3.75 0 0 0 12 9Z" />
                        <path fill-rule="evenodd" d="M9.344 3.071a49.52 49.52 0 0 1 5.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 0 1-3 3h-15a3 3 0 0 1-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 0 0 1.11-.71l.822-1.315a2.942 2.942 0 0 1 2.332-1.39ZM6.75 12.75a5.25 5.25 0 1 1 10.5 0 5.25 5.25 0 0 1-10.5 0Zm12-1.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" />
                    </svg>
                    <h1 className='text-xl font-bold'>{t('main.coworking.section2.cards.Photography.title')}</h1>
                    <p className='text-sm'>{t('main.coworking.section2.cards.Photography.description')}</p>
                </div>

                <div className='w-5/6 md:w-[45%] lg:w-1/4 px-5 py-10 flex flex-col text-center items-center gap-2  shadow-lg rounded-xl hover:scale-105 duration-300 '>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-20 fill-alpha ">
                        <path d="M4.5 4.5a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h8.25a3 3 0 0 0 3-3v-9a3 3 0 0 0-3-3H4.5ZM19.94 18.75l-2.69-2.69V7.94l2.69-2.69c.944-.945 2.56-.276 2.56 1.06v11.38c0 1.336-1.616 2.005-2.56 1.06Z" />
                    </svg>

                    <h1 className='text-xl font-bold'>{t('main.coworking.section2.cards.Podcast.title')}</h1>
                    <p className='text-sm'>{t('main.coworking.section2.cards.Podcast.description')}</p>
                </div>
                <div className='w-5/6 md:w-[45%] lg:w-1/4 px-5 py-10 flex flex-col text-center items-center gap-2  shadow-lg rounded-xl hover:scale-105 duration-300 '>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-20 fill-alpha ">
                        <path fill-rule="evenodd" d="M11.622 1.602a.75.75 0 0 1 .756 0l2.25 1.313a.75.75 0 0 1-.756 1.295L12 3.118 10.128 4.21a.75.75 0 1 1-.756-1.295l2.25-1.313ZM5.898 5.81a.75.75 0 0 1-.27 1.025l-1.14.665 1.14.665a.75.75 0 1 1-.756 1.295L3.75 8.806v.944a.75.75 0 0 1-1.5 0V7.5a.75.75 0 0 1 .372-.648l2.25-1.312a.75.75 0 0 1 1.026.27Zm12.204 0a.75.75 0 0 1 1.026-.27l2.25 1.312a.75.75 0 0 1 .372.648v2.25a.75.75 0 0 1-1.5 0v-.944l-1.122.654a.75.75 0 1 1-.756-1.295l1.14-.665-1.14-.665a.75.75 0 0 1-.27-1.025Zm-9 5.25a.75.75 0 0 1 1.026-.27L12 11.882l1.872-1.092a.75.75 0 1 1 .756 1.295l-1.878 1.096V15a.75.75 0 0 1-1.5 0v-1.82l-1.878-1.095a.75.75 0 0 1-.27-1.025ZM3 13.5a.75.75 0 0 1 .75.75v1.82l1.878 1.095a.75.75 0 1 1-.756 1.295l-2.25-1.312a.75.75 0 0 1-.372-.648v-2.25A.75.75 0 0 1 3 13.5Zm18 0a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.372.648l-2.25 1.312a.75.75 0 1 1-.756-1.295l1.878-1.096V14.25a.75.75 0 0 1 .75-.75Zm-9 5.25a.75.75 0 0 1 .75.75v.944l1.122-.654a.75.75 0 1 1 .756 1.295l-2.25 1.313a.75.75 0 0 1-.756 0l-2.25-1.313a.75.75 0 1 1 .756-1.295l1.122.654V19.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
                    </svg>

                    <h1 className='text-xl font-bold'>{t('main.coworking.section2.cards.Recreation.title')}</h1>
                    <p className='text-sm'>{t('main.coworking.section2.cards.Recreation.description')}</p>
                </div>
                <div className='w-5/6 md:w-[45%] lg:w-1/4 px-5 py-10 flex flex-col text-center items-center gap-2  shadow-lg rounded-xl hover:scale-105 duration-300 '>
                    <div className='size-20 '>
                        <FaUsers className='w-full h-full fill-alpha' />
                    </div>
                    <h1 className='text-xl font-bold'>{t('main.coworking.section2.cards.Networking.title')}</h1>
                    <p className='text-sm'>{t('main.coworking.section2.cards.Networking.description')}</p>
                </div>
                <div className='w-5/6 md:w-[45%] lg:w-1/4 px-5 py-10 flex flex-col text-center items-center gap-2  shadow-lg rounded-xl hover:scale-105 duration-300 '>
                    <div className='size-20 '>
                        <PiSecurityCameraDuotone className='w-full h-full fill-alpha' />
                    </div>
                    <h1 className='text-xl font-bold'>{t('main.coworking.section2.cards.Security.title')}</h1>
                    <p className='text-sm'>{t('main.coworking.section2.cards.Security.description')}</p>
                </div>
            </div>
        </div>
    );
};

