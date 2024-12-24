import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { MyContext } from "../../../utils/contextProvider";
import { TransText } from "../../../components";
import "./firstSection.scss";
import { BookingModal } from "./bookingmodal";
const calculateTimeLeft = (targetDate) => {
  const difference = new Date(targetDate).getTime() - new Date().getTime();

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60)
  };
};

const hasEventPassed = (eventDate) => {
  if (!eventDate) return true;
  const now = new Date().getTime();
  const eventTime = new Date(eventDate).getTime();
  return now > eventTime;
};

const TimeBlock = ({ value, label }) => {
  const formattedValue = value.toString().padStart(2, '0');

  return (
    <div className="w-[25%] bg-beta py-3 rounded-md text-center flex flex-col gap-2 text-sm font-semibold">
      <p className="text-white text-sm lg:text-2xl">{formattedValue}</p>
      <p className="text-white">{label}</p>
    </div>
  );
};
let switcher = false
const switching = (lightSwitch) => {  
  return switcher = lightSwitch
}
const BookingSection = ({ event }) => {
  const { darkMode } = useContext(MyContext);

  if (!hasEventPassed(event?.date)) {

    return (

      <>

        <div className="p-4">
          <h1 className={`font-bold text-2xl py-3 ${darkMode ? "text-white":"text-black"}`}>
            <TransText
              fr="Total à payer"
              en="Total to pay"
              ar="المبلغ الإجمالي للدفع"
            />
            : {event.price}{" "}
            <TransText en="MAD" fr="Dirham" ar="درهم" />
          </h1>
        </div>
        <div className="p-4">
          <button
            className="bg-alpha text-black rounded-md px-4 py-2 transition w-full"
            onClick={() => switching(true)}
          >
            <TransText
              fr="Réserver maintenant"
              en="Book now"
              ar="احجز الآن"
            />
          </button>

        </div>
      </>
    );
  }

  return (
    <>
      <div className="p-4">
        <button
          className="border border-gray-300 bg-gray-100 text-red-500 w-full py-3 rounded-lg cursor-not-allowed font-medium shadow-sm"
          disabled
        >
          <TransText
            fr="L'événement est terminé."
            en="The event has ended."
            ar="لقد انتهى الحدث."
          />
        </button>
      </div>
    </>
  );
};

