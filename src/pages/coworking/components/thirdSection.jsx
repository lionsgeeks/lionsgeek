import React from 'react';
import coworkvideo from '../../../assets/videos/videoplayback.mp4'
export const ThirdSectionCoworking = () => {
    return (
        <div className='px-16 py-10 flex flex-col gap-5 text-center'>
            <h1 className='text-xl '>Workspace</h1>
            <h1 className='text-5xl font-bold'>Explore Our Space</h1>
            <div className='w-full flex justify-center '>
                <div className='w-5/6 p-3 border-2 border-alpha rounded-xl '>
                    {/* <iframe className='w-full rounded-xl' height="415" src="https://www.youtube.com/embed/giQBy1EUwbI?si=vSywsUe4UByak8Y5&amp;controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
                    <video className='rounded-xl' src={coworkvideo} type="video/mp4" autoPlay muted loop ></video>
                </div>
            </div>
        </div>
    );
};

