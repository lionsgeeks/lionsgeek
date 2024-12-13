import React, { useContext, useEffect, useRef, useState } from "react";
import contentCreature from "../../../assets/images/recording_a_movie.svg";
import Button from "../../../components/Button";
import { TransText } from "../../../components";
import { MyContext } from "../../../utils/contextProvider";
import gsap from "gsap";
import { NavLink } from "react-router-dom";

export const FirstSection = () => {
  const leftside = useRef(null);
  const [checkFormation, setCheckFormation] = useState(false);

  const rightside = useRef(null);
  const { selectedLanguage, sessions } = useContext(MyContext);
  useEffect(() => {
    gsap.fromTo(
      leftside.current,
      { x: "-100%", opacity: "0" },
      {
        x: "0%",
        duration: 1,
        delay: 0.1,
        opacity: "1",
        ease: "power2.out",
        scrollTrigger: {
          trigger: leftside.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.fromTo(
      rightside.current,
      { x: "100%", opacity: "0" },
      {
        x: "0%",
        duration: 1,
        delay: 0.1,
        opacity: "1",
        ease: "power2.out",
        scrollTrigger: {
          trigger: rightside.current,
          // start: "top 80%",
          // end: "bottom 20%",
          // toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  useEffect(() => {
    sessions?.forEach((element) => {
      if (element.formation === "Media") {
        setCheckFormation(true);
      }
    });
  }, [sessions]);

  return (
    <div
      className={`overflow-x-hidden mt-16 flex flex-col-reverse items-center lg:flex-row justify-center ${
        selectedLanguage === "ar" ? "lg:flex-row-reverse text-right" : ""
      }`}
    >
      <div
        ref={leftside}
        className=" lg:w-[50%] py-16 px-7 lg:px-16 flex flex-col gap-4"
      >
        <h1 className="font-bold text-6xl lg:text-balance">
          <TransText
            en="Digital Content Creator"
            fr="Créateur de contenu digital"
            ar="منشئ المحتوى الرقمي"
          />
        </h1>
        <p className="text-lg">
          <TransText
            en="Master the art of video production in just 6 months. Learn everything
          from camera use and lighting to editing, special effects, and digital
          marketing. Gain practical skills in live streaming, social media
          management, and website creation with guidance from professional
          coaches."
            fr="Maîtrisez l'art de la production vidéo en seulement 6 mois. Apprenez tout, de l'utilisation de la caméra et de l'éclairage au montage, aux effets spéciaux et au marketing digital. Acquérez des compétences pratiques en streaming en direct, en gestion des réseaux sociaux et en création de sites web avec l'aide de coachs professionnels."
            ar="أتقن فن إنتاج الفيديو في غضون 6 أشهر فقط. تعلم كل شيء من استخدام الكاميرا والإضاءة إلى التحرير، والمؤثرات الخاصة، والتسويق الرقمي. احصل على مهارات عملية في البث المباشر، وإدارة وسائل التواصل الاجتماعي، وإنشاء المواقع الإلكترونية بإرشاد من مدربين محترفين."
          />
        </p>
        <div
          className={`flex items-center gap-4 ${
            selectedLanguage === "ar" ? "flex-row-reverse" : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <p>
            <TransText
              fr="Durée : 6 mois"
              en="Duration: 6 months"
              ar="المدة: 6 أشهر"
            />
          </p>
        </div>
        <div
          className={`flex items-center gap-4 ${
            selectedLanguage === "ar" ? "flex-row-reverse" : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
            />
          </svg>
          <p>
            <TransText
              fr="Frais : Gratuit"
              en="Fee: Free"
              ar="الرسوم: مجانية"
            />
          </p>
        </div>
        <div
          className={`flex items-center gap-4 ${
            selectedLanguage === "ar" ? "flex-row-reverse" : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
            />
          </svg>
          <p>
            <TransText
              fr="Engagement : 5 jours/semaine"
              en="Commitment: 5 days/week"
              ar="الالتزام: 5 أيام / أسبوع"
            />
          </p>
        </div>
        <div>
          {checkFormation && (
            <NavLink to={"/postuler"}>
              <Button>
                <TransText fr="Apply" en="Postuler" ar="تقدم بطلب" />
              </Button>
            </NavLink>
          )}
        </div>
      </div>
      <div ref={rightside} className="lg:w-[50%] w-[90%] flex justify-center">
        <img
          loading="lazy"
          className="lg:w-[100%]"
          src={contentCreature}
          alt="web developer"
        />
      </div>
    </div>
  );
};