export const FirstSectionEventDetail = () => {
  const { events, IMAGEURL,darkMode } = useContext(MyContext);
  const { id } = useParams();
  const [event, setEvent] = useState();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    if (events) {
      const findEvent = events?.filter((element) => element?.id == id);
      setEvent(findEvent);
    }
  }, [events]);

  useEffect(() => {
    if (event && event[0]?.date) {
      const timer = setInterval(() => {
        const updatedTimeLeft = calculateTimeLeft(event[0].date);
        setTimeLeft(updatedTimeLeft);

        if (Object.values(updatedTimeLeft).every(value => value === 0)) {
          clearInterval(timer);
        }
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [event]);

  useGSAP(() => {
    let animation = gsap.timeline({ defaults: { ease: "pwer4inOut" } });
    animation
      .to(".first", {
        opacity: 1,
        y: 0,
        duration: 1.5,
        "clip-path": "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      })
      .to(
        ".last",
        {
          opacity: 1,
          y: 0,
          duration: 0.2,
          stagger: 0.3,
          "clip-path": "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
        },
        "-=1.4"
      );
  }, [event]);



  <div id="modelConfirm" className="fixed hidden z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4 ">
    <div className="relative top-40 mx-auto shadow-xl rounded-md bg-white max-w-md">
      <div className="flex justify-end p-2">
        <button onclick="closeModal('modelConfirm')" type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      <div className="p-6 pt-0 text-center">
        <svg className="w-20 h-20 text-red-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="text-xl font-normal text-gray-500 mt-5 mb-6">Are you sure you want to delete this user?</h3>
        <a href="#" onclick="closeModal('modelConfirm')" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base inline-flex items-center px-3 py-2.5 text-center mr-2">
          Yes, I'm sure
        </a>
        <a href="#" onclick="closeModal('modelConfirm')" className="text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-cyan-200 border border-gray-200 font-medium inline-flex items-center rounded-lg text-base px-3 py-2.5 text-center" data-modal-toggle="delete-user-modal">
          No, cancel
        </a>
      </div>
    </div>
  </div>

  return (
    <>
      {event ? (
        <div id="eventDet" className={`h-fit lg:p-16 p-7 lg:pt-24 md:pt-40 pt-28 ${darkMode ? "bg-[#0f0f0f]":"bg-white"}`}>
          {/* Event Header */}
          <div className={`first w-full gap-5 rounded-l-lg  flex `}>

            <div className="lg:flex lg:flex-col">
              <div className="bg-alpha rounded-t-lg px-2 h-[40%] flex items-center justify-center font-bold text-white text-lg">
                <TransText
                  en={new Date(event[0]?.date).toLocaleDateString('en-US', { month: 'short' })}
                  fr={new Date(event[0]?.date).toLocaleDateString('fr-FR', { month: 'short' })}
                  ar={new Date(event[0]?.date).toLocaleDateString('ar-EG', { month: 'short' })}
                />{" "}
              </div>
              <div className="bg-beta h-[60%] rounded-b-lg px-2 flex items-center justify-center font-semibold text-white text-2xl">
                {new Date(new Date(event[0]?.date).setDate(new Date(event[0]?.date).getDate())).getDate()}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="lg:flex gap-2 lg:text-3xl text-xl px-2 ">
                <div>
                  <h1 className={`${darkMode ? "text-white": "text-[#0f0f0f]"}`} >
                    <TransText {...event[0]?.name} />
                  </h1>
                </div>
              </div>
              <div className="flex gap-3 text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke={darkMode ? "white": "#0f0f0f"}
                  className="lg:size-6 size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
                <p className={`${darkMode ? "text-white": "text-[#0f0f0f]"}`}>
                  <TransText {...event[0]?.location} />
                </p>
              </div>
            </div>
          </div>

          <div className="lg:flex lg:flex-row flex-col gap-10 h-[100%] first">
            <div className="lg:w-[70%] py-5 flex flex-col gap-5">
              <img
                loading="lazy"
                className="lg:h-[25rem] md:h-[25rem]  w-[100%] rounded-lg object-cover"
                src={`${IMAGEURL}${event[0]?.cover}`}
                alt=""
              />
              <div className="shadow-sm px-4 border rounded-lg flex flex-col py-4">
                <div className={`${darkMode ? "border-b-2 border-white" : "border-b-2 border-black  py-3"}`}>
                  <h1 className={`${darkMode ? "text-white": "text-[#0f0f0f]"}`}>
                    <TransText
                      ar="حول هذا الحدث"
                      fr="A propos de cet évenement"
                      en="About this event"
                    />
                  </h1>
                </div>
                <div className={`py-4 `}>
                  <p className={`${darkMode ? "text-white": "text-[#0f0f0f]"}`}>
                    <TransText {...event[0]?.description} />
                  </p>
                </div>
              </div>
            </div>

            <div className="shadow-xl last border rounded-lg h-fit flex flex-col md:mt-10 lg:w-[30%]">
              <h2 className={`p-4 border-b border-gray-500 ${darkMode ? "text-white": "text-[#0f0f0f]"}`}>
                <TransText
                  ar="تفاصيل الحدث"
                  fr="Détail de l'Événement"
                  en="Event Details"
                />
              </h2>
              <div className="flex gap-2 p-4">
                <TimeBlock
                  value={timeLeft.days}
                  label={
                    <TransText ar="أيام" fr="Jours" en="Days" />
                  }
                />
                <TimeBlock
                  value={timeLeft.hours}
                  label={
                    <TransText ar="ساعات" fr="Heures" en="Hours" />
                  }
                />
                <TimeBlock
                  value={timeLeft.minutes}
                  label={
                    <TransText ar="دقائق" fr="Minutes" en="Minutes" />
                  }
                />
                <TimeBlock
                  value={timeLeft.seconds}
                  label={
                    <TransText ar="ثواني" fr="Secondes" en="Seconds" />
                  }
                />
              </div>

              <BookingSection event={event[0]} />
            </div>
          </div>
          <BookingModal
          isOpen={switcher}
          onClose={() => switching(false)}
          event={event}
        />
        </div>
      ) :
        <>
          <div  className="w-full lg:pt-28 md:pt-40 pt-28 md:px-14 px-3   ">
            <div className="h-[30rem] p-8 w-full rounded-lg flex flex-col gap-10 ">
              <div className="flex gap-4">
                  <div className="skeleton lg:w-[12%] md:w-[25%] w-[40%] h-[8rem] bg-skeleton2 rounded-md "></div>
                  <div className="lg:w-[18%] md:w-[] w-[60%] flex flex-col gap-3 mt-2">
                    <div className="skeleton w-full h-[2rem] bg-skeleton2 rounded-md "></div>
                    <div className="skeleton w-full h-[2rem] bg-skeleton2 rounded-md "></div>
                  </div>
              </div>
              <div className="skeleton w-[100%] h-[15rem] bg-skeleton2 rounded-md "></div>
            </div>
          </div>
        </>
      }
    </>
  );
};