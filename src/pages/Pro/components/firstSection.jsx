import gsap from 'gsap';
import codePic from '../../../assets/images/code.jpg'
import audioviuelPic from '../../../assets/images/audiovisuelle.jpg'
import marketingPic from '../../../assets/images/marketing.jpg'
import { useGSAP } from '@gsap/react';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { MyContext } from '../../../utils/contextProvider';
export const 
FirstSectionPro = () => {
    const { t, i18n } = useTranslation();
    const { selectedLanguage, setSelectedLanguage } = useContext(MyContext)


    return (
        <>
            <div className="w-full">
                {/* hero section */}
                <div className="flex flex-col gap-4 w-full items-center py-8  self-center ">
                    <h1 className="lg:text-7xl text-3xl font-bold">{t('main.lionsgeekpro.firstsection.first-title')}</h1>
                    <p className="lg:text-2xl  font-normal lg:w-[50%] w-[95%] text-center ">
                        {t('main.lionsgeekpro.header.title')}
                    </p>
                </div>



                <div className=" h-fit  w-full flex flex-col  justify-center items-center">
                    <div className="  gap-10 lg:p-10     w-[90%]    ">
                        <div className={`lg:flex  flex flex-col-reverse   ${selectedLanguage === "ar" ? "md:flex-row-reverse " : "md:flex-row"}`} >

                            <div className={`lg:w-[50%] w-full   ${selectedLanguage === "ar" ? "  text-end w-[100%]  " : "md:"}`}>
                                <div className={`flex flex-col  gap-4   ${selectedLanguage === "ar" ? "lg:w-[100%]" : "lg:w-[70%]"}`}>
                                    <h1 className='text-9xl font-bold text-alpha'>1</h1>
                                    <h1 className="lg:text-7xl text-4xl font-bold"> {t('main.lionsgeekpro.firstsection.title1')}</h1>
                                    <h2 className="text-2xl font-bold">{t('main.lionsgeekpro.firstsection.title2')} </h2>
                                    <p> {t('main.lionsgeekpro.firstsection.desc1')}</p>
                                    <h2 className="text-2xl font-bold"> {t('main.lionsgeekpro.firstsection.title3')}</h2>
                                    <p> {t('main.lionsgeekpro.firstsection.desc3')}</p>
                                    <h2 className="text-2xl font-bold">{t('main.lionsgeekpro.firstsection.title4')}</h2>
                                    <p> {t('main.lionsgeekpro.firstsection.title1')}</p>
                                </div>
                            </div>
                            <div className="lg:w-[50%]   relative scroll-smooth "> <img className='lg:w-[90%] sticky top-5  ' src={codePic} alt="" /></div>
                        </div>
                    </div>


                    <div className="  gap-10 lg:p-10  lg:pt-0 pt-4   w-[90%]    ">
                        <div className={`lg:flex   ${selectedLanguage === "ar" ? "md:flex-row-reverse " : "md:flex-row"}`}>


                            <div className="lg:w-[50%] w-full  relative "> <img className='lg:w-[90%] sticky top-5' src={audioviuelPic} alt="" /></div>
                            <div className="lg:w-[50%] ">
                                <div className="flex flex-col  gap-4  lg:w-[70%]">
                                    <h1 className='text-9xl font-bold text-alpha'>2</h1>
                                    <h1 className="lg:text-7xl text-4xl font-bold"> {t('main.lionsgeekpro.Secondsection.title1')}</h1>
                                    <h2 className="text-2xl font-bold">{t('main.lionsgeekpro.Secondsection.title2')}</h2>
                                    <p> {t('main.lionsgeekpro.Secondsection.desc1')}</p>
                                    <h2 className="text-2xl font-bold"> {t('main.lionsgeekpro.Secondsection.title3')}</h2>
                                    <p> {t('main.lionsgeekpro.Secondsection.desc3')}</p>
                                    <h2 className="text-2xl font-bold"> {t('main.lionsgeekpro.Secondsection.title4')}</h2>
                                    <p> {t('main.lionsgeekpro.Secondsection.desc4')}</p>
                                    <h2 className="text-2xl font-bold">{t('main.lionsgeekpro.Secondsection.title5')}</h2>
                                    <p>  {t('main.lionsgeekpro.Secondsection.desc5')}</p>
                                    <h2 className="text-2xl font-bold">  {t('main.lionsgeekpro.Secondsection.title6')}</h2>
                                    <p> {t('main.lionsgeekpro.Secondsection.desc6')}</p>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className="  gap-10 lg:p-10    w-[90%]    ">
                        <div className={`lg:flex flex flex-col-reverse   ${selectedLanguage === "ar" ? "md:flex-row-reverse " : "md:flex-row"}`}>

                            <div className={`lg:w-[50%] w-full   ${selectedLanguage === "ar" ? "  text-end w-[100%]  " : "md:"}`}>
                                <div className={`flex flex-col  gap-4   ${selectedLanguage === "ar" ? "lg:w-[100%]" : "lg:w-[70%]"}`}>
                                    <h1 className='text-9xl font-bold text-alpha'>3</h1>
                                    <h1 className="lg:text-7xl text-4xl  font-bold"> {t('main.lionsgeekpro.section3.title1')} </h1>
                                    <h2 className="text-2xl font-bold">{t('main.lionsgeekpro.section3.title2')} </h2>
                                    <p> {t('main.lionsgeekpro.section3.desc1')} </p>
                                    <h2 className="text-2xl font-bold">{t('main.lionsgeekpro.section3.title3')} </h2>
                                    <p> {t('main.lionsgeekpro.section3.desc3')} </p>
                                    <h2 className="text-2xl font-bold"> {t('main.lionsgeekpro.section3.title4')}</h2>
                                    <p> {t('main.lionsgeekpro.section3.desc4')}</p>
                                    <h2 className="text-2xl font-bold">{t('main.lionsgeekpro.section3.title5')}  </h2>
                                    <p> {t('main.lionsgeekpro.section3.desc5')} </p>
                                </div>
                            </div>
                            <div className="lg:w-[50%]  relative  "> <img className='lg:w-[90%] sticky top-5' src={marketingPic} alt="" /></div>
                        </div>
                    </div>




                    <div className="  gap-10 lg:p-10  lg:pt-0 pt-4   w-[90%]    ">
                        <div className={`lg:flex   ${selectedLanguage === "ar" ? "md:flex-row-reverse " : "md:flex-row"}`}>


                            <div className="lg:w-[50%] w-full   relative "> <img className='lg:w-[90%] sticky top-5' src={codePic} alt="" /></div>
                            <div className="lg:w-[50%] w-full ">
                                <div className="flex flex-col  gap-4  lg:w-[70%]">
                                    <h1 className='text-9xl font-bold text-alpha'>4</h1>
                                    <h1 className="lg:text-7xl text-4xl font-bold"> {t('main.lionsgeekpro.section4.title1')}  </h1>
                                    <h2 className="text-2xl font-bold"> {t('main.lionsgeekpro.section4.title2')}  </h2>
                                    <p> {t('main.lionsgeekpro.section4.desc1')} </p>
                                    <h2 className="text-2xl font-bold">  {t('main.lionsgeekpro.section4.title3')}</h2>
                                    <p> {t('main.lionsgeekpro.section4.desc3')} </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}



