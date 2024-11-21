import React, { useContext, useEffect, useRef, useState, useTransition } from 'react';
import './firstSection.css'
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";
import { Link } from 'react-router-dom';
import { MyContext } from '../../../utils/contextProvider';
import { useTranslation } from 'react-i18next';
import TransText from '../../../components/TransText.tsx';
import SubstringText from '../../../components/SubstringText.jsx';

export const FirstSectionGalerie = () => {


    // ? Slider


    const slider = useRef(null);
    const activate = (e) => {
        const items = slider.current.querySelectorAll('.item');
        if (e.target.closest('.next')) {
            slider.current.append(items[0]);
        } else if (e.target.closest('.prev')) {
            slider.current.prepend(items[items.length - 1]);
        }
    };

    const { galleries, setGalleries ,URL, IMAGEURL , selectedLanguage } = useContext(MyContext);



    return (
        <div className='md:h-screen h-[80vh] w-full overflow-hidden grid place-items-center pt-14'>
            <main>
                <ul className='slider' ref={slider}>
                    {galleries?.map((gallery, index) => (
                        <li className='item z10 ' key={index} style={{ backgroundImage:  `url('${IMAGEURL}${gallery.couverture}')` }}  >
                            <div className='content '>
                                <h2 className=' text-white truncate text-[25px] font-bold '>
                                    <TransText fr={`${gallery.title.fr}`} ar={`${gallery.title.ar}`} en={`${gallery.title.en}`} />
                                </h2>
                                <p className='font-semibold text-white py-4 lg:text-[17px]'>
                                    <SubstringText text={gallery.description[selectedLanguage]} length={150} />
                                    {/* <TransText fr={gallery.description.fr} ar={gallery.description.ar} en={gallery.description.en} /> {} */}
                                </p>
                                <Link to={`/album/${gallery.id}`}><button>Read More</button></Link>
                            </div>
                        </li>
                    )) }
                </ul>
                <nav className='nav flex gap-3' onClick={activate}  >
                    <GrFormPreviousLink className='w-10 h-10 bg-white/70 rounded-full border border-beta prev p-2 cursor-pointer hover:bg-beta hover:stroke-white duration-300' name="arrow-back-outline" />
                    <GrFormNextLink className='w-10 h-10 bg-white/70 rounded-full border border-beta next p-2 cursor-pointer hover:bg-beta hover:stroke-white duration-300' name="arrow-forward-outline" />
                </nav>
            </main>

        </div>

    );
};
