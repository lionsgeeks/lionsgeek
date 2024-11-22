import React from "react";
import { useTranslation } from "react-i18next";
import { useAppContext } from "../../../utils/contextProvider";
export const Press = () => {
  const { t } = useTranslation();
  const { selectedLanguage, blogs, IMAGEURL } = useAppContext();
  console.log(blogs);

  return (
    <section className="py-[4vh]">
      <div className="w-full text-center pb-10">
        <h1 className="text-xl">{t("main.about.section4.title.first")}</h1>
        <h1 className="xl:text-5xl text-3xl font-bold">
          {t("main.about.section4.title.second")}
        </h1>
      </div>

      {/* blog */}
      {blogs?.map((el, index) => (
        <div
          key={index}
          className="cards flex flex-wrap justify-center md:justify-around px-4 md:px-16"
        >
          <div className="flex flex-col items-center w-full md:w-auto mb-12 md:mb-0">
            <div className=" w-[80vw] md:w-[20vw] rounded-lg hover:scale-105 transition-all duration-300">
              <img src={`${IMAGEURL}${el.image}`} alt="" />
            </div>
            <div className="text w-[80vw] md:w-[20vw] flex flex-col mt-3">
              <p className="font-bold py-1 text-center">
                {el.title[selectedLanguage]}
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
