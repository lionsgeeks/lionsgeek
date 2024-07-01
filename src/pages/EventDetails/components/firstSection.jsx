
import './firstSection.sass'
import myImage from '../../../assets/images/pexels-thisismitchhere-20943034.jpg';
import myImage1 from '../../../assets/images/pexels-alex-andrews-271121-1983046.jpg';
import myImage2 from '../../../assets/images/pexels-bertellifotografia-2608512.jpg';
import myImage3 from '../../../assets/images/pexels-teddy-2263410.jpg';
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
export const FirstSectionEventDetail = () => {

    const { id } = useParams()
    const [Event, setEvent] = useState([
        {
            Name: "Digital content creator",
            Date: '20/07/23',
            Type: 'Hackathon',
            Description: 'lallalalalalalalalala',
            Location: ' Lionsgeek , Ain Sbaa',
            image: myImage
        }, {
            Name: "web development",
            Date: '20/07/23',
            Type: 'Séance dinfos',
            Description: 'Tous sur nos formation',
            Location: ' Lionsgeek , Ain Sbaa',

            image: myImage1
        }, {
            Name: "Design",
            Date: '20/07/23',
            Type: 'Séance dinfos',
            Description: 'Tous sur nos formation content creation',
            Location: ' Lionsgeek , Ain Sbaa',

            image: myImage2
        }, {
            Name: " Graphique Design",
            Date: '20/07/23',
            Type: 'Hackathon',
            Description: 'lallalalalalalalalala',
            Location: ' Lionsgeek , Ain Sbaa',

            image: myImage3
        },

    ])
    useGSAP(
        () => {
            let animation = gsap.timeline({ defaults: { ease: "pwer4inOut" } })
            animation.to('.first', { opacity: 1, y: 0, duration: 1.5, 'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' })
                .to('.last', { opacity: 1, y: 0, duration: 0.2, stagger: .3, 'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }, '-=1.4'
                )
        },
    );
    const check = Event.filter((Event) => Event.Name == id)
    console.log(check);
    
    return (
        <>
            {
                check.map((element, index) =>
                    <>
                        <div className=' h-fit p-16  '>
                            <div className='h-[13vh] first w-full gap-5 rounded-l-lg flex '>
                                {/* date */}
                                <div className='w-[7%]  '> <div className='bg-alpha rounded-t-lg h-[40%] flex items-center justify-center font-bold text-white text-lg '>JUIN</div>
                                    <div className='bg-beta h-[60%] rounded-b-lg flex items-center justify-center font-semibold text-white text-2xl'>07</div> </div>
                                <div className='flex flex-col gap-3'>
                                    <div className='flex gap-2 text-3xl  px-2'>
                                        <div><h1>{element.Type} -</h1></div>
                                        <div><h1>{element.Name}</h1></div>
                                    </div>
                                    <div className='flex gap-3 text-gray-400'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                        </svg>
                                        <p> 4eme étage, Ain Sebaa Center, Route de Rabat-، Km 8, Casablanca 20050 </p>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="p-2">
                                <h2 className="font-mono fs-1 fw-bolder p-4"  >{id}</h2>
                                <p className="font-mono fs-1 fw-bolder p-4"  >{element.Description}</p>
                                <h3 className="font-mono p-4 fw-bolder fs-1">{element.Date}</h3>
                            </div> */}
                            <div className='flex  gap-10 h-[100%] first '>
                                <div className="   w-[70%] py-5 flex flex-col gap-5 ">
                                    <img className="h-[55vh] w-[100%] rounded-lg " src={element.image} alt="" />
                                    
                                    <div className='shadow-xl  px-4 border rounded-lg  flex flex-col  py-4 '>
                                        <div className='border-b-2 border-black py-3'>

                                        <h1 className='font-semibold text-xl'>A propos de cet évenement</h1> 
                                        </div>
                                        <div className='py-4'>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo incidunt minus consequuntur natus voluptates fugiat, quam reprehenderit molestiae nobis mollitia.</p>
                                        </div>
                                    </div>

                                </div>
                                <div className='shadow-xl last border rounded-lg   h-fit flex flex-col w-[30%]'>
                                    <h2 className='p-4 border-b border-gray-500'>Detail de l'Evénement </h2>
                                    <div className='flex gap-2 p-4'>
                                        <div className='w-[25%] bg-beta py-3 rounded-md text-center flex flex-col gap-2 text-sm font-semibold'> <p className='text-white text-2xl'>00</p> <p className='text-white'>Jours</p></div>
                                        <div className='w-[25%] bg-beta py-3 rounded-md text-center flex flex-col gap-2 text-sm font-semibold'> <p className='text-white text-2xl'>24</p> <p className='text-white'>Heurs</p></div>
                                        <div className='w-[25%] bg-beta py-3 rounded-md text-center flex flex-col gap-2 text-sm font-semibold'> <p className='text-white text-2xl'>54</p> <p className='text-white'>Minutes</p></div>
                                        <div className='w-[25%] bg-beta py-3 rounded-md text-center flex flex-col gap-2 text-sm font-semibold'> <p className='text-white text-2xl'>33</p> <p className='text-white'>Seconds</p></div>
                                    </div>
                                    <h2 className='p-4 border-b-2 '>Sélection des tickets </h2>
                                    <div className='p-4 '> <h1 className='border-b-2 py-4' >Tickets - Free</h1></div>
                                    <div className='p-4'>
                                        <p className='text-sm text-gray-500'>0X tickets</p>
                                        <h1 className='font-bold text-2xl py-3'>Total à payer: 0 MAD</h1>
                                    </div>
                                    <div className='p-4 '>
                                        <button className='bg-alpha w-[100%] py-2 rounded-lg hover:bg-transparent hover:scale-105 hover:text-alpha border'>Réservez maintenant!</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
        </>
    )
}







































