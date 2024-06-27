import React from 'react';
import herocowork from '../../../assets/images/cowork.png'
import { Button } from '../../../components';
export const FirstSectionCoworking = () => {
    return (
    <>
        <div className='p-16  '>
            <div className='w-full flex gap-2 '>
                <div className='w-1/2 px-7 flex flex-col gap-5'>
                    <h1 className='text-6xl font-bold'>A <span className='text-alpha'>Free Coworking</span>  Space For Your Life Goals</h1>
                    <p className='w-2/3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum itaque ipsa a animi, omnis provident dignissimos vel, odio aliquid alias,Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos labore asperiores illo cupiditate assumenda adipisci. qui repellendus accusantium perferendis quia!</p>
                    <Button >Join Us</Button>
                </div>
                <div className='w-1/2 flex justify-center'>
                    <div className=' h-[50vh]'>
                        <img className='h-full w-full rounded-lg ' src={herocowork} alt="img" />
                    </div>
                </div>
            </div>
        </div> 
    </>
    )
}
