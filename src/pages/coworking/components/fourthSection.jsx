import React from "react";
import ilyass from "../../../assets/images/testimonial/unknown.jpg";
import { RiDoubleQuotesR } from "react-icons/ri";
import { useTranslation } from "react-i18next";
import { useAppContext } from "../../../utils/contextProvider";

export const FourthSectionCoworking = () => {
  const { darkMode } = useAppContext();
  const { t } = useTranslation();

  const testimoniels = [
    {
      name: "Ilyasse Elyatime",
      description:
        "LionsGeek's coworking space is a haven for creativity and productivity. The collaborative atmosphere and modern facilities made it the perfect place to work on my projects.",
      image: ilyass,
    },
    {
      name: "Oufkir Hamza",
      description:
        "The energy in LionsGeek's coworking space is unmatched. It's inspiring to be surrounded by talented individuals, all striving for excellence in their fields.",
      image: ilyass,
    },
    {
      name: "Amine Bakrim",
      description:
        "I love how LionsGeek's coworking space combines professionalism with comfort. The networking opportunities here have been invaluable for my career.",
      image: ilyass,
    },
    {
      name: "Youness Ait Haddou",
      description:
        "LionsGeek's coworking space is more than just a place to work—it's a community. I've made meaningful connections and gained new perspectives that enhanced my projects.",
      image: ilyass,
    },
    {
      name: "Wissale Chreiba",
      description:
        "Having access to LionsGeek's coworking space was a game-changer for me. The high-speed internet and quiet environment helped me focus and achieve my goals.",
      image: ilyass,
    },
    {
      name: "Youssef Faradi",
      description:
        "The coworking space at LionsGeek fosters innovation and collaboration. The supportive community and excellent amenities make it a pleasure to work here.",
      image: ilyass,
    },
  ];
  return (
    <div
      className={`p-5 lg:px-16 py-10 flex flex-col gap-5 ${
        darkMode ? "bg-[#0f0f0f]" : ""
      }`}
    >
      <div className="w-full text-center pb-10">
        <h1 className={` ${darkMode ? "text-white" : ""} text-lg lg:text-xl`}>
          {t("main.coworking.section4.title.first")}
        </h1>
        <h1
          className={` ${
            darkMode ? "text-white" : ""
          } text-2xl lg:text-5xl font-bold`}
        >
          {t("main.coworking.section4.title.second")}
        </h1>
      </div>
      <div className="flex flex-wrap  justify-center gap-3">
        {testimoniels.map((element, index) => (
          <div
            key={index}
            className={`w-full md:w-[45%] lg:w-[30%] flex flex-col gap-2 relative overflow-hidden ${
              darkMode ? "bg-[#212529]" : "bg-white border-2 border-gray-100"
            }  p-5 lg:p-8  rounded-lg`}
          >
            <div className="flex gap-3 items-center">
              <img
                loading="lazy"
                className="rounded-full w-10"
                src={element.image}
                alt=""
              />
              <p
                className={` ${darkMode && "text-white"} text-base font-bold `}
              >
                {element.name}
              </p>
            </div>
            <div className="absolute -top-4 -right-4 bg-alpha/70 p-5 object-cover rounded-full opacity-80">
              <RiDoubleQuotesR className="text-5xl" />
            </div>
            <p className={` ${darkMode && "text-white"} text-xs lg:text-base`}>
              {element.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
