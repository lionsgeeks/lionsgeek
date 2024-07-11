import React, { useContext, useState } from "react";
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
import { TransText } from "../../../components";
import { MyContext } from "../../../utils/contextProvider";

export const SecondSection = () => {
  const { selectedLanguage } = useContext(MyContext);

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
      {
        ar: "تعلم كيفية الترويج لمحتواك بفعالية عبر مختلف المنصات عبر الإنترنت. فهم الاستراتيجيات وراء تحسين محركات البحث (SEO) والتسويق عبر وسائل التواصل الاجتماعي والحملات البريدية والتحليلات للوصول إلى جمهورك المستهدف وجذبهم",
        fr: "Apprenez à promouvoir efficacement votre contenu sur diverses plateformes en ligne. Comprenez les stratégies derrière le SEO, le marketing sur les réseaux sociaux, les campagnes par e-mail et les analyses pour atteindre et engager votre audience cible.",
        en: "Learn how to effectively promote your content across various online platforms. Understand the strategies behind SEO, social media marketing, email campaigns, and analytics to reach and engage your target audience.",
      },
      {
        en: "Digital Marketing",
        ar: "التسويق الرقمي",
        fr: "Marketing Digital",
      },
      [facebook, instaLogo, twitterx, tiktok],
    ],
    Branding: [
      {
        ar: "اكتشف أساسيات إنشاء هوية علامة تجارية قوية. تعلم كيفية تطوير هوية بصرية ولفظية متسقة تتجاوب مع جمهورك وتتميز عن المنافسة",
        fr: "Découvrez les essentiels de la création d'une identité de marque forte. Apprenez à développer une identité visuelle et verbale cohérente qui résonne avec votre audience et vous distingue de la concurrence",
        en: "Discover the essentials of creating a strong brand identity. Learn how to develop a consistent visual and verbal identity that resonates with your audience and sets you apart from the competition.",
      },
      { en: "Branding", ar: "العلامة التجارية ", fr: "Branding" },
      [fingerPrint, linkedinLogo],
    ],
    "Graphic Design": [
      {
        ar: "أتقن أساسيات تصميم الجرافيك، بما في ذلك الطباعة ونظرية الألوان والتخطيط. استخدم برامج الصناعة القياسية لإنشاء تصاميم جذابة واحترافية لمختلف الوسائط",
        fr: "Maîtrisez les fondamentaux du design graphique, y compris la typographie, la théorie des couleurs et la mise en page. Utilisez des logiciels standard de l'industrie pour créer des designs visuellement attrayants et professionnels pour divers médias.",
        en: "Master the fundamentals of graphic design, including typography, color theory, and layout. Use industry-standard software to create visually appealing and professional designs for various media.",
      },
      { en: "Graphic Design", ar: " تصميم الجرافيك ", fr: "Design Graphique" },
      [premierPro, illustrator, afterEffect, photoshop],
    ],
    "Audio Visual": [
      {
        ar: "اكتسب خبرة في إنتاج الصوت والفيديو. تعلم كيفية التقاط صوت وصور عالية الجودة، وتحرير التسجيلات، ودمجها في محتواك الرقمي لتعزيز تجربة المشاهد الإجمالية.",
        fr: "Acquérez une expertise en production audio et vidéo. Apprenez à capturer des sons et des images de haute qualité, à éditer les enregistrements et à les intégrer dans votre contenu numérique pour améliorer l'expérience globale des spectateurs.",
        en: "Gain expertise in audio and video production. Learn how to capture high-quality sound and visuals, edit recordings, and integrate them into your digital content to enhance the overall viewer experience",
      },
      { en: "Audio Visual", ar: " الصوتيات والمرئيات", fr: "Audiovisuel" },
      [mic, camera, screen],
    ],
  };

  return (
    <div className="flex flex-col gap-8 lg:px-16 px-7 py-7 bg-gray-50 ">
      <div className="w-full text-center pb-10">
        <h1 className="text-xl">Testimonials</h1>
        <h1 className="text-5xl font-bold">Program</h1>
      </div>
      <div
        className={`flex gap-2 flex-col lg:flex-row ${
          selectedLanguage === "ar" ? "text-right lg:flex-row-reverse" : ""
        }`}
      >
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
                className={` bg-white cursor-pointer p-3 pl-8 text-3xl flex justify-between items-center ${
                  selectedLanguage === "ar"
                    ? "text-right lg:flex-row-reverse"
                    : ""
                }`}
              >
                <h1
                  className={`flex gap-3 ${
                    selectedLanguage === "ar"
                      ? "text-right lg:flex-row-reverse"
                      : ""
                  }`}
                >
                  <span
                    className={`${
                      activeSkill === element ? "text-alpha" : ""
                    } font-bold`}
                  >
                    {" "}
                    {index + 1}{" "}
                  </span>
                  <span
                    className={`${
                      activeSkill === element ? "text-alpha" : ""
                    } font-bold`}
                  >
                    {" "}
                    {TransText(programe[element][1])}{" "}
                  </span>
                </h1>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className={`lg:rotate-0 ${
                    activeSkill === element ? "stroke-alpha" : ""
                  } ${element === hint ? "rotate-90" : ""} ${
                    selectedLanguage === "ar" ? "lg:rotate-180" : ""
                  } size-5 font-bold`} 
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
                {TransText(programe[element][0])}
              </div>
            </>
          ))}
        </div>
        <div className="hidden lg:flex lg:w-[50%] p-4 bg-white relative overflow-hidden">
          {programe[hint] && (
            <>
              <p
                className={`font-medium text-xl bg-white/25 absolute px-5 ${
                  selectedLanguage == "ar" ? "text-right " : ""
                }`}
              >
                {TransText(programe[hint][0])}
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
