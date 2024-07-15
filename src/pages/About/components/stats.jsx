import React from 'react';
import logo from '../../../assets/images/logolionsgeek.png'
import stars from '../../../assets/images/fivestars.png'
import staff from '../../../assets/images/team.jpg'
import { useTranslation } from 'react-i18next';
import { useAppContext } from '../../../utils/contextProvider';

export const Stats = () => {
    const { t } = useTranslation();
    const { selectedLanguage } = useAppContext();

    return (
        <>
<section className="py-[10vh]">
<div className={`w-full flex flex-col ${selectedLanguage === "ar" ? "md:flex-row-reverse" : "md:flex-row"} justify-center md:px-16 px-4 pb-[10vh]`}>
    <div className={`w-full md:w-full flex justify-start md:justify-start  ${selectedLanguage === "ar" ? "md:justify-end" : ""}`}>
        <h1 className={`text-4xl md:text-6xl font-bold text-center ${selectedLanguage === "ar" ? "md:flex-row-reverse" : ""}`}>
            {t('main.about.section3.title.first')}
        </h1>
    </div>
    <p className={`text-md md:text-xl font-medium w-full md:w-[50vw] mt-4 md:mt-0 h-14 cursor-default text-center ${selectedLanguage === "ar" ? "md:text-right md:text-[1.4rem]" : "md:text-left"}`}>
        {t('main.about.section3.title.second')} <span className={`text-yellow-400  ${selectedLanguage === "ar" ? "md:hidden" : ""}`}>:</span>
    </p>
</div>

    <div className={`containerr flex flex-col md:flex-row px-4 md:px-16  ${selectedLanguage === "ar" ? "md:flex-row-reverse" : ""}`}>
        <div className="left w-full md:w-[40vw] flex justify-center md:justify-start">
            <img src={staff} alt="" className='w-[80%] rounded-lg border-4 border-alpha'/>
        </div>

        <div className={`right flex flex-col justify-center items-center w-full md:w-[60vw] mt-8 md:mt-0  ${selectedLanguage === "ar" ? "md:items-start" : ""}`}>
            <div className="allcards flex flex-row justify-around w-full md:w-[50vw]">
                <div className="card3 xl:border-t-2 xl:border-t-alpha w-[50%] md:w-[17vw] xl:py-[6vh] py-[2vh] hover:scale-105 transition duration-500 cursor-default my-4 md:my-0">
                    <div className="text">
                        <p className='text-4xl md:text-6xl font-bold px-4 text-alpha mr-4'>+<span className='text-black font-bold'>{t('main.about.section3.numbers.firststatus.name')}</span></p>
                        <p className={`text-xl font-medium text-gray-950 ml-4 w-[80%] h-[15vh] flex items-center justify-center ${selectedLanguage === "ar" ? "text-[22px]" : "text-base"} `}>{t('main.about.section3.numbers.firststatus.description')}</p>
                    </div>
                </div>

                <div className="card3 xl:border-t-2 xl:border-t-alpha w-[50%] md:w-[17vw] xl:py-[6vh] py-[2vh] hover:scale-105 transition duration-500 cursor-default my-4 md:my-0">
                    <div className="text">
                        <p className='text-4xl md:text-6xl font-bold px-4 text-alpha mr-4'>+<span className='text-black font-bold'>{t('main.about.section3.numbers.firststatus.name')}</span></p>
                        <p className={`text-xl font-medium text-gray-950 ml-4 w-[80%] h-[15vh] flex items-center justify-center ${selectedLanguage === "ar" ? "text-[22px]" : "text-base"} `}>{t('main.about.section3.numbers.secondstatus.description')}</p>
                    </div>
                </div>
            </div>

            <div className="bottomcard w-full flex justify-center items-center md:justify-center mt-8 md:mt-0">
                <div className="card3 xl:border-t-2 xl:border-t-alpha w-[50%] md:w-[17vw] xl:py-[6vh] py-[2vh] hover:scale-105 transition duration-500 cursor-default my-4 md:my-0">
                    <div className="text">
                        <p className='text-4xl md:text-6xl font-bold px-4 text-alpha mr-4'>+<span className='text-black font-bold'>{t('main.about.section3.numbers.firststatus.name')}</span></p>
                        <p className={`text-xl font-medium text-gray-950 ml-4 w-[80%] h-[15vh] flex items-center justify-center ${selectedLanguage === "ar" ? "text-[22px]" : "text-base"} `}>{t('main.about.section3.numbers.thirdstatus.description')}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

        </>

    );
};

