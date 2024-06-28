import React, { useState } from "react";
import facebook from "../../../assets/icons/social_media.png";
import insta from "../../../assets/icons/icons8-instagram.svg";
import fingerPrint from "../../../assets/icons/fingerprint-5.svg";
import adobe from "../../../assets/icons/adobe.png";
import camera from "../../../assets/icons/camera.png";
import twitterx from "../../../assets/icons/icons8-twitterx.svg";
import htmlLogo from "../../../assets/icons/icons8-html-5.svg";
import cssLogo from "../../../assets/icons/icons8-css3.svg";
import jsLogo from "../../../assets/icons/icons8-javascript.svg";
import react from "../../../assets/icons/icons8-react.svg";
import laravel from "../../../assets/icons/laravel.svg";

export const SecondSection = () => {
  // ' graphic design branding  marketing digital  audio visual'
  const skill = [
    "Digital Marketing",
    "Branding",
    "Graphic Design",
    "Audio Visual",
  ];
  const [hint, setHint] = useState("Digital Marketing");
  const [activeSkill, setActiveSkill] = useState("Digital Marketing");
  const programe = {
    "Digital Marketing": [
      "Learn how to effectively promote your content across various online platforms. Understand the strategies behind SEO, social media marketing, email campaigns, and analytics to reach and engage your target audience.",
      "from-[#dd4b25]",
      facebook,
    ],
    Branding: [
      "Discover the essentials of creating a strong brand identity. Learn how to develop a consistent visual and verbal identity that resonates with your audience and sets you apart from the competition.",
      "from-[#136eb0]",
      fingerPrint,
    ],
    "Graphic Design": [
      "Master the fundamentals of graphic design, including typography, color theory, and layout. Use industry-standard software to create visually appealing and professional designs for various media.",
      "from-[#e2c430]",
      adobe,
    ],
    "Audio Visual": [
      "Gain expertise in audio and video production. Learn how to capture high-quality sound and visuals, edit recordings, and integrate them into your digital content to enhance the overall viewer experience",
      "from-[#31acd1]",
      camera,
    ],
    Laravel: [
      "A robust PHP framework designed for building modern web applications, featuring elegant syntax and powerful tools.",
      "from-[#f54d3a]",
      insta,
    ],
  };

  return (
    <div className="flex flex-col gap-8 px-16 py-7 bg-gray-50 ">
      {/* <h1 className="font-bold text-6xl text-center ">Program</h1> */}
      <div className="w-full text-center pb-10">
        <h1 className="text-xl">Testimonials</h1>
        <h1 className="text-5xl font-bold">Program</h1>
      </div>
      <div className="flex gap-2">
        <div className="w-[50%] flex flex-col gap-2">
          {skill.map((element, index) => (
            <div
              onClick={() => {
                setHint(element);
                setActiveSkill(element);
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
                class={`${
                  activeSkill == element ? "stroke-alpha" : ""
                } size-5 font-bold`}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          ))}
        </div>
        <div className="w-[50%] p-4 bg-white relative overflow-hidden">
          {/* <div className={`absolute inset-0 -z-30`}></div> */}
          {programe[hint] && (
            <>
              <p
                className="font-medium text-xl bg-white/25 absolute px-5"
                opacity-5
              >
                {programe[hint][0]}
              </p>
              <img
                className="size-[120%] object-cover absolute -right-56 -top-6 opacity-5 -rotate-12"
                src={programe[hint][2]}
                alt=""
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
