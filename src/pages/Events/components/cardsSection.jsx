import { useNavigate } from "react-router-dom";
import "./firstSection.sass";
import { useContext } from "react";

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
  } = useContext(MyContext);

  const navigate = useNavigate();

  // ? date format

  function DateComponent(backdate) {
    const date = new Date(`${backdate}`);
    const options = { year: "numeric", month: "2-digit", day: "2-digit" };
    const formatDate = date.toLocaleDateString("en-GB", options);

    return formatDate;
  }

  return (
    <>
      <div id="cards" className="w-full text-center lg:pt-5 lg:px-0 px-6">
        <h1 className="text-xl">{t("main.Events.Title1")}</h1>
        <h1 className="text-5xl font-bold">{t("main.Events.Desc1")}</h1>
      </div>

      <div className="flex justify-center items-center md:px-20 px-6 py-14 ">
        <div className="flex flex-wrap w-full lg:gap-x-[calc(10%/2)] lg:gap-y-14 md:gap-x-[calc(4%/1)] gap-10 ">
          {events?.map((element, index) => (
            <div
              key={index}
              className="shadow-lg h-fit overflow-hidden  lg:w-[30%] md:w-[48%] w-[100%] rounded-xl cursor-pointer"
              onClick={() => navigate(`/event/${element.id}`)}
              dir={selectedLanguage == "ar" ? "rtl" : "ltr"}
            >
              <div className="w-[100%]  ">
                <img
                loading="lazy"
                  src={`${IMAGEURL}${element.cover}`}
                  className="w-full h-[12rem] object-cover rounded-t-xl"
                  alt=""
                />
              </div>
              <div className="flex flex-col font-mono gap-3 py-[1rem] px-[1rem] ">
                <h3 className="text-[22px] font-bold truncate">
                  Even Name Even Name Even NameEven NameEven NameEven Name
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
                      {/* {selectedLanguage === "en"
                        ? element.location.en
                        : selectedLanguage === "fr"
                        ? element.location.fr
                        : element.location.ar}{" "} */}
                    </p>
                  </div>
                </div>
              </div>
              <button className="bg-black hover:bg-[#fee819] transition duration-150 text-white w-full py-[.5rem] font-semibold ">
                <TransText fr="Voir tout" ar="شاهد الكل" en="See all" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
