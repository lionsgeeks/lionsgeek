import Logo from '../assets/images/lionsgeek_logo_2.png'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Button from '../components/Button';
import { FaTiktok } from "react-icons/fa6";




export const Footer = () => {
    return (
        <>
            <footer className=" lg:px-16 px-5 py-10">
                <div className=" bg-light_gray pt-10 pb-4 flex flex-col gap-10  rounded-lg lg:px-10 px-5">
                    <div className='flex lg:flex-row flex-col gap-10 justify-between lg:px-4 '>
                        <div className='flex lg:flex-row flex-col justify-center lg:gap-10 gap-2'>
                            <img src={Logo} alt="" className='lg:w-[7vw] lg:h-[7vw] w-[20vw] h-[20vw] lg:mb-0 mb-5' />
                            <div className='flex flex-col gap-3 lg:ms-5'>
                                <h1 className='font-bold text-gray-600 text-[1.2rem]'>About</h1>
                                <div>
                                    <p className='text-gray-400 text-[0.9rem]'>Become Affitiale</p>
                                    <p className='text-gray-400 text-[0.9rem]'>Become Affitiale</p>
                                    <p className='text-gray-400 text-[0.9rem]'>Become Affitiale</p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-3'>
                                <h1 className='font-bold text-gray-600 text-[1.2rem]'>About</h1>
                                <div>
                                    <p className='text-gray-400 text-[0.9rem]'>Become Affitiale</p>
                                    <p className='text-gray-400 text-[0.9rem]'>Become Affitiale</p>
                                    <p className='text-gray-400 text-[0.9rem]'>Become Affitiale</p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-3'>
                                <h1 className='font-bold text-gray-600 text-[1.2rem]'>About</h1>
                                <div>
                                    <p className='text-gray-400 text-[0.9rem]'>Become Affitiale</p>
                                    <p className='text-gray-400 text-[0.9rem]'>Become Affitiale</p>
                                    <p className='text-gray-400 text-[0.9rem]'>Become Affitiale</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-col items-start gap-2'>
                            <h1 className='font-bold text-gray-600 text-[1.2rem]'>STAY IN TOUCH</h1>
                            <div class="relative h-11 w-full min-w-[200px]">
                                <input
                                    class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-alpha focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                    placeholder=" "
                                />
                                <label class="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-alpha after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-alpha peer-focus:after:scale-x-100 peer-focus:after:border-alpha peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 text-gray-400">
                                    Type your email
                                </label>
                            </div>
                            {/* <button className="bg-alpha mt-2   font-light text-[0.8rem] px-4 py-2 rounded-lg shadow-md">SIGN UP</button> */}
                            <Button className={'shadow-md font-normal mt-2 w-full text-[0.8rem]'}>SIGN UP</Button>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-between gap-2 pt-4 border-t-[3px] border-gray-500 border-opacity-50'>
                        <div className='flex gap-3'>
                            <a target='blank' href="https://www.facebook.com/LionsGeek"><FaFacebookF className='text-[1.4rem] fill-gray-400 hover:fill-blue-500 transition duration-200' /></a>
                            <a target='blank' href="https://www.instagram.com/lions_geek/">
                                <FaInstagram className='text-[1.4rem] fill-gray-400 hover:fill-pink-600 transition duration-200' />
                            </a>
                            <a target='blank' href="https://x.com/LionsGeek">
                                <BsTwitterX className='text-[1.4rem] fill-gray-400 hover:fill-black transition duration-200' />
                            </a>
                            <a target='blank' href="https://www.linkedin.com/company/lionsgeek/">
                                <FaLinkedinIn className='text-[1.4rem] fill-gray-400 hover:fill-[#0a66c2] transition duration-200' />
                            </a>
                            <a target='blank' href="https://www.youtube.com/channel/UCmd_wMUuFYbZ_jJgFxErDyA">
                                <FaYoutube className='text-[1.4rem] fill-gray-400 hover:fill-[#ff0000] transition duration-200' />
                            </a>
                            <a target='blank' href="https://www.tiktok.com/@lions_geek">
                                <FaTiktok className='text-[1.4rem] fill-gray-400 hover:fill-black transition duration-200' />
                            </a>
                        </div>
                        <p className='text-gray-400 text-[0.9rem]'>&copy; Copyright 2024 LionsGeek. All Rights Reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}