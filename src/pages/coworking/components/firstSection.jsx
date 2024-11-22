import React, { useContext, useEffect, useRef } from "react";
import herocowork from "../../../assets/images/Coworking-pana.png";
import { Button } from "../../../components";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { MyContext } from "../../../utils/contextProvider";
import gsap from "gsap";

export const FirstSectionCoworking = () => {
  const { t } = useTranslation();
  const { selectedLanguage, setSelectedLanguage } = useContext(MyContext);

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
      <div className="px-4 pt-24 lg:px-16 lg:pt-28 overflow-hidden">
        <div
          className={`w-full flex flex-col-reverse md:flex-row lg:flex-row gap-2  ${
            selectedLanguage == "ar" ? "lg:flex-row-reverse" : ""
          }`}
        >
          <div
            ref={leftside}
            className="w-full md:w-1/2 lg:w-1/2 px-7 flex flex-col md:gap-2 gap-5 "
          >
            <h1 className="text-3xl text-center md:text-3xl md:text-start lg:text-6xl md:pb-0 py-5 font-bold">
              {t("main.coworking.section1.title.first")}{" "}
              <span className="text-alpha selection:bg-alpha selection:text-black">
                {t("main.coworking.section1.title.second")}
              </span>{" "}
              {t("main.coworking.section1.title.third")}
            </h1>
            <p className="w-full md:text-sm lg:w-2/3  py-5 ">
              {t("main.coworking.section1.description")}
            </p>
            <Link to={"/coworking/form"}>
              <Button className={"w-full md:w-fit lg:w-fit"}>
                {t("main.coworking.section1.button")}
              </Button>
            </Link>
          </div>
          <div
            ref={rightside}
            className="w-full md:w-1/2  lg:w-1/2 flex justify-center md:items-center"
          >
            <img loading="lazy" className="w-[80%]" src={herocowork} alt="img" />
          </div>
        </div>
      </div>
    </>
  );
};
