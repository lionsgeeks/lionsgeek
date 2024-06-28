import React from 'react';
import coworkvideo from '../../../assets/videos/videoplayback.mp4'
export const ThirdSectionCoworking = () => {
    return (
        <div className='p-5 lg:px-16 py-10 flex flex-col gap-5 text-center'>
            <h1 className='text-lg lg:text-xl '>Workspace</h1>
            <h1 className='text-2xl lg:text-5xl font-bold'>Explore Our Space</h1>
            <div className='w-full  flex justify-center '>
                <div className='w-full p-1 lg:p-3 border-2 border-alpha rounded-xl '>
                    <video className='rounded-xl' src={coworkvideo} type="video/mp4" autoPlay muted loop ></video>
                </div>
            </div>
        </div>
    );
};

