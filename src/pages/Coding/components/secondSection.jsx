import React, { useState } from "react";
import htmlLogo from "../../../assets/icons/icons8-html-5.svg";
import cssLogo from "../../../assets/icons/icons8-css3.svg";
import jsLogo from '../../../assets/icons/icons8-javascript.svg';
import react from '../../../assets/icons/icons8-react.svg';
import laravel from '../../../assets/icons/laravel.svg';

export const SecondSection = () => {
  const skill = ["HTML", "CSS", "Javascript", "React", "Laravel"];
  const [hint, setHint] = useState('HTML');
  const [activeSkill, setActiveSkill] = useState('HTML');
  const programe = {
    HTML: [
      "The foundation of web development, HTML structures the content on web pages, creating the backbone of all websites.",
      "from-[#dd4b25]",htmlLogo,
    ],
    CSS: [
      "CSS adds style and layout to web pages, making them visually appealing and ensuring they look great on all devices.",
      "from-[#136eb0]",cssLogo
    ],
    Javascript: [
      "A powerful programming language that enables dynamic and interactive web features, enhancing user experience.",
      "from-[#e2c430]",jsLogo
    ],
    React: [
      "A popular JavaScript library for building fast, interactive user interfaces with reusable components.",
      "from-[#31acd1]",react
    ],
    Laravel: [
      "A robust PHP framework designed for building modern web applications, featuring elegant syntax and powerful tools.",
      "from-[#f54d3a]",laravel
    ],
  };

  return (
    <div className="flex flex-col gap-8 px-16 py-7 bg-gray-50 ">
      <h1 className="font-bold text-6xl text-center ">Program</h1>
      <div className="flex gap-2">
        <div className="w-[50%] flex flex-col gap-2">
          {skill.map((element, index) => (
            <div
              onClick={() => {
                setHint(element);
                setActiveSkill(element);
              }}
              className={` bg-white cursor-pointer p-3 pl-8 text-3xl flex justify-between items-center`}>
              <h1 className={`${activeSkill == element ? "text-alpha" : "" } font-bold`}>
                {index + 1}. {element}
              </h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class={`${activeSkill == element ? "text-alpha" : "" } size-5 font-bold`}
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
          {programe[hint] && <p className="font-medium text-xl bg-white/25 absolute px-5" >{programe[hint][0]}</p>}
          <img className="size-[120%]  object-cover absolute -right-56 -top-6 opacity-5 -rotate-12" src={programe[hint][2]} alt="" />
        </div>
      </div>
    </div>
  );
};
