import React, { useContext, useEffect, useRef } from "react";
import developer from "../../../assets/images/Programmer-cuate.svg";
import Button from "../../../components/Button";
import { useTranslation } from "react-i18next";
import { TransText } from "../../../components";
import { MyContext } from "../../../utils/contextProvider";
import gsap from "gsap";
import { NavLink } from "react-router-dom";

export const FirstSection = () => {
  const { t } = useTranslation();
  const { selectedLanguage } = useContext(MyContext);
  const leftside = useRef(null);
  const rightside = useRef(null);

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
  return (
    <div
      className={`mt-16 flex flex-col-reverse items-center lg:flex-row justify-center overflow-x-hidden ${selectedLanguage === "ar" ? "lg:flex-row-reverse text-right" : ""
        }`}
    >
      <div ref={leftside} className="lg:w-[50%] py-16 lg:px-16 px-7 flex flex-col gap-4">
        <h1 className="font-bold text-6xl text-balance">
          <TransText
            fr="Développeur Web Full Stack."
            en="Full Stack Web Developer."
            ar="مطور ويب متكامل"
          />
        </h1>
        <p className="text-lg">
          <TransText
            fr="Devenez un pro du Full Stack et créez des applications web puissantes et responsives. Notre bootcamp met l'accent sur des projets concrets pour vous aider à maîtriser les dernières technologies et frameworks."
            en="Become a full stack pro and build powerful, responsive web apps. Our bootcamp focuses on hands-on projects to help you master the latest technologies and frameworks ."
            ar="أصبح محترفًا في تطوير الويب المتكامل وطور تطبيقات ويب قوية ومتجاوبة. يركز برنامجنا التدريبي على المشاريع العملية لمساعدتك على إتقان أحدث التقنيات والأطر. "
          />
        </p>
        <div
          className={`flex items-center gap-4 ${selectedLanguage === "ar" ? "flex-row-reverse" : ""
            }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
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
          className={`flex items-center gap-4 ${selectedLanguage === "ar" ? "flex-row-reverse" : ""
            }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
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
          className={`flex items-center gap-4 ${selectedLanguage === "ar" ? "flex-row-reverse" : ""
            }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
            />
          </svg>
          <p>
            <TransText
              fr="Engagement : 8 heures/semaine"
              en="Commitment: 8 hours/week"
              ar="الالتزام: 8 ساعات / أسبوع"
            />
          </p>
        </div>
        <div>
          <NavLink to={'/postuler'}>
            <Button>
              <TransText fr="Apply" en="Postuler" ar="تقدم بطلب" />
            </Button>
          </NavLink>
        </div>
      </div>
      <div ref={rightside} className="lg:w-[50%] w-[90%] flex justify-center">
        <img className="lg:w-[70%]" src={developer} alt="web developer" />
      </div>
    </div>
  );
};
