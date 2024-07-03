import React, { useState } from "react";
import facebook from "../../../assets/icons/icons8-facebook.svg";
import instaLogo from "../../../assets/icons/icons8-instagram.svg";
import tiktok from "../../../assets/icons/icons8-tic-tac.svg";
import fingerPrint from "../../../assets/icons/fingerprint-5.svg";
import adobe from "../../../assets/icons/adobe.png";
import camera from "../../../assets/icons/camera.png";
import twitterx from "../../../assets/icons/icons8-twitterx.svg";
import premierPro from "../../../assets/icons/icons8-adobe-premierpro.svg";
import illustrator from "../../../assets/icons/icons8-adobe-illustrator.svg";
import afterEffect from "../../../assets/icons/icons8-adobe-aftereffect.svg";
import photoshop from "../../../assets/icons/icons8-adobe-photoshop.svg";
import linkedinLogo from "../../../assets/icons/icons8-linkedin.svg";
import mic from "../../../assets/icons/microphone-svgrepo-com.svg";
import screen from "../../../assets/icons/screen-desktop-svgrepo-com.svg";

export const SecondSection = () => {
  const skill = [
    "Digital Marketing",
    "Branding",
    "Graphic Design",
    "Audio Visual",
  ];
  const [hint, setHint] = useState("Digital Marketing");
  const [activeSkill, setActiveSkill] = useState("Digital Marketing");
  const [anime, setAnime] = useState(true);
  const programe = {
    "Digital Marketing": [
      "Learn how to effectively promote your content across various online platforms. Understand the strategies behind SEO, social media marketing, email campaigns, and analytics to reach and engage your target audience.",
      "from-[#dd4b25]",
      [facebook, instaLogo, twitterx, tiktok],
    ],
    Branding: [
      "Discover the essentials of creating a strong brand identity. Learn how to develop a consistent visual and verbal identity that resonates with your audience and sets you apart from the competition.",
      "from-[#136eb0]",
      [fingerPrint, linkedinLogo],
    ],
    "Graphic Design": [
      "Master the fundamentals of graphic design, including typography, color theory, and layout. Use industry-standard software to create visually appealing and professional designs for various media.",
      "from-[#e2c430]",
      [premierPro, illustrator, afterEffect, photoshop],
    ],
    "Audio Visual": [
      "Gain expertise in audio and video production. Learn how to capture high-quality sound and visuals, edit recordings, and integrate them into your digital content to enhance the overall viewer experience",
      "from-[#31acd1]",
      [mic, camera, screen],
    ],
  };

  return (
    <div className="flex flex-col gap-8 lg:px-16 px-7 py-7 bg-gray-50 ">
      <div className="w-full text-center pb-10">
        <h1 className="text-xl">Testimonials</h1>
        <h1 className="text-5xl font-bold">Program</h1>
      </div>
      <div className="flex gap-2 flex-col lg:flex-row">
        <div className="lg:w-[40%] flex flex-col gap-2">
          {skill.map((element, index) => (
            <>
              <div
                onMouseDown={() => setAnime(false)}
                onClick={() => {
                  setHint(element);
                  setActiveSkill(element);
                  setAnime(true);
                }}
                className={` bg-white cursor-pointer p-3 pl-8 text-3xl flex justify-between items-center`}
              >
                <h1
                  className={`${
                    activeSkill == element ? "text-alpha" : ""
                  } font-bold`}
                >
                  {index + 1}. {element}
                </h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class={`${activeSkill == element ? "stroke-alpha" : ""} ${
                    element === hint ? "rotate-90" : ""
                  } size-5 font-bold lg:rotate-0`}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
              <div
                className={`${
                  element === hint ? "h-auto " : "h-0 hidden"
                }  gap-2 lg:hidden flex flex-col bg-white p-4`}
              >
                {programe[element][0]}
              </div>
            </>
          ))}
        </div>
        <div className="hidden lg:flex lg:w-[50%] p-4 bg-white relative overflow-hidden">
          {programe[hint] && (
            <>
              <p
                className="font-medium text-xl bg-white/25 absolute px-5"
                
              >
                {programe[hint][0]}
              </p>
              <img
                className={`hidden lg:flex size-[120%] object-cover absolute duration-700 ${
                  anime ? "-rotate-12 -right-56 duration-500" : "-right-96"
                } -top-6 opacity-5`}
                src={
                  programe[hint][2][
                    Math.floor(Math.random() * programe[hint][2].length)
                  ]
                }
                alt=""
              />
            </>
          )}
        </div>
        <div className="lg:flex lg:flex-col hidden w-[10%] gap-2">
          {programe[hint][2].map((element, index) => (
            <img key={index} className="w-[40%]" src={element} alt="" />
          ))}
        </div>
      </div>
    </div>
  );
};
