import "./firstSection.sass";
import eventHero from "../../../assets/images/event_hero.png";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import { MyContext } from "../../../utils/contextProvider";
export const FirstSectionEvent = () => {
  const { t } = useTranslation();
  const { selectedLanguage} = useContext(MyContext);
  return (
    <>
      {/* herosection */}
      <div
        className={`flex lg:flex-row flex-col-reverse justify-between w-[100%]  lg:px-5 lg:pt-[3.5em] pt-[3rem] pb-[5em]   ${
          selectedLanguage === "ar" ? "   flex-row-reverse" : "md:"
        }`}
      >
        <div className="flex justify-center items-center lg:w-[50%] w-[100%] ">
          <div
            className={`lg:px-16 lg:py-0 py-20 px-3 flex flex-col gap-6 w-[100%] b${
              selectedLanguage === "ar"
                ? "    text-end w-[100%] flex  items-end  "
                : "md:"
            }`}
          >
            <h1
              className={`bg-banana font-bold lg:text-[60px] text-[45px] text-start lg:w-[100%]   ${
                selectedLanguage === "ar" ? "    text-end " : "md:"
              }`}
            >
              {" "}
              {t("main.Events.title")}
            </h1>
            <p className="text-lg">{t("main.Events.desc")}</p>
            <p
              className={`font-light flex gap-2    ${
                selectedLanguage === "ar"
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
                stroke="currentColor"
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
              className="bg-alpha w-fit px-5 py-2 rounded-lg hover:bg-transparent hover:scale-105 hover:text-alpha border"
            >
              {t("main.Events.button")}
            </button>
          </div>
        </div>
        <div className="lg:w-[35vw] ">
          <img
            className="h-full w-full rounded-lg "
            src={eventHero}
            alt="img"
          />
        </div>
      </div>
    </>
  );
};
