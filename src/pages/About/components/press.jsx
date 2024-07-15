import React from 'react';
import { useTranslation } from 'react-i18next';
export const Press = () => {
    const { t } = useTranslation()
    return (
<section className='py-[4vh]'>
<div className="w-full text-center pb-10">
            <h1 className="text-xl">{t('main.about.section4.title.first')}</h1>
            <h1 className="xl:text-5xl text-3xl font-bold">{t('main.about.section4.title.second')}</h1>
          </div>

    <div className="cards flex flex-wrap justify-center md:justify-around px-4 md:px-16">
        <div className="flex flex-col items-center w-full md:w-auto mb-12 md:mb-0">
            <div className="card w-[80vw] md:w-[20vw] grayscale-[75%] hover:grayscale-0 h-[50vh] rounded-lg hover:scale-105 transition-all duration-300"></div>
            <div className="text w-[80vw] md:w-[20vw] flex flex-col mt-3">
                <p className='font-bold py-1 text-center'>{t('main.about.section4.cards.firstcard.title')}</p>
                <p className='font-normal w-full text-md rounded-xl text-black text-center'>{t('main.about.section4.cards.firstcard.description')}</p>
            </div>
        </div>

        <div className="flex flex-col items-center w-full md:w-auto mb-12 md:mb-0">
            <div className="card w-[80vw] md:w-[20vw] grayscale-[75%] hover:grayscale-0 h-[50vh] rounded-lg hover:scale-105 transition-all duration-300"></div>
            <div className="text w-[80vw] md:w-[20vw] flex flex-col mt-3">
                <p className='font-bold py-1 text-center'>{t('main.about.section4.cards.firstcard.title')}</p>
                <p className='font-normal w-full text-md rounded-xl text-black text-center'>{t('main.about.section4.cards.firstcard.description')}</p>
            </div>
        </div>

        <div className="flex flex-col items-center w-full md:w-auto mb-12 md:mb-0">
            <div className="card w-[80vw] md:w-[20vw] grayscale-[75%] hover:grayscale-0 h-[50vh] rounded-lg hover:scale-105 transition-all duration-300"></div>
            <div className="text w-[80vw] md:w-[20vw] flex flex-col mt-3">
                <p className='font-bold py-1 text-center'>{t('main.about.section4.cards.firstcard.title')}</p>
                <p className='font-normal w-full text-md rounded-xl text-black text-center'>{t('main.about.section4.cards.firstcard.description')}</p>
            </div>
        </div>

        <div className="flex flex-col items-center w-full md:w-auto mb-12 md:mb-0">
            <div className="card w-[80vw] md:w-[20vw] grayscale-[75%] hover:grayscale-0 h-[50vh] rounded-lg hover:scale-105 transition-all duration-300"></div>
            <div className="text w-[80vw] md:w-[20vw] flex flex-col mt-3">
                <p className='font-bold py-1 text-center'>{t('main.about.section4.cards.firstcard.title')}</p>
                <p className='font-normal w-full text-md rounded-xl text-black text-center'>{t('main.about.section4.cards.firstcard.description')}</p>
            </div>
        </div>
    </div>
</section>

    );
};

