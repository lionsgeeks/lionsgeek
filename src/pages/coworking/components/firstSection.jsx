import React from 'react';
import herocowork from '../../../assets/images/cowork.png'
import { Button } from '../../../components';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
export const FirstSectionCoworking = () => {
    const { t } = useTranslation()
    return (
        <>
            <div className='p-4 lg:p-16 '>
                <div className='w-full flex flex-col-reverse md:flex-row lg:flex-row gap-2 '>
                    <div className='w-full md:w-1/2 lg:w-1/2 px-7 flex flex-col md:gap-2 gap-5'>
                        <h1 className='text-3xl text-center md:text-3xl md:text-start lg:text-6xl md:pb-0 py-5 font-bold'>{t('main.coworking.section1.title.first')} <span className='text-alpha selection:bg-alpha selection:text-black'>{t('main.coworking.section1.title.second')}</span>  {t('main.coworking.section1.title.third')}</h1>
                        <p className='w-full md:text-sm lg:w-2/3  py-5 '>{t('main.coworking.section1.description')}</p>
                        <Link to={"/contact-us"}><Button className={'w-full md:w-fit lg:w-fit'}>{t('main.coworking.section1.button')}</Button></Link>
                    </div>
                    <div className='w-full md:w-1/2  lg:w-1/2 flex justify-center md:items-center'>
                        <div className=' w-full h-[40vh] lg:h-[60vh] '>
                            <img className='h-full w-full rounded-lg ' src={herocowork} alt="img" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
