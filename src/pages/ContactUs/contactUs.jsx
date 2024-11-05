import { IoLocationOutline } from "react-icons/io5";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import Button from "../../components/Button";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useAppContext } from "../../utils/contextProvider";
import axios from "axios";


export const ContactUs = () => {

    const { t } = useTranslation()
    const { selectedLanguage, URL } = useAppContext();
    useGSAP(
        () => {
            let tl = gsap.timeline({ defaults: { ease: "pwer4inOut" } })
            tl.to('.tessst', { opacity: 1, y: 0, duration: 1.5, 'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' })
                .to('.input', { opacity: 1, y: 0, duration: 0.2, stagger: .3, 'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }, '-=1.4'
                )
        },
    );

    const [formInfo, setFormInfo] = useState({
        first: '',
        last: '',
        phone: '',
        email: '',
        message: '',
    });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormInfo((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const formFilled = Object.values(formInfo).every(value => value.trim() !== '');
    const [loading, setLoading] = useState(false);
    const onFormSubmit = (e) => {
        e.preventDefault();
        setLoading(true)
        const formData = new FormData();
        Object.keys(formInfo).forEach(key => {
            formData.append(key, formInfo[key]);
        });
        axios.post(URL + 'contact',
            formInfo
        )
            .then(() => {
                setFormInfo({
                    first: '',
                    last: '',
                    phone: '',
                    email: '',
                    message: '',
                })
                alert('Message Received.');
            })
            .catch((error) => {
                console.log(error);
            });

        setLoading(false);
    }

    return (
        <>
            <div className="py-[12vh] flex flex-col justify-center lg:px-16 px-5 mt-16">
                <div className={`flex lg:flex-row flex-col justify-between  gap-8 ${selectedLanguage === 'ar' ? 'lg:flex-row-reverse' : ''}`}>
                    <div className="lg:w-[50%] flex flex-col gap-6  px-3">
                        <div className="tessst opacity-0 translate-y-12 [clip-path: polygon((0 100%, 100% 100%, 100% 100%, 0% 100%)]">
                            <h1 className={`font-bold text-[2.1rem] ${selectedLanguage === 'ar' ? 'text-end' : ''}`}>{t('main.contactUs.title1')}</h1>
                            <h1 className={`font-bold text-[2.1rem] ${selectedLanguage === 'ar' ? 'text-end' : ''}`}>{t('main.contactUs.title2')}</h1>
                        </div>
                        <div className='flex flex-col gap-2 tessst opacity-0 translate-y-12 [clip-path: polygon((0 100%, 100% 100%, 100% 100%, 0% 100%)]'>
                            <p className={`${selectedLanguage === 'ar' ? 'text-end' : ''}`}>{t('main.contactUs.paragraphe1')}</p>
                            <p className={`${selectedLanguage === 'ar' ? 'text-end' : ''}`}>{t('main.contactUs.paragraphe2')}</p>
                        </div>
                        <div className={`flex flex-col gap-1 text-gray-500 font-thin text-[0.9rem] ${selectedLanguage === 'ar' ? 'items-end' : ''}`}>
                            <div className={`flex items-center ${selectedLanguage === 'ar' ? 'flex-row-reverse' : ''} gap-2 tessst opacity-0 translate-y-12 [clip-path: polygon(0 100%, 95% 100%, 100% 100%, 0% 100%)]`}>
                                <IoLocationOutline />
                                <p>{t('main.contactUs.address')}</p>
                            </div>
                            <div className={`flex items-center ${selectedLanguage === 'ar' ? 'flex-row-reverse' : ''} gap-2 tessst opacity-0 translate-y-12 [clip-path: polygon(0 100%, 95% 100%, 100% 100%, 0% 100%)]`}>
                                <IoPhonePortraitOutline />
                                <p>+212 522 662 660</p>
                            </div>
                            <div className={`flex items-center ${selectedLanguage === 'ar' ? 'flex-row-reverse' : ''} gap-2 tessst opacity-0 translate-y-12 [clip-path: polygon(0 100%, 95% 100%, 100% 100%, 0% 100%)]`}>
                                <MdOutlineMailOutline />
                                <p>contact@lionsgeek.ma</p>
                            </div>
                        </div>
                    </div>
                    <form onSubmit={onFormSubmit} className={`lg:w-[40%] py-6 px-7 shadow-md  border border-white/55 rounded-lg flex  ${selectedLanguage === 'ar' ? 'items-end' : 'items-start'} flex-col gap-6 bg-200/75`}>
                        <div className="input opacity-0 translate-y-12 [clip-path: polygon(0 100%, 95% 100%, 100% 100%, 0% 100%)] relative h-11 w-full min-w-[200px]">
                            <input
                                onChange={handleInputChange}
                                value={formInfo.first} type="text" name="first" id="first"
                                className={`${selectedLanguage === 'ar' ? 'text-end' : ''} peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-alpha focus:outline-0 `}
                                placeholder=" "
                            />
                            <label className={`pt-1 pointer-events-none absolute ${selectedLanguage === 'ar' ? 'right-0' : 'left-0'}  -top-1.5 transition-all after:content[' '] peer-placeholder-shown:text-sm  peer-placeholder-shown:leading-[4.25] peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-alpha text-gray-500`}>
                                {t('main.contactUs.first_name')}
                            </label>
                        </div>
                        <div className="input opacity-0 translate-y-12 [clip-path: polygon(0 100%, 95% 100%, 100% 100%, 0% 100%)] relative h-11 w-full min-w-[200px]">
                            <input
                                onChange={handleInputChange}
                                value={formInfo.last} type="text" name="last" id="last"
                                className={` ${selectedLanguage === 'ar' ? 'text-end' : ''} peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-alpha focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50`}
                                placeholder=" "
                            />
                            <label className={`pt-1 pointer-events-none absolute ${selectedLanguage === 'ar' ? 'right-0' : 'left-0'}  -top-1.5 transition-all after:content[' '] peer-placeholder-shown:text-sm  peer-placeholder-shown:leading-[4.25] peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-alpha text-gray-500`}>
                                {t('main.contactUs.last_name')}
                            </label>
                        </div>
                        <div className="input opacity-0 translate-y-12 [clip-path: polygon(0 100%, 95% 100%, 100% 100%, 0% 100%)] relative h-11 w-full min-w-[200px]">
                            <input
                                onChange={handleInputChange}
                                value={formInfo.phone} type="tel" name="phone" id="phone"
                                className={` ${selectedLanguage === 'ar' ? 'text-end' : ''} peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-alpha focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50`}
                                placeholder=" "
                            />
                            <label className={`pt-1 pointer-events-none absolute ${selectedLanguage === 'ar' ? 'right-0' : 'left-0'}  -top-1.5 transition-all after:content[' ']  peer-placeholder-shown:text-sm  peer-placeholder-shown:leading-[4.25] peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-alpha text-gray-500`}>
                                {t('main.contactUs.phone_number')}
                            </label>
                        </div>
                        <div className="input opacity-0 translate-y-12 [clip-path: polygon(0 100%, 95% 100%, 100% 100%, 0% 100%)] relative h-11 w-full min-w-[200px]">
                            <input
                                onChange={handleInputChange}
                                value={formInfo.email} type="email" name="email" id="email"
                                className={`${selectedLanguage === 'ar' ? 'text-end' : ''} peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-alpha focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50`}
                                placeholder=" "
                            />
                            <label className={`pt-1 pointer-events-none absolute ${selectedLanguage === 'ar' ? 'right-0' : 'left-0'}  -top-1.5 transition-all after:content[' ']  peer-placeholder-shown:text-sm  peer-placeholder-shown:leading-[4.25] peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-alpha text-gray-500`}>
                                {t('main.contactUs.email')}
                            </label>
                        </div>
                        <div className="input opacity-0 translate-y-12 [clip-path: polygon(0 100%, 95% 100%, 100% 100%, 0% 100%)] relative h-11 w-full min-w-[200px]">
                            {/* <input
                                className="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-alpha focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                placeholder=" "
                            /> */}
                            <textarea name="message" id="message"
                                onChange={handleInputChange} value={formInfo.message}
                                className={`${selectedLanguage === 'ar' ? 'text-end' : ''} resize-none  peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-alpha focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50`}
                                placeholder=" " />
                            <label className={`pt-1 pointer-events-none absolute ${selectedLanguage === 'ar' ? 'right-0' : 'left-0'}  -top-1.5 transition-all after:content[' '] peer-placeholder-shown:text-sm  peer-placeholder-shown:leading-[4.25] peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-alpha text-gray-500`}>
                                {t('main.contactUs.message')}
                            </label>
                        </div>
                        <div className="input opacity-0 translate-y-12 [clip-path:polygon(0 100%, 95% 100%, 100% 100%, 0% 100%)]">
                            <Button disabled={!formFilled} className={' text-[0.9rem]  font-normal mt-2 px-4'}>
                                {
                                    loading ?
                                        <div role="status" className="flex items-center justify-center">
                                            <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin fill-[#fee819]" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                            </svg>
                                            
                                        </div>
                                        :
                                        <>
                                            {t('main.contactUs.send_message')}
                                        </>
                                }
                            </Button>
                        </div>
                        {/* <button className="bg-alpha mt-2 text-gray-800 font-light text-[0.9rem] px-4 py-2 rounded-lg shadow-md">Send Message</button> */}
                    </form>
                </div>
            </div>
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.0584384950844!2d-7.5364266246542515!3d33.60378817332915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cdb2f812837f%3A0xbbcfc74fbc11b2d9!2sLionsGeek!5e0!3m2!1sen!2sma!4v1719408103931!5m2!1sen!2sma" className='w-full h-[45vh] filter grayscale focus:border-none focus:outline-none map' allowfullscreen="" loading="lazy" ></iframe> */}
        </>
    )
}