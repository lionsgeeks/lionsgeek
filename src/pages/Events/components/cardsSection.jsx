import { useNavigate } from "react-router-dom";
import "./firstSection.sass";
import "./skeleton.css"
import { useContext, useEffect, useState } from "react";

import { useTranslation } from "react-i18next";
import { MyContext } from "../../../utils/contextProvider";
import { TransText } from "../../../components";
import { MdLocationPin, MdOutlineDateRange } from "react-icons/md";

export const CardsSection = () => {
  const { t } = useTranslation();
  const {
    selectedLanguage,
    IMAGEURL,
    events,
    darkMode
  } = useContext(MyContext);

  const navigate = useNavigate();

  // ? date format

  function DateComponent(backdate) {
    const date = new Date(`${backdate}`);
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    const formatDate = date.toLocaleDateString("en-GB", options);

    return formatDate;
  }

  // ? skeleton loading cards's Height 

  let card = document.getElementById("eventCard")
  let cardheight = card?.getBoundingClientRect().height

  // ? Get the size of 1 rem in pixels (from the root element)
  const remSizeInPixels = parseFloat(getComputedStyle(document.documentElement).fontSize);
  const heightInRem = cardheight / remSizeInPixels;

  console.log(events);


  return (
    <>
      <div className={`flex justify-center items-center md:px-20 px-6 py-14 ${darkMode ? "bg-[#0f0f0f]":"bg-white"}`}>
        <div className="flex flex-wrap w-full lg:gap-x-[calc(10%/2)] lg:gap-y-14 md:gap-x-[calc(4%/1)] gap-10 ">
          {
            events ?
              events[0] ?
                events.map((element, index) => (
                  <>
                    <div id="cards" className={`w-full text-center lg:pt-5 lg:px-0 px-6 `}>
                      <h1 className={`text-xl ${darkMode ? "text-white":"text-black"}`}>{t("main.Events.Title1")}</h1>
                      <h1 className={`text-5xl font-bold ${darkMode ? "text-white":"text-black"}`}>{t("main.Events.Desc1")}</h1>
                    </div>
                    <div
                      key={index}
                      id="eventCard"
                      className="shadow-lg h-fit overflow-hidden flex flex-col justify-between lg:w-[30%] md:w-[48%] w-[100%] rounded-xl cursor-pointer"
                      onClick={() => navigate(`/event/${element.id}`)}
                      dir={selectedLanguage == "ar" ? "rtl" : "ltr"}
                    >
                      <div className="w-[100%] h-[13rem]  ">
                        <img
                          loading="lazy"
                          src={`${IMAGEURL}${element.cover}`}
                          className="w-full h-full object-cover rounded-t-xl"
                          alt=""
                        />
                      </div>
                      <div className={`${darkMode ? "bg-[#212529]":"bg-white"}`}>
                        <div className="flex flex-col font-mono gap-3 py-[1rem] px-[1rem] ">
                          <h3 className={` text-[22px] font-bold truncate ${darkMode ? "text-white":"text-black"}`}>
                            <TransText {...element.name} />

                          </h3>
                          <div className="flex flex-col gap-2 overflow-hidden text-[#8b96af]">
                            <p className="text-[15px] flex items-center gap-1  text-[#8b96af] ">
                              <MdOutlineDateRange className="fill-[#8b96af]" /> Date :{" "}
                              {DateComponent(element?.date)}
                            </p>
                            <div className="text-[15px] flex items-center gap-1">
                              <p className="flex items-center gap-1 text-[#8b96af] truncate">
                                <MdLocationPin className="fill-[#8b96af]" />
                                Location : <TransText {...element.location} />
                              </p>
                            </div>
                          </div>
                        </div>
                        <button className="bg-[#fee819] transition duration-150 text-black w-full py-[.5rem] font-semibold ">
                          <TransText fr="Voir tout" ar="شاهد الكل" en="See all" />
                        </button>
                      </div>
                    </div>
                  </>
                ))
                :
                <>
                  <div className={`flex justify-center items-center text-center w-full h-[16rem] text-[30px] font-bold  ${darkMode ? "text-white":"text-black"}`}>
                    <TransText fr="Aucun événement disponible" ar="لا يوجد حدث متاح" en="No Available Event" />
                  </div>
                </>
              :
              <>
                {
                  Array.from({ length: 3 }).map((_, index) => (
                    <div key={index} className={`lg:w-[30%] flex flex-col gap-8 md:w-[48%] w-[100%] lg:h-[${heightInRem}] h-[23.6rem] rounded-xl p-4 `}>
                      <div className={`skeleton lg:h-[${heightInRem / 2}] h-[11.5rem] w-[100%] bg-skeleton2 rounded-md `}></div>
                      <div className="flex flex-col gap-4">
                        <div className="skeleton w-[75%] h-6 rounded-md bg-skeleton2 "></div>
                        <div className="skeleton w-[60%] h-4 rounded-md bg-skeleton2 "></div>
                        <div className="skeleton w-[75%] h-5 rounded-md bg-skeleton2 "></div>
                      </div>
                    </div>
                  ))
                }
              </>
          }
        </div>
      </div>
    </>
  );
};
