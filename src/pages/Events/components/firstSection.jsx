import { Link, useNavigate } from 'react-router-dom'

import './firstSection.sass'
import bg from '../../../assets/images/5641003.jpg'
// import svg from '../../../assets/images/wave.svg'
export const FirstSectionEvent = () => {

    return (
        <>
            {/* herosection */}
            <div className='flex   '>
                <div className=' h-[80vh]    flex justify-center items-center w-[50%]'>
                    <div className='px-16 flex flex-col gap-6' >
                        <h1 className='selection:bg-banana font-bold text-7xl  text-start w-[100%]  '>  Inovation & Inspiration </h1>
                        <p className='text-lg' >Join our tech innovation events and ignite your creativity. Be inspired by visionary ideas and transform your perspective. Discover new possibilities and expand your horizons.</p>
                        <p className='font-light flex gap-2'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg> Casablanca, Ain Sbaa  </p>
                        <button className='bg-alpha w-fit px-5 py-2 rounded-lg hover:bg-transparent hover:scale-105 hover:text-alpha border'>

                            Get your ticket</button>
                    </div>

                </div>
                <div className='w-[50%]  relative '>
                    {/*hadi*/}
                    {/* <iframe src='https://my.spline.design/untitled-6ceec766dfda8a887b5cd6ce48a4b754/' frameborder='0' width='100%' height='95%'></iframe> */}
                    <div className='absolute bg-white text-white right-1 bottom-10 w-[20%] py-3'>.</div>
                </div>
            </div>
        </>
    )
}