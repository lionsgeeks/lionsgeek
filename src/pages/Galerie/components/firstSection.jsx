import React, { useContext, useRef, useState } from 'react';
import './firstSection.css'
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";
import { Link } from 'react-router-dom';
import { MyContext } from '../../../utils/contextProvider';

export const FirstSectionGalerie = () => {

    const { Albums } = useContext(MyContext);
    const slider = useRef(null);

    const activate = (e) => {
        const items = slider.current.querySelectorAll('.item');
        if (e.target.closest('.next')) {
            slider.current.append(items[0]);
        } else if (e.target.closest('.prev')) {
            slider.current.prepend(items[items.length - 1]);
        }
    };

    return (
        <div className='h-screen w-full overflow-hidden grid place-items-center'>
            <main>
                <ul className='slider' ref={slider}>
                    {Albums?.map((Albums, index) => (
                        <li className='item' style={{ backgroundImage: `url('${Albums.thumbnail}')` }}>
                            <div className='content'>
                                <h2 className='title text-white'>" {Albums.name}"</h2>
                                <p className='text-white py-4'>
                                    {Albums.Description}</p>
                                <Link  to={`/album/${Albums.id}`}><button>Read More</button></Link>
                            </div>
                        </li>
                    ))}
                </ul>
                <nav className='nav flex gap-3' onClick={activate}  >
                    <GrFormPreviousLink className='w-10 h-10 bg-white/70 rounded-full border border-beta prev p-2 cursor-pointer hover:bg-beta hover:stroke-white duration-300' name="arrow-back-outline" />
                    <GrFormNextLink className='w-10 h-10 bg-white/70 rounded-full border border-beta next p-2 cursor-pointer hover:bg-beta hover:stroke-white duration-300' name="arrow-forward-outline" />
                </nav>
            </main>

        </div>

    );
};
