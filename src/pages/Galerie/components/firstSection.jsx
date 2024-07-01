import React, { useRef } from 'react';
import './firstSection.css'
import { GrFormPreviousLink, GrFormNextLink } from "react-icons/gr";

export const FirstSectionGalerie = () => {

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
                    <li className='item' style={{ backgroundImage: `url('https://cdn.mos.cms.futurecdn.net/dP3N4qnEZ4tCTCLq59iysd.jpg')` }}>
                        <div className='content'>
                            <h2 className='title'>"Lossless Youths"</h2>
                            <p className='description'> Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Tempore fuga voluptatum, iure corporis inventore
                                praesentium nisi. Id laboriosam ipsam enim.  </p>
                            <button>Read More</button>
                        </div>
                    </li>
                    <li className='item' style={{ backgroundImage: `url('https://i.redd.it/tc0aqpv92pn21.jpg')` }}>
                        <div className='content'>
                            <h2 className='title'>"Estrange Bond"</h2>
                            <p className='description'> Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Tempore fuga voluptatum, iure corporis inventore
                                praesentium nisi. Id laboriosam ipsam enim.  </p>
                            <button>Read More</button>
                        </div>
                    </li>
                    <li className='item' style={{ backgroundImage: `url('https://wharferj.files.wordpress.com/2015/11/bio_north.jpg')` }}>
                        <div className='content'>
                            <h2 className='title'>"The Gate Keeper"</h2>
                            <p className='description'> Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Tempore fuga voluptatum, iure corporis inventore
                                praesentium nisi. Id laboriosam ipsam enim.  </p>
                            <button>Read More</button>
                        </div>
                    </li>
                    <li className='item' style={{ backgroundImage: `url('https://images7.alphacoders.com/878/878663.jpg')` }}>
                        <div className='content'>
                            <h2 className='title'>"Last Trace Of Us"</h2>
                            <p className='description'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.
                            </p>
                            <button>Read More</button>
                        </div>
                    </li>
                    <li className='item' style={{ backgroundImage: `url('https://theawesomer.com/photos/2017/07/simon_stalenhag_the_electric_state_6.jpg')` }}>
                        <div className='content'>
                            <h2 className='title'>"Urban Decay"</h2>
                            <p className='description'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore fuga voluptatum, iure corporis inventore praesentium nisi. Id laboriosam ipsam enim.
                            </p>
                            <button>Read More</button>
                        </div>
                    </li>
                    
                </ul>
                <nav className='nav flex gap-3' onClick={activate}  >
                    <GrFormPreviousLink className='w-10 h-10 bg-white/70 rounded-full border border-beta prev text-beta p-2' name="arrow-back-outline" />
                    <GrFormNextLink className='w-10 h-10 bg-white/70 rounded-full border border-beta next text-beta p-2' name="arrow-forward-outline" />
                </nav>
            </main>

            <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
            <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>

        </div>

    );
};
