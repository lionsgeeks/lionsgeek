
import './firstSection.sass'
import { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { MyContext } from '../../../utils/contextProvider';
import { TransText } from '../../../components';
export const FirstSectionEventDetail = () => {
    const { events, setEvents, URL, IMAGEURL, selectedLanguage, setSelectedLanguage } = useContext(MyContext);

    const { id } = useParams()


    const [event, setEvent] = useState();

    useEffect(() => {
        if (events) {
            const findEvent = events?.filter((element) => element?.id == id)
            console.log(events);

            setEvent(findEvent)
        }
    }, [events])


    function EventDate(date, type) {

        const lang = {
            fr: 'FR',
            ar: 'AR',
            en: 'US'
        }

        let dateData = new Date(`${date}`)
        let monthName = new Intl.DateTimeFormat(`${selectedLanguage}-${lang[selectedLanguage]}`, { month: "long" }).format(dateData);
        let dayNum = new Intl.DateTimeFormat('en-US', { day: "2-digit" }).format(dateData);

        // console.log(dayNum, monthName);

        return type == "month" ? monthName : dayNum;
    }


    // function updateCountdown(type) {
    //     if (event) {
    //         const eventDate = new Date(`${event[0].date}`)

    //     const now = new Date(); // Current date and time
    //     const difference = eventDate - now; // Difference in milliseconds

    //     // Calculate time parts
    //     const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    //     const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    //     const minutes = Math.floor((difference / (1000 * 60)) % 60);
    //     const seconds = Math.floor((difference / 1000) % 60);

    //     // Update the countdown display
    //     // document.getElementById('countdown').textContent = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;

    //     return type == "day" ? `${days}` :
    //         type == "hour" ? `${hours}` :
    //         type == "min" ? `${minutes}` : 
    //         `${seconds}`
    //     }
    // }

    // ? Countdown

    const [timeLeft, setTimeLeft] = useState({})

    function calculateTimeLeft() {

        const eventDate = new Date(`${event[0].date}`)
        const now = new Date();
        const difference = eventDate - now;

        if (difference <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return {
            days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2,0),
            hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2,0) ,
            minutes: String(Math.floor((difference / (1000 * 60)) % 60)).padStart(2,0) ,
            seconds: String(Math.floor((difference / 1000) % 60)).padStart(2,0)
        };
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        // Clean up the interval on component unmount
        return () => clearInterval(interval);
    }, [event]);
    


    useGSAP(
        () => {
            let animation = gsap.timeline({ defaults: { ease: "pwer4inOut" } })
            animation.to('.first', { opacity: 1, y: 0, duration: 1.5, 'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' })
                .to('.last', { opacity: 1, y: 0, duration: 0.2, stagger: .3, 'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }, '-=1.4'
                )
        },
    );

    return (
        <>
            {
                event &&
                <div dir={selectedLanguage == "ar" ? "rtl" : "ltr"} className='h-fit lg:p-16 p-7 lg:pt-24 pt-40  '>
                    <div className='lg:h-[13vh] first w-full gap-5 rounded-l-lg flex '>
                        {/* date */}
                        <div className='lg:flex lg:flex-col min-w-[7%] '> <div className='bg-alpha rounded-t-lg p-1 flex items-center justify-center font-bold text-white text-lg '>{EventDate(event[0].date, "month")}</div>
                            <div className='bg-beta  h-[60%] rounded-b-lg flex items-center justify-center font-semibold text-white text-2xl'>{EventDate(event[0].date, "day")}</div> </div>
                        <div className='flex flex-col gap-3'>
                            <div className='lg:flex gap-2  lg:text-3xl text-xl  px-2'>
                                <div><h1><TransText {...event[0].name} /></h1></div>
                            </div>
                            <div className='flex gap-3 text-gray-400'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="lg:size-6 size-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                                <p><TransText {...event[0].location} /></p>
                            </div>
                        </div>
                    </div>
                    {/* <div className="p-2">
                                <h2 className="font-mono fs-1 fw-bolder p-4"  >{id}</h2>
                                <p className="font-mono fs-1 fw-bolder p-4"  >{Description}</p>
                                <h3 className="font-mono p-4 fw-bolder fs-1">{Date}</h3>
                            </div> */}
                    <div className='lg:flex lg:flex-row flex-col  gap-10 h-[100%] first '>
                        <div className="   lg:w-[70%] py-5 flex flex-col gap-5 ">
                            <img className="lg:h-[55vh] w-[100%] rounded-lg  object-cover" src={`${IMAGEURL}${event[0].cover}`} alt="" />

                            <div className='shadow-sm  px-4 border rounded-lg  flex flex-col  py-4 '>
                                <div className='border-b-2 border-black py-3'>

                                    <h1 className='font-semibold text-xl'>A propos de cet évenement</h1>
                                </div>
                                <div className='py-4'>
                                    <p><TransText {...event[0].description} /></p>
                                </div>
                            </div>

                        </div>
                        <div className='shadow-xl last border rounded-lg   h-fit flex flex-col lg:w-[30%]'>
                            <h2 className='p-4 border-b border-gray-500'><TransText ar='تفاصيل الحدث' fr="Détail de l'Événement" en='Event Details' /></h2>
                            {/* <div className='flex gap-2 p-4'>
                                <div className='w-[25%] bg-beta py-3 rounded-md text-center flex flex-col gap-2 text-sm font-semibold'> <p className='text-white text-sm lg:text-2xl'>00</p> <p className='text-white'>Jours</p></div>
                                <div className='w-[25%] bg-beta py-3 rounded-md text-center flex flex-col gap-2 text-sm font-semibold'> <p className='text-white text-sm lg:text-2xl'>24</p> <p className='text-white'>Heurs</p></div>
                                <div className='w-[25%] bg-beta py-3 rounded-md text-center flex flex-col gap-2 text-sm font-semibold'> <p className='text-white text-sm lg:text-2xl'>54</p> <p className='text-white'>Minutes</p></div>
                                <div className='w-[25%] bg-beta py-3 rounded-md text-center flex flex-col gap-2 text-sm font-semibold'> <p className='text-white text-sm lg:text-2xl'>33</p> <p className='text-white'>Seconds</p></div>
                            </div> */}
                            <div className='flex gap-2 p-4'>
                                <div className='w-[25%] bg-beta py-3 rounded-md text-center flex flex-col gap-2 text-sm font-semibold'> <p className='text-white text-sm lg:text-2xl'>{timeLeft.days}</p> <p className='text-white'>Jours</p></div>
                                <div className='w-[25%] bg-beta py-3 rounded-md text-center flex flex-col gap-2 text-sm font-semibold'> <p className='text-white text-sm lg:text-2xl'>{timeLeft.hours}</p> <p className='text-white'>Heurs</p></div>
                                <div className='w-[25%] bg-beta py-3 rounded-md text-center flex flex-col gap-2 text-sm font-semibold'> <p className='text-white text-sm lg:text-2xl'>{timeLeft.minutes}</p> <p className='text-white'>Minutes</p></div>
                                <div className='w-[25%] bg-beta py-3 rounded-md text-center flex flex-col gap-2 text-sm font-semibold'> <p className='text-white text-sm lg:text-2xl'>{timeLeft.seconds}</p> <p className='text-white'>Seconds</p></div>
                            </div>
                            {/* <h2 className='p-4 border-b-2 '>Sélection des tickets </h2> */}
                            {/* <div className='p-4 '>
                                <h1 className='border-b-2 py-4' >Tickets - Free</h1>
                            </div> */}
                            <div className='p-4'>
                                {/* <p className='text-sm text-gray-500'>0X tickets</p> */}
                                <h1 className='font-bold text-2xl py-3'>Total à payer: {event[0].price} <TransText fr='MAD' en='Dirham' ar='درهم' /></h1>
                            </div>
                            <div className='p-4 '>
                                <button className='bg-alpha w-[100%] py-2 rounded-lg hover:bg-transparent hover:scale-105 hover:text-alpha border'>Réservez maintenant!</button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}







































