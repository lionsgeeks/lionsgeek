import React, { useEffect, useState } from 'react';
import Button from '../components/Button';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const [isMoreOpen, setIsMoreOpen] = useState(false);
    const [isOpenn, setIsOpenn] = useState(false)
    const navigate = useNavigate()

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const toggleMoreMenu = () => {
        setIsMoreOpen(!isMoreOpen);
        setIsOpenn(!isOpenn)

    };


    const location = useLocation();
    console.log(location.pathname);

    return (
        <div className="">
            <div className="antialiased  dark-mode:bg-gray-900">
                <div className="w-full text-gray-700 bg-gray-50 dark-mode:text-gray-200 dark-mode:bg-gray-800">
                    <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
                        <div className="flex flex-row items-center justify-between p-4">
                            <a href="#" className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline">
                                <svg xmlns="http://www.w3.org/2000/svg" width="206.551" height="35.121">
                                    <g data-name="Groupe 19" fill="#000000">
                                        <g data-name="Groupe 4">
                                            <path data-name="Tracé 12" d="M29.876 0H7.053L0 21.706l18.464 13.415 18.468-13.415zM18.465 27.506L7.243 19.353l4.286-13.192H25.4l4.286 13.192z" />
                                            <path data-name="Tracé 13" d="M13.177 19.326l5.288 3.841 5.288-3.841z" />
                                        </g>
                                        <g data-name="Groupe 5">
                                            <path data-name="Tracé 1" d="M54 26.089V8.273h2.231v17.544l9.656-.272v1.9l-10.227.272A1.485 1.485 0 0154 26.089z" />
                                            <path data-name="Tracé 2" d="M75.024 10.177V25.55h4.271v1.9h-10.8v-1.9h4.3V10.181h-4.3v-1.9h10.8v1.9z" />
                                            <path data-name="Tracé 3" d="M89.575 8c5.6 0 8.922 4.271 8.922 9.847 0 5.6-3.318 9.874-8.922 9.874-5.658 0-8.976-4.271-8.976-9.874 0-5.576 3.319-9.847 8.976-9.847zm0 17.817c4.516 0 6.692-3.373 6.692-7.97 0-4.57-2.176-7.942-6.692-7.942-4.542 0-6.746 3.373-6.746 7.942.001 4.597 2.204 7.97 6.746 7.97z" />
                                            <path data-name="Tracé 4" d="M101.677 8.273h4.488l9.575 18.55h.626l-.354-1.6V8.277h2.2V27.45h-4.488l-9.548-18.551h-.625l.354 1.6V27.45h-2.231z" />
                                            <path data-name="Tracé 5" d="M130.02 27.721c-6.692 0-8.677-2.965-8.677-7.453h2.23c0 4.543 2.421 5.549 6.447 5.549 3.264 0 5.141-.788 5.141-3.1 0-2.91-3.373-3.509-6.419-4.406-3.781-1.142-6.528-2.176-6.528-5.576 0-2.938 2.067-4.734 6.8-4.734 5.658 0 7.589 3.455 7.589 6.583h-2.23c0-3.264-2.421-4.678-5.359-4.678-2.638 0-4.57.653-4.57 2.774 0 2.013 1.687 2.748 4.842 3.727 3.754 1.169 8.106 2.2 8.106 6.2-.003 2.857-1.716 5.114-7.372 5.114z" />
                                            <path data-name="Tracé 6" d="M148.539 8c4.814 0 7.48 2.938 8.051 7.127h-2.23c-.435-3.155-2.04-5.222-5.821-5.222-4.488 0-6.828 3.264-6.828 7.942 0 4.706 1.714 7.97 6.2 7.97 3.781 0 5.576-2.2 5.495-6.8h-6.554v-1.8h9.466c1.115 0 1.632.49 1.632 1.5v8.731h-2.231v-7.154l.353-2.448h-.625c-.027 6.691-2.611 9.874-7.562 9.874-5.631 0-8.405-4.216-8.405-9.874.001-5.63 3.51-9.846 9.059-9.846z" />
                                            <path data-name="Tracé 7" d="M161.076 8.273h11.886v1.9h-9.656v6.719h8.3v1.9h-8.3v6.746h9.656v1.9h-11.886z" />
                                            <path data-name="Tracé 8" d="M176.143 8.273h11.887v1.9h-9.656v6.719h8.3v1.9h-8.3v6.746h9.656v1.9h-11.887z" />
                                            <path data-name="Tracé 9" d="M194.855 17.85l11.7 9.6h-3.209l-9.9-8.16v8.16h-2.231V8.274h2.231v8.16l9.9-8.16h3.209z" />
                                        </g>
                                    </g>
                                </svg>
                            </a>
                            <button className="rounded-lg md:hidden focus:outline-none focus:shadow-outline" onClick={toggleNavbar}>
                                <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                                    {isOpen ? (
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    ) : (
                                        <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd" />
                                    )}
                                </svg>
                            </button>
                        </div>
                        <nav className={`flex-col ${isOpen ? 'flex' : 'hidden'} gap-6 pb-4 md:pb-0 md:flex md:justify-end md:flex-row`}>
                            <Link to={'/'} className={`px-2 py-2 text-sm relative after:absolute after:border-b-[2px]  after:bottom-[-13px] after:left-0 after:w-0 hover:after:w-[100%] after:transition-all after:duration-[0.35s]  ${location.pathname == '/' ? 'font-medium  after:border-alpha after:w-[100%]' : 'after:border-gray-300'}`}>Home</Link>
                            <div className="relative">
                                <button onClick={toggleMoreMenu} className="px-2 py-2 font-normal focus:font-medium text-sm relative after:absolute after:border-b-[2px] after:border-gray-300  after:bottom-[-17px] after:left-0 after:w-0 hover:after:w-[100%] after:transition-all after:duration-[0.35s] focus:after:w-[100%] focus:after:border-alpha">
                                    <span>Formation</span>
                                    <svg fill="currentColor" viewBox="0 0 20 20" className={`inline w-4 h-4 ml-1 transition-transform duration-200 transform ${isMoreOpen ? 'rotate-180' : 'rotate-0'}`}>
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                                {isMoreOpen && (
                                    <div className="absolute left-0 w-full md:max-w-screen-sm md:w-screen mt-2 origin-top-right">
                                        <div className="px-2 pt-2 pb-4 bg-white rounded-md lg:w-[17vw] shadow-lg dark-mode:bg-gray-700">
                                            <a href="#" className=" flex flex-row items-start rounded-lg bg-transparent p-2 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                                                <div className="bg-teal-500 text-white rounded-lg p-3">
                                                    <svg className='fill-white' height="20" viewBox="0 0 1792 1792" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M553 1399l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23t-10 23l-393 393 393 393q10 10 10 23t-10 23zm591-1067l-373 1291q-4 13-15.5 19.5t-23.5 2.5l-62-17q-13-4-19.5-15.5t-2.5-24.5l373-1291q4-13 15.5-19.5t23.5-2.5l62 17q13 4 19.5 15.5t2.5 24.5zm657 651l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23t-10 23z" /></svg>                                                </div>
                                                <div className="ml-3">
                                                    <p className="font-semibold">Learn to Code</p>
                                                    <p className="text-sm text-nowrap">Build Your Future in Tech</p>
                                                </div>
                                            </a>
                                            <a href="#" className=" flex flex-row items-start rounded-lg bg-transparent p-2 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                                                <div className="bg-pink-500 text-white rounded-lg p-3">
                                                    <svg className='fill-white' height="20" viewBox="0 0 1792 1792" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M553 1399l-50 50q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l466-466q10-10 23-10t23 10l50 50q10 10 10 23t-10 23l-393 393 393 393q10 10 10 23t-10 23zm591-1067l-373 1291q-4 13-15.5 19.5t-23.5 2.5l-62-17q-13-4-19.5-15.5t-2.5-24.5l373-1291q4-13 15.5-19.5t23.5-2.5l62 17q13 4 19.5 15.5t2.5 24.5zm657 651l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393-393-393q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23t-10 23z" /></svg>                                                </div>
                                                <div className="ml-3">
                                                    <p className="font-semibold">Master Media Arts</p>
                                                    <p className="text-sm text-nowrap">Unleash Your Creativity</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <Link to={''}  className={`px-2 py-2 text-sm relative after:absolute after:border-b-[2px]  after:bottom-[-13px] after:left-0 after:w-0 hover:after:w-[100%] after:transition-all after:duration-[0.35s]  ${location.pathname == '' ? 'font-medium  after:border-alpha after:w-[100%]' : 'after:border-gray-300'}`}>Coworking</Link>
                            <Link to={''}  className={`px-2 py-2 text-sm relative after:absolute after:border-b-[2px]  after:bottom-[-13px] after:left-0 after:w-0 hover:after:w-[100%] after:transition-all after:duration-[0.35s]  ${location.pathname == '' ? 'font-medium  after:border-alpha after:w-[100%]' : 'after:border-gray-300'}`}>Events</Link>
                            <Link to={''}  className={`px-2 py-2 text-sm relative after:absolute after:border-b-[2px]  after:bottom-[-13px] after:left-0 after:w-0 hover:after:w-[100%] after:transition-all after:duration-[0.35s]  ${location.pathname == '' ? 'font-medium  after:border-alpha after:w-[100%]' : 'after:border-gray-300'}`}>About</Link>
                            <Link to={''}  className={`px-2 py-2 text-sm relative after:absolute after:border-b-[2px]  after:bottom-[-13px] after:left-0 after:w-0 hover:after:w-[100%] after:transition-all after:duration-[0.35s]  ${location.pathname == '' ? 'font-medium  after:border-alpha after:w-[100%]' : 'after:border-gray-300'}`}>Gallerie</Link>
                            {/* <a href="#" className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-2 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">Contact Us</a> */}
                            {/* <a href="#" className="bg-alpha  md:mt-0 md:ml-2 font-light text-[0.9rem] px-4 py-2 rounded-lg shadow-md border border-alpha hover:text-alpha hover:bg-transparent hover:border hover:border-alpha  text-center">Contact Us</a> */}
                            <Button onClick={() => navigate('/contact-us')} className={'shadow-md font-normal px-4 text-[0.8rem] mt-0'}>Contact Us</Button>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

