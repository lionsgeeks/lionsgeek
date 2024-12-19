import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MyContext } from '../../utils/contextProvider';
import { useEffect } from 'react';
import { TransText } from '../../components';
export const AlbumPage = () => {

    const { id } = useParams();

    const { galleries, selectedLanguage, setSelectedLanguage ,URL, IMAGEURL , darkMode} = useContext(MyContext);

    const [gallery, setGallery] = useState();

    useEffect(() => {
        setGallery(galleries?.find(item => item.id == id))
    }, [galleries])

    return (
        <div className='w-full p-10 lg:px-1 py-26 pt-32 ' style={{ backgroundColor: darkMode ? "#0f0f0f" : "#ffffff" }}>
            <h1 className='text-center text-5xl font-bold pb-6' style={{ color: darkMode ? "#ffffff" : "#0f0f0f" }}
            >
                <TransText {...gallery?.title} />
            </h1>
            <div className='w-full flex flex-wrap gap-4 justify-center py-10' >
                {
                    gallery?.images.map((image, index) => (
                        <div key={index} className='w-full md:w-[30%] lg:w-[22%] h-60 lg:h-80  rounded-xl'>
                            <img loading="lazy" src={`${IMAGEURL}${image.path}`} className='w-full h-full object-cover rounded-xl' alt={`img`} />
                        </div>
                    ))
                }
            </div>
        </div>
    );
};