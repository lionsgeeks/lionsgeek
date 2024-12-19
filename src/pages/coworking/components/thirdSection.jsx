import React, { useEffect, useRef } from "react";
import coworkvideo from "../../../assets/videos/videoplayback.mp4";
import { useTranslation } from "react-i18next";
import { useAppContext } from "../../../utils/contextProvider";
export const ThirdSectionCoworking = () => {
  const {darkMode}  = useAppContext();
  const { t } = useTranslation();
  const videoPlay = useRef(null);
  useEffect(() => {
    const videoElement = videoPlay.current;
    const playVideo = (elements) => {
      const video = elements;
      if (video.isIntersecting) {
        videoElement.play();
      } else {
        videoElement.pause();
      }
    };
  }, []);
  return (
    <div className={`${darkMode ? "bg-[#0f0f0f]" : ""} p-5 lg:px-16 py-10 flex flex-col gap-5 text-center`}>
      <h1 className={` ${darkMode ? "text-white" : ""} text-lg lg:text-xl `}>
        {t("main.coworking.section3.title.first")}
      </h1>
      <h1 className={` ${darkMode ? "text-white" : ""} text-2xl lg:text-5xl font-bold`}>
        {t("main.coworking.section3.title.second")}
      </h1>
      <div className="w-full  flex justify-center ">
        <div className="w-full p-1 lg:p-3 border-2 border-alpha rounded-xl ">
          <video
            ref={videoPlay}
            className="rounded-xl"
            src={coworkvideo}
            type="video/mp4"
            autoPlay
            muted
            loop
          ></video>
        </div>
      </div>
    </div>
  );
};
