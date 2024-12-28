import React, { useContext, useEffect, useRef, useState } from "react";
import Button from "../components/Button";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { IoCodeSlashOutline } from "react-icons/io5";
import { IoCameraOutline } from "react-icons/io5";
import { LuGalleryHorizontalEnd } from "react-icons/lu";
import { TbBrandMessenger } from "react-icons/tb";
import { TbMessageCircleExclamation } from "react-icons/tb";
import { LANGUAGES } from "../languages";
import { useTranslation } from "react-i18next";
import { MyContext, useAppContext } from "../utils/contextProvider";
import { HiOutlineLanguage } from "react-icons/hi2";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formationMenu, setFormationMenu] = useState(false);
  const [aboutMenu, setAboutMenu] = useState(false);
  const [languageIsOpen, setLanguageIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // dark Mode
  const { darkMode, toggleDarkMode } = useAppContext();


  const toggleLanguageIsOpen = () => {
    setLanguageIsOpen(!languageIsOpen);
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const navigateTo = (link) => {
    setIsOpen(false);
    navigate(link);
  };

  const closeMore_Open = () => {
    setIsOpen(false);
    setFormationMenu(false);
    setAboutMenu(false);
  };

  const formationRef = useRef(null);
  const aboutRef = useRef(null);
  const selectRef = useRef(null);

  const handleClickOutside = (event) => {
    if (formationRef.current && !formationRef.current.contains(event.target)) {
      setFormationMenu(false);
    }
    if (aboutRef.current && !aboutRef.current.contains(event.target)) {
      setAboutMenu(false);
    }
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setLanguageIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const { t, i18n } = useTranslation();
  const { selectedLanguage, setSelectedLanguage } = useContext(MyContext);
  const handleChangeLanguage = (e) => {
    let code = e.currentTarget.dataset.code;
    if (code) {
      i18n.changeLanguage(code);
      setSelectedLanguage(code);
    }
  };
  return (
    <div className=" z-50 fixed top-0 right-0 left-0 " >
      <div className="antialiased  dark-mode:bg-gray-900" >
        <div className="w-full text-gray-700 bg-gray-50 dark-mode:text-gray-200 dark-mode:bg-gray-800" style={{ backgroundColor: darkMode ? "#0f0f0f" : "#ffffff" }}>
          <div
            className={`flex flex-col px-4 lg:items-center lg:justify-between lg:flex-row md:px-8 lg:px-16 ${selectedLanguage == "ar" ? "lg:flex-row-reverse" : ""
              }`}
          >
            <div className="flex flex-row items-center justify-between py-4">
              {/* logo */}
              <Link
                to={"/"}
                href="#"
                className="text-lg font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
              >
                <svg
                  className={`${darkMode ? "fill-white" : "fill-[#0f0f0f]"}`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="206.551"
                  height="35.121"
                >
                  <g data-name="Groupe 19">
                    <g data-name="Groupe 4">
                      <path
                        data-name="Tracé 12"
                        d="M29.876 0H7.053L0 21.706l18.464 13.415 18.468-13.415zM18.465 27.506L7.243 19.353l4.286-13.192H25.4l4.286 13.192z"
                      />
                      <path
                        data-name="Tracé 13"
                        d="M13.177 19.326l5.288 3.841 5.288-3.841z"
                      />
                    </g>
                    <g data-name="Groupe 5">
                      <path
                        data-name="Tracé 1"
                        d="M54 26.089V8.273h2.231v17.544l9.656-.272v1.9l-10.227.272A1.485 1.485 0 0154 26.089z"
                      />
                      <path
                        data-name="Tracé 2"
                        d="M75.024 10.177V25.55h4.271v1.9h-10.8v-1.9h4.3V10.181h-4.3v-1.9h10.8v1.9z"
                      />
                      <path
                        data-name="Tracé 3"
                        d="M89.575 8c5.6 0 8.922 4.271 8.922 9.847 0 5.6-3.318 9.874-8.922 9.874-5.658 0-8.976-4.271-8.976-9.874 0-5.576 3.319-9.847 8.976-9.847zm0 17.817c4.516 0 6.692-3.373 6.692-7.97 0-4.57-2.176-7.942-6.692-7.942-4.542 0-6.746 3.373-6.746 7.942.001 4.597 2.204 7.97 6.746 7.97z"
                      />
                      <path
                        data-name="Tracé 4"
                        d="M101.677 8.273h4.488l9.575 18.55h.626l-.354-1.6V8.277h2.2V27.45h-4.488l-9.548-18.551h-.625l.354 1.6V27.45h-2.231z"
                      />
                      <path
                        data-name="Tracé 5"
                        d="M130.02 27.721c-6.692 0-8.677-2.965-8.677-7.453h2.23c0 4.543 2.421 5.549 6.447 5.549 3.264 0 5.141-.788 5.141-3.1 0-2.91-3.373-3.509-6.419-4.406-3.781-1.142-6.528-2.176-6.528-5.576 0-2.938 2.067-4.734 6.8-4.734 5.658 0 7.589 3.455 7.589 6.583h-2.23c0-3.264-2.421-4.678-5.359-4.678-2.638 0-4.57.653-4.57 2.774 0 2.013 1.687 2.748 4.842 3.727 3.754 1.169 8.106 2.2 8.106 6.2-.003 2.857-1.716 5.114-7.372 5.114z"
                      />
                      <path
                        data-name="Tracé 6"
                        d="M148.539 8c4.814 0 7.48 2.938 8.051 7.127h-2.23c-.435-3.155-2.04-5.222-5.821-5.222-4.488 0-6.828 3.264-6.828 7.942 0 4.706 1.714 7.97 6.2 7.97 3.781 0 5.576-2.2 5.495-6.8h-6.554v-1.8h9.466c1.115 0 1.632.49 1.632 1.5v8.731h-2.231v-7.154l.353-2.448h-.625c-.027 6.691-2.611 9.874-7.562 9.874-5.631 0-8.405-4.216-8.405-9.874.001-5.63 3.51-9.846 9.059-9.846z"
                      />
                      <path
                        data-name="Tracé 7"
                        d="M161.076 8.273h11.886v1.9h-9.656v6.719h8.3v1.9h-8.3v6.746h9.656v1.9h-11.886z"
                      />
                      <path
                        data-name="Tracé 8"
                        d="M176.143 8.273h11.887v1.9h-9.656v6.719h8.3v1.9h-8.3v6.746h9.656v1.9h-11.887z"
                      />
                      <path
                        data-name="Tracé 9"
                        d="M194.855 17.85l11.7 9.6h-3.209l-9.9-8.16v8.16h-2.231V8.274h2.231v8.16l9.9-8.16h3.209z"
                      />
                    </g>
                  </g>
                </svg>

              </Link>
              {/* toggle */}
              <div className=" flex items-center gap-x-3">
              <button
                onClick={toggleDarkMode}
                className="p-2 transition-colors  lg:hidden duration-200 rounded-full focus:outline-none"
              >

                {darkMode ? (

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill={darkMode ? "white" : "currentColor"}
                    className="bi bi-brightness-high text-yellow-400"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
                  </svg>

                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon" viewBox="0 0 16 16">
                    <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286" />
                  </svg>
                )}

              </button>
              <button
                className="rounded-lg lg:hidden focus:outline-none focus:shadow-outline"
                onClick={toggleNavbar}
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  className={`w-6 h-6 ${darkMode ? "fill-white" : "fill-black"}`}
                >
                  {isOpen ? (
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  ) : (
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  )}
                </svg>
              </button>
              </div>
            </div>
            <nav
              className={`flex-col ${isOpen ? "flex" : "hidden"
                } gap-6 xl:gap-6 lg:gap-2 pb-4 lg:pb-0 lg:flex lg:justify-end lg:items-center lg:flex-row bg--500  ${selectedLanguage == "ar" ? "lg:flex-row-reverse items-end" : ""
                }`}
            >
              <Link style={{ color: darkMode ? "#ffffff" : "#0f0f0f" }}
                to={"/"}
                onClick={() => setIsOpen(false)}
                className={` px-2 py-2 text-sm relative after:absolute after:border-b-[2px]  after:bottom-[-13px] after:left-0 after:w-0 hover:after:w-[100%] after:transition-all after:duration-[0.35s]  ${location.pathname == "/"
                  ? "font-medium  after:border-alpha after:w-[100%]"
                  : "after:border-gray-300"
                  }`}
              >
                {t("header.home")}
              </Link>
              <div
                ref={formationRef}
                className={`relative after:absolute after:border-b-[2px]  after:bottom-[-13px] after:left-0 after:w-0 hover:after:w-[100%] after:transition-all after:duration-[0.35s] ${location.pathname == "/coding" ||
                  location.pathname == "/media"
                  ? "font-medium after:border-alpha after:w-[100%]"
                  : "after:border-gray-300"
                  }`}
              >
                <button
                  onClick={() => {
                    setFormationMenu(!formationMenu);
                    setAboutMenu(false);
                  }}
                  className={`px-2 py-2 text-sm relative flex items-center ${selectedLanguage == "ar" ? "flex-row-reverse" : ""
                    } `}
                >
                  <span
                    className={`  ${darkMode ? "text-white" : "#0f0f0f"}`}
                  >
                    {t("header.formation")}
                  </span>
                  <svg
                    fill={darkMode ? "white" : "#0f0f0f"}
                    viewBox="0 0 20 20"
                    className={`inline w-4 h-4 transition-transform duration-200 transform ${selectedLanguage === "ar" ? "mr-1" : "ml-1"
                      } ${formationMenu ? "rotate-180" : "rotate-0"}`}
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>


                </button>
                {formationMenu && (
                  <div
                    className={`absolute z-30 ${selectedLanguage == "ar" ? "right-0" : "left-0"
                      }  mt-2 origin-top-right`}
                  >
                    <div className={`py-2  rounded-md lg:min-w-[15vw] min-w-[40vw] shadow-lg dark-mode:bg-gray-700 flex flex-col gap-2 ${darkMode ? "bg-[#0f0f0f] " : "bg-white"}`}>
                      <Link
                        id="codingLink"
                        to={"/coding"}
                        onClick={() => closeMore_Open()}
                        className={`group cursor-pointer  hover:border-s-[2px] hover:border-alpha hover:bg-alpha/10 flex ${selectedLanguage == "ar" ? "flex-row-reverse" : ""
                          } items-center gap-3 px-3 py-1 transition duration-300 `}
                      >
                        <IoCodeSlashOutline className={`text-[1.3rem]   group-hover:stroke-alpha transition duration-300 `} stroke={darkMode ? "#fff" : "#0f0f0f"} />
                        <p className={`text-[0.9rem] ${darkMode && "text-white"} `}>{t("header.coding")}</p>
                      </Link>
                      <Link
                        id="mediaLink"
                        to={"/media"}
                        onClick={() => closeMore_Open()}
                        className={`group cursor-pointer hover:border-s-[2px] hover:border-alpha hover:bg-alpha/10 flex ${selectedLanguage == "ar" ? "flex-row-reverse" : ""
                          }  items-center gap-3 px-3 py-1 transition duration-300`}
                      >
                        <IoCameraOutline className={`text-[1.3rem]  group-hover:stroke-alpha transition duration-300 `} stroke={darkMode ? "#fff" : "#0f0f0f"} />
                        <p className={`text-[0.9rem]  ${darkMode && "text-white"}`}>{t("header.media")}</p>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <Link
                to={"/coworking"}
                onClick={() => setIsOpen(false)}
                className={`${darkMode ? "text-white" : "#0f0f0f"} px-2 py-2 text-sm relative after:absolute after:border-b-[2px]  after:bottom-[-13px] after:left-0 after:w-0 hover:after:w-[100%] after:transition-all after:duration-[0.35s]  ${location.pathname == "/coworking"
                  ? "font-medium  after:border-alpha after:w-[100%]"
                  : "after:border-gray-300"
                  }`}
              >
                {t("header.coworking")}
              </Link>
              <Link
                to={"/event"}
                onClick={() => setIsOpen(false)}
                className={`${darkMode ? "text-white" : "#0f0f0f"}  px-2 py-2 text-sm relative after:absolute after:border-b-[2px]  after:bottom-[-13px] after:left-0 after:w-0 hover:after:w-[100%] after:transition-all after:duration-[0.35s]  ${location.pathname == "/event"
                  ? "font-medium  after:border-alpha after:w-[100%]"
                  : "after:border-gray-300"
                  }`}
              >
                {t("header.events")}
              </Link>
              <Link
                to={"/pro"}
                onClick={() => setIsOpen(false)}
                className={`${darkMode ? "text-white" : "#0f0f0f"}  px-2 py-2 text-sm relative after:absolute after:border-b-[2px]  after:bottom-[-13px] after:left-0 after:w-0 hover:after:w-[100%] after:transition-all after:duration-[0.35s]  ${location.pathname == "/pro"
                  ? "font-medium  after:border-alpha after:w-[100%]"
                  : "after:border-gray-300"
                  }`}
              >
                {t("header.pro")}
              </Link>
              {/* <a href="#" className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-2 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">Contact Us</a> */}
              {/* <a href="#" className="bg-alpha  md:mt-0 md:ml-2 font-light text-[0.9rem] px-4 py-2 rounded-lg shadow-md border border-alpha hover:text-alpha hover:bg-transparent hover:border hover:border-alpha  text-center">Contact Us</a> */}
              <div
                ref={aboutRef}
                className={`relative  after:absolute after:border-b-[2px]  after:bottom-[-13px] after:left-0 after:w-0 hover:after:w-[100%] after:transition-all after:duration-[0.35s] ${location.pathname == "/blog" ||
                  location.pathname == "/about" ||
                  location.pathname == "/galerie"
                  ? "font-medium after:border-alpha after:w-[100%]"
                  : "after:border-gray-300"
                  }`}
              >
                <button
                  onClick={() => {
                    setAboutMenu(!aboutMenu);
                    setFormationMenu(false);
                  }}
                  className={` px-2 py-2 text-sm relative flex items-center ${selectedLanguage == "ar" ? "flex-row-reverse" : ""
                    } `}
                >
                  <span className={`${darkMode ? "text-white" : "#0f0f0f"} `}>{t("header.about")}</span>
                  <svg
                    fill={darkMode ? "white" : "#0f0f0f"}
                    viewBox="0 0 20 20"
                    className={`inline w-4 h-4 ${selectedLanguage === "ar" ? "mr-1" : "ml-1"
                      } transition-transform duration-200 transform ${aboutMenu ? "rotate-180" : "rotate-0"
                      }`}
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>

                </button>
                {aboutMenu && (
                  <div
                    className={`absolute z-30 ${selectedLanguage == "ar" ? "right-0" : "left-0"
                      }   mt-2 origin-top-right `}
                  >
                    <div className={`py-2  ${darkMode ? "bg-[#0f0f0f]" : "bg-white"} rounded-md lg:min-w-[15vw] min-w-[40vw] shadow-lg dark-mode:bg-gray-700 flex flex-col gap-2`}>
                      <Link
                        id="codingLink"
                        to={"/about"}
                        onClick={() => closeMore_Open()}
                        className={`group cursor-pointer   hover:border-s-[2px] hover:border-alpha hover:bg-alpha/10 flex ${selectedLanguage == "ar" ? "flex-row-reverse" : ""
                          } items-center gap-3 px-3 py-1 transition duration-300`}
                      >
                        <TbMessageCircleExclamation className="text-[1.3rem]   group-hover:stroke-alpha transition duration-300" stroke={darkMode ? "#fff" : "#0f0f0f"} />
                        <p className={`text-[0.9rem] ${darkMode && "text-white"}`}>
                          {t("header.who_we_are")}
                        </p>
                      </Link>
                      <Link
                        id="mediaLink"
                        to={"/blog"}
                        onClick={() => closeMore_Open()}
                        className={`group cursor-pointer hover:border-s-[2px] hover:border-alpha hover:bg-alpha/10 flex ${selectedLanguage == "ar" ? "flex-row-reverse" : ""
                          } items-center gap-3 px-3 py-1 transition duration-300 `}
                      >
                        <TbBrandMessenger className="text-[1.3rem]  group-hover:stroke-alpha transition duration-300" stroke={darkMode ? "#fff" : "#0f0f0f"} />
                        <p className={`text-[0.9rem] ${darkMode && "text-white"}`}>{t("header.blog")}</p>
                      </Link>
                      <Link
                        id="mediaLink"
                        to={"/galerie"}
                        onClick={() => closeMore_Open()}
                        className={`group cursor-pointer hover:border-s-[2px] hover:border-alpha hover:bg-alpha/10 flex ${selectedLanguage == "ar" ? "flex-row-reverse" : ""
                          } items-center gap-3 px-3 py-1 transition duration-300 `}
                      >
                        <LuGalleryHorizontalEnd className="text-[1.3rem]  group-hover:stroke-alpha transition duration-300" stroke={darkMode ? "#fff" : "#0f0f0f"} />
                        <p className={`text-[0.9rem] ${darkMode && "text-white"}`}>{t("header.gallerie")}</p>
                      </Link>
                    </div>
                  </div>
                )}
              </div>
              <div

                ref={selectRef}
                className={`relative flex items-center`}
                onClick={toggleLanguageIsOpen}
              >
                <div
                  className={`cursor-pointer flex gap-1 ${selectedLanguage == "ar" ? "flex-row-reverse" : ""
                    } items-center `}
                >
                  <HiOutlineLanguage
                    stroke={darkMode ? "white" : "#0f0f0f"}
                    className="h-[5vh]"
                  />

                  <p className={`${darkMode && " text-white"}`}>
                    {
                      LANGUAGES.find(
                        (element) => element.code == selectedLanguage
                      )?.code
                    }
                    <svg
                      fill={darkMode ? "white" : "#0f0f0f"}
                      viewBox="0 0 20 20"
                      className={`inline w-4 h-4 ${selectedLanguage === "ar" ? "mr-1" : "ml-1"
                        } transition-transform duration-75 transform ${languageIsOpen ? "rotate-180" : "rotate-0"
                        }`}
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </p>


                </div>
                {languageIsOpen && (
                  <div className={`absolute top-10 z-30 mt-2 `}>
                    <div className={`rounded-md  flex flex-col items-start gap-2 shadow-lg  py-2 ${darkMode ? "bg-[#0f0f0f]" : "bg-white"}`}>
                      {LANGUAGES.map(({ code, label, flag }, index) => {
                        return (
                          <div
                            key={index}
                            onClick={handleChangeLanguage}
                            data-code={code}
                            className={`flex justify-start gap-2 px-3 py-1 cursor-pointer  ${darkMode ? "hover:bg-gray-600" : "hover:bg-gray-200"} w-full transition duration-200 `}
                          >
                            {flag}
                            <p className={`cursor-pointer ${darkMode ? "text-white" : ""}`}>{label}</p>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
              <Button
                onClick={() => {
                  navigateTo("contact-us");
                }}
                className={"shadow-md font-normal   px-4 text-[0.8rem] mt-0"}
              >
                {t("header.contact_us")}
              </Button>
              <button
                onClick={toggleDarkMode}
                className="p-2 transition-colors hidden lg:block duration-200 rounded-full focus:outline-none"
              >

                {darkMode ? (

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill={darkMode ? "white" : "currentColor"}
                    className="bi bi-brightness-high text-yellow-400"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6m0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
                  </svg>

                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-moon" viewBox="0 0 16 16">
                    <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .81.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.32 7.32 0 0 0 5.205-2.162q-.506.063-1.029.063c-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286" />
                  </svg>
                )}

              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
