import "./firstSection.sass";
import eventHero from "../../../assets/images/event_hero.png";
import { useContext, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { MyContext } from "../../../utils/contextProvider";
import gsap from "gsap";

export const FirstSectionEvent = () => {
  const { t } = useTranslation();
  const { selectedLanguage , darkMode } = useContext(MyContext);
  const leftside = useRef(null);
  const rightside = useRef(null);
  useEffect(() => {
    gsap.fromTo(
      leftside.current,
      { x: "-100%", opacity: "0" },
      { x: "0%", duration: 0.5, delay: 0.5, opacity: "1", ease: "power2.out" }
    );
    gsap.fromTo(
      rightside.current,
      { x: "100%", opacity: "0" },
      { x: "0%", duration: 0.5, delay: 0.5, opacity: "1", ease: "power2.out" }
    );
  }, []);
  return (
    <>
      {/* herosection */}
      <div
        className={` flex lg:flex-row flex-col-reverse overflow-x-hidden ${darkMode ? "bg-[#0f0f0f]":"bg-white"} justify-between w-[100%]  lg:px-5 lg:pt-[3.5em] pt-[3rem] pb-[5em]   ${selectedLanguage === "ar" ? "  lg:flex-row-reverse" : "" }`}
      >
        <div ref={leftside} className={`flex justify-center items-center lg:w-[50%] w-[100%] `}>
          <div
            className={`lg:px-16 lg:py-0 py-1 px-3 flex flex-col gap-6 w-[100%] b${selectedLanguage === "ar"
                ? "    text-end w-[100%] flex  items-end  "
                : "md:"
              }`}
          >
            <h1
              className={`bg-banana font-bold lg:text-[60px] text-[45px] text-start lg:w-[100%] ${darkMode ? "text-white": "text-[#0f0f0f]"}  ${selectedLanguage === "ar" ? "    text-end " : "md:"
                }`}
            >
              {" "}
              {t("main.Events.title")}
            </h1>
            <p className={`text-lg  ${darkMode ? "text-white": "text-[#0f0f0f]"}`}>{t("main.Events.desc")}</p>
            <p
              className={`font-light flex gap-2 text-lg  ${darkMode ? "text-white": "text-[#0f0f0f]"}   ${selectedLanguage === "ar"
                  ? "    text-end w-full  flex flex-row-reverse"
                  : "md:"
                }`}
            >
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke={darkMode ? "white":"black"}
                className="size-6"
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
              </svg>{" "}
              Casablanca, Ain Sbaa{" "}
            </p>
            <button
              onClick={() =>
                document
                  .getElementById("cards")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-alpha w-fit px-5 py-2 rounded-lg hover:bg-transparent hover:scale-105 hover:text-alpha hover:border"
            >
              {t("main.Events.button")}
            </button>
          </div>
        </div>
        <div ref={rightside} className="lg:w-[35vw]">
          <img
            loading="lazy"
            className="h-full w-full rounded-lg "
            src={eventHero}
            alt="img"
          />
        </div>
      </div>
    </>
  );
};
