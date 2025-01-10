import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, TransText } from "../../components";
import { useAppContext } from "../../utils/contextProvider";
import axios from "axios";

const Unsubscribe = () => {
  const { URL, darkMode } = useAppContext();
  const [sending, setSending] = useState();
  const [notExist, setNotExist] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const unsubscribe = () => {
    const data = { id: id };
    try {
      axios.post(URL + "unsubscribe", data).then((response) => {
        if (response.data.status == 200) {
          setSending(true);
        } else if (response.data.status == 69) {
          setNotExist(true);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {!notExist ? (
        <div
          style={{ backgroundColor: darkMode ? "#0f0f0f" : "#ffffff" }}
          className="pt-24 h-[90vh]  flex flex-col gap-3 text-center px-4 justify-center items-center"
        >
          <p
            className="text-xl"
            style={{ color: darkMode ? "#ffffff" : "#0f0f0f" }}
          >
            <TransText
              en="Do you want to unsubscribe from our messages?"
              fr="Souhaitez-vous vous désabonner de nos messages ?"
              ar="هل ترغب في إلغاء الاشتراك من رسائلنا؟"
            />
          </p>
          <p
            className="text-xl"
            style={{ color: darkMode ? "#ffffff" : "#0f0f0f" }}
          >
            <TransText
              en="You'll stop receiving messages from us."
              fr="Vous ne recevrez plus de messages de notre part."
              ar="لن تتلقى رسائل منا بعد الآن"
            />
          </p>
          <Button
            style={{ color: darkMode ? "#ffffff" : "#0f0f0f" }}
            onClick={() => {
              unsubscribe();
            }}
          >
            <TransText
              en="Unsubscribe"
              ar="إلغاء الاشتراك"
              fr="Me désabonner"
            />
          </Button>
        </div>
      ) : (
        <div className="pt-24 h-[90vh] flex flex-col gap-5 justify-center items-center text-center px-4" style={{ backgroundColor: darkMode ? "#0f0f0f" : "#ffffff" }}>
          <span style={{ color: darkMode ? "#ffffff" : "#0f0f0f" }}>
            <TransText
              ar="لم نتمكن من العثور على حساب بهذا العنوان البريدي"
              fr="Nous n'avons pas pu trouver de compte avec cette adresse e-mail"
              en="We couldn't find an account with that email address."
            />
          </span>
          <Button onClick={()=>navigate('/home')}>Home</Button>
        </div> 
      )}

      {/* modal */}
      {sending && (
        <div className="fixed z-[1000] overflow-hidden inset-0 flex justify-center items-center bg-gray-700/70  w-full h-full ">
          <div
            class={`z-[1000] max-w-xl  w-full mx-auto rounded-xl overflow-hidden ${
              darkMode ? "bg-[#0f0f0f]" : "bg-[#ebe7e7]"
            }`}
          >
            <div class="max-w-md mx-auto pt-12 pb-14 px-5 text-center">
              <div class="inline-flex items-center justify-center w-12 h-12 mb-5 rounded-full">
                <svg
                  viewBox="0 0 48 48"
                  height="100"
                  width="100"
                  y="0px"
                  x="0px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <linearGradient
                    gradientUnits="userSpaceOnUse"
                    y2="37.081"
                    y1="10.918"
                    x2="10.918"
                    x1="37.081"
                    id="SVGID_1__8tZkVc2cOjdg_gr1"
                  >
                    <stop stop-color="#60fea4" offset="0"></stop>
                    <stop stop-color="#6afeaa" offset=".033"></stop>
                    <stop stop-color="#97fec4" offset=".197"></stop>
                    <stop stop-color="#bdffd9" offset=".362"></stop>
                    <stop stop-color="#daffea" offset=".525"></stop>
                    <stop stop-color="#eefff5" offset=".687"></stop>
                    <stop stop-color="#fbfffd" offset=".846"></stop>
                    <stop stop-color="#fff" offset="1"></stop>
                  </linearGradient>
                  <circle
                    fill="url(#SVGID_1__8tZkVc2cOjdg_gr1)"
                    r="18.5"
                    cy="24"
                    cx="24"
                  ></circle>
                  <path
                    d="M35.401,38.773C32.248,41.21,28.293,42.66,24,42.66C13.695,42.66,5.34,34.305,5.34,24	c0-2.648,0.551-5.167,1.546-7.448"
                    stroke-width="3"
                    stroke-miterlimit="10"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke="#10e36c"
                    fill="none"
                  ></path>
                  <path
                    d="M12.077,9.646C15.31,6.957,19.466,5.34,24,5.34c10.305,0,18.66,8.354,18.66,18.66	c0,2.309-0.419,4.52-1.186,6.561"
                    stroke-width="3"
                    stroke-miterlimit="10"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke="#10e36c"
                    fill="none"
                  ></path>
                  <polyline
                    points="16.5,23.5 21.5,28.5 32,18"
                    stroke-width="3"
                    stroke-miterlimit="10"
                    stroke-linejoin="round"
                    stroke-linecap="round"
                    stroke="#10e36c"
                    fill="none"
                  ></polyline>
                </svg>
              </div>
              <h4
                class={`text-xl  font-semibold mb-5 ${
                  darkMode ? " text-gray-100" : " text-[#0f0f0f]"
                }`}
              >
                <TransText
                  ar="تم إلغاء الاشتراك بنجاح"
                  fr="Désabonnement effectué avec succès !"
                  en="You have been unsubscribed successfully! "
                />
              </h4>
            </div>
            <div
              class={`pt-5 pb-6 px-6 text-right  -mb-2 ${
                darkMode ? "bg-gray-900" : "bg-[#e2e0e0]"
              }`}
            >
              <button
                onClick={() => {
                  setSending(false);
                  navigate('/home');
                }}
                class="inline-block w-full sm:w-auto py-3 px-5 mb-2 mr-4 text-center font-semibold leading-6 text-gray-200 bg-gray-500 hover:bg-gray-400 rounded-lg transition duration-200"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Unsubscribe;
