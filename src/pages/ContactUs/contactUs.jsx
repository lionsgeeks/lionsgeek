import { IoLocationOutline } from "react-icons/io5";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import Button from "../../components/Button";


export const ContactUs = () => {
    return (
        <>
            <div className="py-[12vh] flex flex-col justify-center items-center ">
                <div className="flex justify-between gap-4 w-[80%] ">
                    <div className="w-[50%] flex flex-col gap-6">
                        <div>
                            <h1 className='font-bold text-[2.1rem]'>Ready to start? </h1>
                            <h1 className='font-bold text-[2.1rem]'>We've got you covered</h1>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <p>Have a question?</p>
                            <p>An idea you're bursting to share? We're all ears! Drop us a line and let's get this conversation started.</p>
                        </div>
                        <div className='flex flex-col gap-1 text-gray-500 font-thin text-[0.9rem]'>
                            <div className='flex items-center gap-2'>
                                <IoLocationOutline />
                                <p>4ème étage, Route de Rabat Ain Sbaa Casablanca</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <IoPhonePortraitOutline />
                                <p>+212 522 662 660</p>
                            </div>
                            <div className='flex items-center gap-2'>
                                <MdOutlineMailOutline />
                                <p>contact@lionsgeek.ma</p>
                            </div>
                        </div>
                    </div>
                    <form action="" className="w-[40%] py-6 px-7  border border-white/55 rounded-lg flex  items-start flex-col gap-6 bg-200/75 shadow-lg">
                        <div class="relative h-11 w-full min-w-[200px]">
                            <input
                                class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-alpha focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                placeholder=" "
                            />
                            <label class="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-alpha after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-alpha peer-focus:after:scale-x-100 peer-focus:after:border-alpha peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 text-gray-400">
                                First Name
                            </label>
                        </div>
                        <div class="relative h-11 w-full min-w-[200px]">
                            <input
                                class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-alpha focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                placeholder=" "
                            />
                            <label class="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-alpha after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-alpha peer-focus:after:scale-x-100 peer-focus:after:border-alpha peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 text-gray-400">
                                Last Name
                            </label>
                        </div>
                        <div class="relative h-11 w-full min-w-[200px]">
                            <input
                                class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-alpha focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                placeholder=" "
                            />
                            <label class="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-alpha after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-alpha peer-focus:after:scale-x-100 peer-focus:after:border-alpha peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 text-gray-400">
                                Phone Number
                            </label>
                        </div>
                        <div class="relative h-11 w-full min-w-[200px]">
                            <input
                                class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-alpha focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                placeholder=" "
                            />
                            <label class="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-alpha after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-alpha peer-focus:after:scale-x-100 peer-focus:after:border-alpha peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 text-gray-400">
                                Email
                            </label>
                        </div>
                        <div class="relative h-11 w-full min-w-[200px]">
                            {/* <input
                                class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-alpha focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                placeholder=" "
                            /> */}
                            <textarea name="" id="" class="resize-none  peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-alpha focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                placeholder=" "></textarea>
                            <label class="after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-alpha after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-alpha peer-focus:after:scale-x-100 peer-focus:after:border-alpha peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 text-gray-400">
                                Message
                            </label>
                        </div>
                        <button className="bg-alpha mt-2 text-gray-800 font-light text-[0.9rem] px-4 py-2 rounded-lg shadow-md">Send Message</button>
                        {/* <Button className={'text-[0.9rem] px-4 py-2 shadow-md font-light mt-2'}>Send Message</Button> */}
                    </form>
                </div>
            </div>
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.0584384950844!2d-7.5364266246542515!3d33.60378817332915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cdb2f812837f%3A0xbbcfc74fbc11b2d9!2sLionsGeek!5e0!3m2!1sen!2sma!4v1719408103931!5m2!1sen!2sma" className='w-full h-[45vh] filter grayscale focus:border-none focus:outline-none' allowfullscreen="" loading="lazy" ></iframe>
            </div>
        </>
    )
}