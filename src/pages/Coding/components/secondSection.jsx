import React, { useState } from "react";
import htmlLogo from "../../../assets/icons/icons8-html-5.svg";
import cssLogo from "../../../assets/icons/icons8-css3.svg";
import jsLogo from "../../../assets/icons/icons8-javascript.svg";
import reactLogo from "../../../assets/icons/icons8-react.svg";
import laravel from "../../../assets/icons/laravel.svg";
import gitLogo from "../../../assets/icons/icons8-git.svg";
import githubLogo from "../../../assets/icons/icons8-github.svg";
import shellLogo from "../../../assets/icons/icons8-frapper.svg";
import phpLogo from "../../../assets/icons/icons8-logo-php.svg";

export const SecondSection = () => {
  const skill = ["Front-End", "Back-End", "Version Control", "Shell Scripting"];
  const [hint, setHint] = useState("Front-End");
  const [activeSkill, setActiveSkill] = useState("Front-End");
  const programe = {
    "Front-End": [
      [
        <p>
          <span className="font-bold">HTML:</span> Master the building blocks of
          the web. Learn to structure your content effectively.
        </p>,
        <p>
          <span className="font-bold">CSS:</span> Style your web pages with
          precision. Understand layout techniques, responsive design, and modern
          CSS frameworks.
        </p>,
        <p>
          <span className="font-bold">JavaScript:</span> Bring your web pages to
          life with interactivity. Learn core JavaScript concepts and how to
          manipulate the DOM.
        </p>,
        <p>
          <span className="font-bold">React:</span> Dive into one of the most
          popular JavaScript libraries for building user interfaces. Learn
          component-based architecture and state management.
        </p>,
      ],
      "from-[#dd4b25]",
      [htmlLogo, cssLogo, jsLogo, reactLogo],
    ],
    "Back-End": [
      [
        <p>
          <span className="font-bold">Laravel : </span>Get hands-on with this
          powerful PHP framework. Learn to build robust and scalable server-side
          applications, manage databases, and create RESTful APIs.
        </p>,
      ],
      "from-[#136eb0]",
      [phpLogo, laravel],
    ],
    "Version Control": [
      [
        <p>
          <span className="font-bold">Git:</span> Understand the essentials of
          version control. Learn how to track changes in your codebase,
          collaborate with others, and manage project versions.
        </p>,
        <p>
          <span className="font-bold">GitHub:</span>Explore this popular
          platform for hosting and sharing code. Learn how to use GitHub for
          version control, collaboration, and project management.
        </p>,
      ],
      "from-[#e2c430]",
      [gitLogo, githubLogo],
    ],
    "Shell Scripting": [
      [
        <p>
          <span className="font-bold">Shell Scripting : </span>Automate tasks
          and improve your workflow. Learn the basics of shell scripting,
          command-line tools, and how to write scripts to perform repetitive
          tasks efficiently.
        </p>,
      ],
      "from-[#31acd1]",
      [shellLogo],
    ],
    // Laravel: [
    //   "A robust PHP framework designed for building modern web applications, featuring elegant syntax and powerful tools.",
    //   "from-[#f54d3a]",
    //   laravel,
    // ],
  };
  const [anime, setAnime] = useState(true);
  return (
    <div className="flex flex-col gap-8 lg:px-16 px-7 py-7 bg-gray-50 ">
      <div className="w-full text-center pb-10">
        <h1 className="text-xl">Testimonials</h1>
        <h1 className="text-5xl font-bold">Program</h1>
      </div>
      <div className="flex gap-2 flex-col lg:flex-row ">
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
                    activeSkill === element ? "text-alpha" : ""
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
                  class={`lg:rotate-0 ${
                    activeSkill === element ? "stroke-alpha" : ""
                  } ${element === hint ? 'rotate-90' : ''} size-5 font-bold`}
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
        <div className="hidden lg:flex lg:w-[50%] p-4 bg-white relative lg:overflow-hidden">
          {programe[hint] && (
            <div className="font-medium flex flex-col gap-2 duration-1000 bg-white/25 px-5">
              {programe[hint][0]}
            </div>
          )}
          <img
            className={`hidden lg:flex size-[120%] object-cover absolute duration-700 ${
              anime ? "-rotate-12 -right-56 duration-500" : "-right-96"
            } -top-6 opacity-5`}
            src={
              programe[hint][2][
                Math.floor(Math.random() * programe[hint][2].length)
              ]
            }
            alt="-rotate-12 -right-56 "
          />
        </div>
        <div className="lg:flex hidden lg:flex-col w-[10%]">
          {programe[hint][2].map((element, index) => (
            <img key={index} className="w-[40%]" src={element} alt="" />
          ))}
        </div>
      </div>
    </div>
  );
};
