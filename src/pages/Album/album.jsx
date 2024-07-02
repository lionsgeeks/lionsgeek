import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MyContext } from '../../utils/contextProvider';
export const AlbumPage = () => {
    const { id } = useParams();
    const { Albums } = useContext(MyContext);

    console.log(Albums[id - 1].images)
    return (
        <div className='w-full p-16  '>
            <h1 className='text-center text-5xl font-bold pb-6'>{Albums[id - 1].name}</h1>
            <div className=' w-full flex flex-wrap gap-4 justify-center py-16'>
                {Object.values(Albums[id - 1].images).map((image, index) => (
                    <div key={index} className='w-[22%] h-80 rounded-xl'>
                        <img src={image} className='w-full h-full object-cover rounded-xl' alt={`img`} />
                    </div>
                ))}
            </div>

        </div>
    );
};

