import React from "react";
import ilyass from "../../../assets/images/testimonial/ilyass.jpg";
import osama from "../../../assets/images/testimonial/osama.jpg";
import aymen from "../../../assets/images/testimonial/aymen.jpg";
import wissal from "../../../assets/images/testimonial/wissal.jpg";
import { RiDoubleQuotesR } from "react-icons/ri";
import { TransText } from "../../../components";
import { useAppContext } from "../../../utils/contextProvider";

export const FifthSection = () => {

  const {darkMode } = useAppContext();

  const testimoniels = [
    {
      name: "Ilyasse Elyatime",
      description:
        "Attending LionsGeek's master classes was a game-changer. The UI/UX Design and Personal Branding sessions boosted my career. I highly recommend LionsGeek for web development and media training.",
      image: osama,
    },
    {
      name: "Oufkir Hamza",
      description:
        "LionsGeek transformed my web development skills. The hands-on projects and expert guidance were invaluable. Now, I'm confident in HTML, CSS, JavaScript, React, and Laravel.",
      image: ilyass,
    },
    {
      name: "Amine Bakrime",
      description:
        "LionsGeek offers top-notch web development education. The practical approach, including real-world projects and industry visits, prepared me well for the tech industry.",
      image: ilyass,
    },
    {
      name: "Wissale Chreiba",
      description:
        "I loved the media and code crossover classes at LionsGeek. They gave me a comprehensive understanding of both fields, making me a versatile professional.",
      image: wissal,
    },
    {
      name: "Aymen Boujjar",
      description:
        "The personal attention and mentorship at LionsGeek are outstanding. The CV and cover letter workshops helped me land my dream job in web development.",
      image: aymen,
    },
    {
      name: "Youssef Faradi",
      description:
        "LionsGeek's immersive bootcamp taught me everything from HTML and CSS to advanced JavaScript and Laravel. The supportive community and networking opportunities were fantastic.",
      image: ilyass,
    },
  ];

  return (
    <div className="flex flex-col gap-6 lg:px-16 px-7 py-8 " style={{ backgroundColor: darkMode ? "#0f0f0f" : "#ffffff"  } }
>
      <div className="w-full text-center pb-10">
        <h1 className="text-xl" style={{ color: darkMode ? "#ffffff" : "#0f0f0f" }}><TransText fr="Témoignages" ar="شهادات" en="Testimonials" /> </h1>
        <h1 className="text-5xl font-bold" style={{ color: darkMode ? "#ffffff" : "#0f0f0f" }}><TransText fr=" Les gens qui nous aiment déjà" ar="الأشخاص الذين يحبوننا بالفعل" en="People Who Already Love Us"/> </h1>
      </div>
      <div className="flex lg:flex-row lg:flex-wrap flex-col justify-center gap-3">
        {testimoniels.map((element, index) => (
          <div
            key={index}
            className="lg:w-[30%] flex flex-col gap-2 relative overflow-hidden bg-white p-8 border-2 border-gray-100 rounded-lg"
            style={{ backgroundColor: darkMode ? "#212529" : "#ffffff", border: darkMode ? "none" : "2px solid #f3f4f6", 
            }}
          >
            <div className="flex gap-3 items-center">
              <img loading="lazy" className="rounded-full w-10 h-10 bg-cover object-cover " src={element.image} alt="" />
              <p className="font-bold" style={{ color: darkMode ? "#ffffff" : "#0f0f0f" }}>{element.name}</p>
            </div>
            <div className="absolute -top-4 -right-4 bg-alpha/70 p-5 object-cover rounded-full opacity-80">
              <RiDoubleQuotesR className="text-5xl" />
            </div>
            <p style={{ color: darkMode ? "#ffffff" : "#0f0f0f" }}>{element.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
