import Logo from "../assets/images/lionsgeek_logo_2.png";
import { FaDiscord, FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Button from "../components/Button";
import { FaTiktok } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { useAppContext } from "../utils/contextProvider";
import { Link } from "react-router-dom";
import axios from "axios";
import { TransText } from "../components";

export const Footer = () => {
  const { t } = useTranslation();
  const { selectedLanguage, URL, darkMode } = useAppContext();
  const date = new Date();
  const currentYear = date.getFullYear();
  const [subscriber, setSubscriber] = useState("");
  const [inputError, setInputError] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [sending, setSending] = useState(false);
  useEffect(() => {
    if (sending) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [sending]);
  const sendEmail = () => {
    try {
      const data = { email: subscriber };
      if (subscriber) {
        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(subscriber)) {
          setValidEmail(true);
          return;
        }
        axios.post(URL + "subscriber", data).then((response) => {
          if (response.data.status === 69) {
            setInputError(true);
          } else if (response.data.status === 200) {
            setSending(true);
            setSubscriber("");
          }
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <footer className={`lg:px-16 px-5 py-10  ${darkMode && "bg-[#0f0f0f]"}`}>
        <div
          className={` pt-10 ${
            darkMode && "bg-[#0f0f0f]"
          } pb-4 flex flex-col gap-10  rounded-lg lg:px-10 px-5 ${
            darkMode ? "bg-[#212529]" : "bg-light_gray"
          } `}
        >
          <div
            className={`flex lg:flex-row flex-col gap-10 justify-between lg:px-4 ${
              selectedLanguage == "ar" ? "lg:flex-row-reverse" : ""
            }`}
          >
            <div
              className={`flex lg:flex-row flex-col justify-center lg:gap-10 gap-2 ${
                selectedLanguage == "ar" ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div
                className={`${
                  selectedLanguage == "ar" ? "flex justify-end" : ""
                }`}
              >
                <img
                  loading="lazy"
                  src={Logo}
                  alt=""
                  className={`lg:w-[7vw] lg:h-[7vw] w-[20vw] h-[20vw]  lg:mb-0 mb-5 ${
                    darkMode && "invert"
                  }`}
                />
              </div>
              {/* cours */}
              <div
                className={`flex flex-col  gap-3 lg:ms-5 ${
                  selectedLanguage == "ar" ? "text-end" : ""
                }`}
              >
                <h1
                  className={`font-bold text-gray-600  text-[1.2rem] ${
                    darkMode && "text-white"
                  }`}
                >
                  {t("footer.part1.title")}
                </h1>
                <div className="flex flex-col gap-1">
                  <Link
                    to={"/coding"}
                    className={`cursor-pointer  text-gray-400 text-[0.9rem] ${
                      selectedLanguage == "ar" ? "text-end" : ""
                    }`}
                  >
                    {t("footer.part1.phrase1")}
                  </Link>
                  <Link
                    to={"/media"}
                    className={`cursor-pointer text-gray-400 text-[0.9rem] ${
                      selectedLanguage == "ar" ? "text-end" : ""
                    }`}
                  >
                    {t("footer.part1.phrase2")}
                  </Link>
                </div>
              </div>

              <div>
                <div className="flex flex-col gap-3">
                  <h1
                    className={`font-bold text-gray-600 text-[1.2rem]  ${
                      selectedLanguage == "ar" ? "text-end" : ""
                    } ${darkMode && "text-white"}`}
                  >
                    {t("footer.part2.title")}
                  </h1>
                  <div className="flex flex-col gap-1">
                    {/* <div>
                                        <p className='font-medium text-gray-400 text-[0.9rem]'>Address:</p>
                                        <p className='text-gray-400 text-[0.9rem] w-[20vw] '>4ème étage, Ain Sebaa Center, Route de Rabat, Casablanca</p>
                                    </div> */}
                    <div>
                      <p
                        className={`font-medium text-gray-400  text-[0.9rem]  ${
                          selectedLanguage == "ar" ? "text-end" : ""
                        }`}
                      >
                        {t("footer.part2.area1.title")}
                      </p>
                      <p
                        className={`text-gray-400 text-[0.9rem]  ${
                          selectedLanguage == "ar" ? "text-end" : ""
                        }`}
                      >
                        <a href="mailto:contact@lionsgeek.ma">
                          {t("footer.part2.area1.content")}
                        </a>
                      </p>
                    </div>

                    <div>
                      <p
                        className={`font-medium text-gray-400 text-[0.9rem]  ${
                          selectedLanguage == "ar" ? "text-end" : ""
                        }`}
                      >
                        {t("footer.part2.area2.title")}
                      </p>
                      <p
                        className={`text-gray-400 text-[0.9rem]  ${
                          selectedLanguage == "ar" ? "text-end" : ""
                        }`}
                      >
                        {t("footer.part2.area2.content")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-2 lg:w-[40%] xl:w-[25%]">
              <h1
                className={`font-bold text-gray-600 text-[1.2rem] w-full ${
                  darkMode && "text-white"
                }  ${selectedLanguage == "ar" ? "text-end" : ""}`}
              >
                {t("footer.part3.title")}
              </h1>
              <div className="relative h-11 w-full min-w-[200px]">
                <input
                  onChange={(e) => {
                    setSubscriber(e.target.value);
                    setInputError(false);
                    setValidEmail(false);
                  }}
                  value={subscriber}
                  className={`
                  ${darkMode && "text-white/90"}
                  ${
                    selectedLanguage == "ar" ? "text-end" : ""
                  } peer h-full w-full border-b  ${
                    inputError
                      ? " border-red-500 rounded text-red-500 text-blue-gray-700"
                      : " border-blue-gray-200"
                  } bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal  outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-alpha focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50`}
                  placeholder=" "
                />
                {inputError && (
                  <span className="text-red-500 text-sm">
                    <TransText
                      fr="Cette adresse e-mail est déjà enregistrée."
                      en="This email address is already registered."
                      ar="  عنوان البريد الإلكتروني هذا مسجل بالفعل"
                    />
                  </span>
                )}
                {validEmail && (
                  <span className="text-red-500 text-sm">
                    <TransText
                      fr="Veuillez entrer une adresse e-mail valide."
                      en="Please enter a valid email address."
                      ar=" يرجى إدخال عنوان بريد إلكتروني صالح "
                    />
                  </span>
                )}
                <label
                  className={`pt-1 pointer-events-none absolute ${
                    selectedLanguage == "ar" ? "right-0" : "left-0"
                  }  -top-1.5 transition-all after:content[' '] peer-placeholder-shown:text-sm  peer-placeholder-shown:leading-[4.25] peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-alpha text-gray-500`}
                >
                  {t("footer.part3.input")}
                </label>
              </div>
              {/* <button className="bg-alpha mt-2   font-light text-[0.8rem] px-4 py-2 rounded-lg shadow-md">SIGN UP</button> */}
              <Button
                className={"shadow-md font-normal w-full mt-5 text-[0.8rem]"}
                onClick={sendEmail}
              >
                {t("footer.part3.button")}
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-2 pt-4 border-t-[3px] border-gray-500 border-opacity-50">
            <div className="flex gap-3">
              <a target="blank" href="https://www.facebook.com/LionsGeek">
                <FaFacebookF className="text-[1.4rem] fill-gray-400 hover:fill-blue-500 transition duration-200" />
              </a>
              <a target="blank" href="https://www.instagram.com/lions_geek/">
                <FaInstagram className="text-[1.4rem] fill-gray-400 hover:fill-pink-600 transition duration-200" />
              </a>
              <a target="blank" href="https://x.com/LionsGeek">
                <BsTwitterX
                  className={`text-[1.4rem] fill-gray-400 hover:fill-black transition duration-200 `}
                />
              </a>
              <a
                target="blank"
                href="https://www.linkedin.com/company/lionsgeek/"
              >
                <FaLinkedinIn className="text-[1.4rem] fill-gray-400 hover:fill-[#0a66c2] transition duration-200" />
              </a>
              <a
                target="blank"
                href="https://www.youtube.com/channel/UCmd_wMUuFYbZ_jJgFxErDyA"
              >
                <FaYoutube className="text-[1.4rem] fill-gray-400 hover:fill-[#ff0000] transition duration-200" />
              </a>
              <a target="blank" href="https://www.tiktok.com/@lions_geek">
                <FaTiktok className="text-[1.4rem] fill-gray-400 hover:fill-black transition duration-200" />
              </a>
              {/* <a target="blank" href="https://discord.com/channels/1219261183803129929/1219261184314839133">
                <FaDiscord className="text-[1.4rem] fill-gray-400 hover:fill-black transition duration-200" />
              </a> */}
            </div>
            <p className="text-gray-400 text-[0.9rem] text-center">
              &copy; Copyright {currentYear} LionsGeek. All Rights Reserved.
            </p>
            {/* policy */}
            <div>
              <Link to="/policy" className="text-gray-400 hover:underline">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
      {sending && (
        <div className="fixed z-[1000] overflow-hidden inset-0 flex justify-center items-center bg-black/50  w-full h-full ">
          <div
            class={`z-[1000] max-w-xl  w-full mx-auto rounded-xl overflow-hidden ${
              darkMode ? "bg-[#0f0f0f]" : "bg-white"
            }`}
          >
            <div class="max-w-md mx-auto pt-12 pb-2 px-5 text-center">
              <div class="inline-flex items-center justify-center rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#22c55e"
                  className="size-9"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h2 className="text-lg font- text-gray-500">Success!</h2>
              <h4
                class={`text-xl  font-semibold mb-5 ${
                  darkMode ? " text-gray-100" : " text-gray-500"
                }`}
              >
                <TransText
                  ar="شكراً لاشتراكك في النشرة الإخبارية"
                  fr="Merci de vous être inscrit(e) à la newsletter !"
                  en="Thank you for signing up for the newsletter!"
                />
              </h4>
              <p
                class={` font- ${
                  darkMode ? " text-gray-300" : " text-gray-500"
                }`}
              >
                <TransText
                  ar="ستتلقى رسالة بريد إلكتروني قريباً"
                  fr="Vous recevrez un e-mail bientôt."
                  en="You will receive an email soon."
                />
              </p>
            </div>
            <div
              class={`pb-6 px-6 text-right flex justify-center items-center  -mb-2 ${
                darkMode ? "bg-[#0f0f0f]" : "bg-white"
              }`}
            >
              <button
                onClick={() => {
                  setSending(false);
                }}
                class="inline-block w-full sm:w-auto py-3 px-5 mb-2 mr-4 text-center leading-6 text-black bg-alpha hover:bg-alpha/70 rounded-lg transition duration-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
