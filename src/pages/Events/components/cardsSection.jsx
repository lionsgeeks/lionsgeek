
import { useNavigate } from 'react-router-dom'
import './firstSection.sass'
import { useContext, useState } from 'react'
import myImage from '../../../assets/images/pexels-thisismitchhere-20943034.jpg';
import myImage1 from '../../../assets/images/pexels-alex-andrews-271121-1983046.jpg';
import myImage2 from '../../../assets/images/pexels-bertellifotografia-2608512.jpg';
import myImage3 from '../../../assets/images/pexels-teddy-2263410.jpg';
import { useTranslation } from 'react-i18next';
import { MyContext } from '../../../utils/contextProvider';
import SubstringText from '../../../components/SubstringText';
import { TransText } from '../../../components';
import { MdLocationPin, MdOutlineDateRange } from "react-icons/md";


export const CardsSection = () => {
    const { t, i18n } = useTranslation();
    const { selectedLanguage, setSelectedLanguage ,URL, IMAGEURL,events, setEvents } = useContext(MyContext)

    const navigate = useNavigate()
    
    // ? date format

    function DateComponent(backdate) {

        const date = new Date(`${backdate}`);
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        const formatDate = date.toLocaleDateString('en-GB', options)

        return <p>{formatDate}</p>;
    }

    return (
        <>
            <div className="w-full text-center lg:pt-5 lg:px-0 px-6">
                <h1 className="text-xl">{t('main.Events.Title1')}</h1>
                <h1 className="text-5xl font-bold">{t('main.Events.Desc1')}</h1>
            </div>

            <div className='flex justify-center items-center md:px-20 px-6 py-14 '>
                <div className="flex flex-wrap w-full lg:gap-x-[calc(10%/2)] lg:gap-y-14 md:gap-x-[calc(4%/1)] gap-10 ">
                    {events?.map((element, index) =>
                        <div key={index} className="shadow-lg h-fit overflow-hidden  lg:w-[30%] md:w-[48%] w-[100%] rounded-xl cursor-pointer" onClick={() => (navigate(`/event/${element.id}`))}>
                            <div className='w-[100%]  '>
                                <img src={`${IMAGEURL}${element.cover}`} className="w-full h-[12rem] object-cover rounded-t-xl" alt="" />
                            </div>
                            <div className="flex flex-col font-mono gap-3 py-[1rem] px-[1rem] ">
                                {/* <h3 className="text-[14px] text-gray-500"><SubstringText text={ <TransText {...element.name} /> } length={30}></SubstringText> </h3>
                                <h3 className="lg:text-[14px] font-semibold"><SubstringText text={`${element.Name}`} length={35} /></h3>
                                <h3 className="lg:text-[14px] font-semibold"><SubstringText text={`${element.Description}`} length={35} /></h3>
                                <h3 className="text-sm flex items-end "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5 ">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>  {element.Location}</h3> */}
                                <h3 className='text-[22px] font-bold truncate  '>Even Name Even Name Even NameEven NameEven NameEven Name</h3>
                                <div className="flex flex-col gap-2 overflow-hidden text-[#8b96af]">
                                    <p className='text-[15px] flex items-center gap-1  text-[#8b96af] '><MdOutlineDateRange className='fill-[#8b96af]' /> Date : {DateComponent(element?.date)}</p>
                                    <div className='text-[15px] flex items-center gap-1'>
                                        <p className='flex items-center gap-1 text-[#8b96af] truncate'><MdLocationPin className='fill-[#8b96af]' />Location:<SubstringText text={selectedLanguage =='en' ? element.location.en : selectedLanguage =='fr' ? element.location.fr : element.location.ar} length={20} /></p>
                                    </div>
                                </div>
                            </div>
                            <button className='bg-black hover:bg-[#fee819] transition duration-150 text-white w-full py-[.5rem] font-semibold '>
                                <TransText fr='Voir tout' ar='شاهد الكل' en='See all' />
                            </button>
                        </div>

                    )}
                </div>
            </div>
        </>
    )
}







































