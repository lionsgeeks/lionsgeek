import React from "react";
import { FaUserCheck } from "react-icons/fa";
import { RiInformation2Fill } from "react-icons/ri";
import { FaRegComments } from "react-icons/fa6";
import { GiPalmTree } from "react-icons/gi";
import { TbSchool } from "react-icons/tb";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
export const ThirdSection = () => {
  useGSAP(() => {
    let ctx = gsap.from(".animateSection", {
      stagger: 0.7,
      width: "0",
      duration: 1,
      scrollTrigger: {
        trigger: ".animateSection",
        start: "top center",
      },
    });
  });
  const road = [
    {
      title: "Check-in",
      description:
        "Start your journey by filling out a simple form with your information. This step ensures we have all the details we need to personalize your experience at LionsGeek.",
      Icon: FaUserCheck,
    },
    {
      title: "Information Session",
      description:
        "Attend a detailed session where our coach will explain the program, its structure, and what you can expect. This session sets the stage for your learning journey, providing you with a clear roadmap.",
      Icon: RiInformation2Fill,
    },
    {
      title: "Interview",
      description:
        "Have an interview with our team to discuss your goals, current skills, and expectations. This conversation helps us understand how best to support you and tailor the program to meet your needs.",
      Icon: FaRegComments,
    },
    {
      title: "Jungle",
      description: `Immerse yourself in a week-long bootcamp where you'll learn the basics of web development. By the end of the week, you'll create a project and present it for evaluation. This hands-on experience is crucial for building a strong foundation.`,
      Icon: GiPalmTree,
    },
    {
      title: "Media School",
      description: `Begin the intensive 6-month media program, diving deep into audiovisual techniques and editing. You'll master camera use, lighting, sound, and video editing through practical projects and mentorship from industry professionals. This is where your journey to becoming a skilled content creator truly begins.`,
      Icon: TbSchool,
    },
  ];
  return (
    <div className="lg:px-16 px-7 py-16 flex flex-col gap-8 overflow-hidden">
      <div className="w-full text-center pb-10">
        <h1 className="text-xl">Testimonials</h1>
        <h1 className="text-5xl font-bold">The Road to LionsGeek</h1>
      </div>
      <div className="flex lg:flex-row lg:flex-wrap flex-col items-center gap-10 justify-center">
        {road.map(({ description, title, Icon }, index) => (
          <div
            className={`bg-gray-50 p-7 flex flex-col lg:w-[30%] gap-4 rounded-lg relative`}
          >
            <svg
              className={`hidden lg:flex animateSection absolute inset-0  top-1/2 -z-20 -translate-y-1/2 ${
                index === 3 || index === 4 ? "-left-96" : "-right-36"
              }`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200 150"
              overflow="visible"
            >
              <path
                id="path"
                fill="none"
                stroke="#333"
                stroke-miterlimit="10"
                stroke-width="2"
                d="M0,75 L200,75"
              />
            </svg>
            <Icon
              className={`text-5xl absolute -top-6 ${
                title === "Media School" ? "stroke-alpha" : "fill-alpha"
              } `}
            />
            <h1 className="font-bold text-2xl">
              <span className="text-alpha">{index + 1}. </span> {title}
            </h1>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
