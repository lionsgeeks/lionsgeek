import React, { useContext, useState } from "react";
import htmlLogo from "../../../assets/icons/icons8-html-5.svg";
import cssLogo from "../../../assets/icons/icons8-css3.svg";
import jsLogo from "../../../assets/icons/icons8-javascript.svg";
import reactLogo from "../../../assets/icons/icons8-react.svg";
import laravel from "../../../assets/icons/laravel.svg";
import gitLogo from "../../../assets/icons/icons8-git.svg";
import githubLogo from "../../../assets/icons/icons8-github.svg";
import shellLogo from "../../../assets/icons/icons8-frapper.svg";
import phpLogo from "../../../assets/icons/icons8-logo-php.svg";
import { useTranslation } from "react-i18next";
import { TransText } from "../../../components";
import { MyContext } from "../../../utils/contextProvider";

export const SecondSection = () => {
  const skill = ["Front-End", "Back-End", "Version Control", "Shell Scripting"];
  const [hint, setHint] = useState("Front-End");
  const [activeSkill, setActiveSkill] = useState("Front-End");
  const { selectedLanguage } = useContext(MyContext);
  const programe = {
    "Front-End": [
      [
        <p className={`flex gap-3 ${selectedLanguage == 'ar' ? 'flex-row-reverse' : ''}`}>
          <span className="font-bold">HTML:</span>{" "}
          <TransText
            fr="Maîtriser les blocs de construction du web. Apprenez à structurer efficacement votre contenu."
            en="Master the building blocks of
          the web. Learn to structure your content effectively."
            ar="إتقان اللبنات الأساسية للويب. تعلم كيفية بناء المحتوى الخاص بك بشكل فعال "
          />
        </p>,
        <p className={`flex gap-3  ${selectedLanguage == 'ar' ? 'flex-row-reverse ' : ''}`}>
          <span className="font-bold">CSS:</span> .
          <TransText
            fr="Appliquez des styles à vos pages web avec précision. Comprenez les techniques de mise en page, la conception adaptative et les frameworks CSS modernes"
            en="Style your web pages with precision. Understand layout techniques, responsive design, and modern CSS frameworks"
            ar="الحديثة CSS صمم صفحات الويب الخاصة بك بدقة تفهّم تقنيات التخطيط والتصميم المتجاوب وإطارات"
          />
        </p>,
        <p className={`flex gap-3  ${selectedLanguage == 'ar' ? 'flex-row-reverse ' : ''}`}>
          <span className="font-bold">JavaScript:</span>
          <TransText
            fr="Donnez vie à vos pages web grâce à l'interactivité. Apprenez les concepts JavaScript de base et la manipulation du DOM"
            en="Bring your web pages to life with interactivity. Learn core JavaScript concepts and how to manipulate the DOM."
            ar="  DOM وكيفية معالجة  JavaScriptأضف الحيوية إلى صفحات الويب الخاصة بك من خلال التفاعلية. تعلم المفاهيم الأساسية لـ "
          />
        </p>,
        <p className={`flex gap-3  ${selectedLanguage == 'ar' ? 'flex-row-reverse ' : ''}`}>
          <span className="font-bold">React:</span>
          <TransText
            fr="Plongez dans l'une des bibliothèques JavaScript les plus populaires pour la création d'interfaces utilisateur. Apprenez l'architecture basée sur les composants et la gestion d'état."
            en="Dive into one of the most popular JavaScript libraries for building user interfaces. Learn component-based architecture and state management."
            ar=" JavaScript شيوعًا لبناء واجهات المستخدم. تعلم بنية المكونات وإدارة الحالة.تعمق في واحدة من أكثر مكتبات"
          />
        </p>,
      ],
      { en: "Front-End", ar: "الواجهة الأمامية", fr: "Front-End" },
      [htmlLogo, cssLogo, jsLogo, reactLogo],
    ],
    "Back-End": [
      [
        <p className={`flex gap-3 ${selectedLanguage == 'ar' ? 'flex-row-reverse ' : ''}`}>
          <span className="font-bold ">Laravel : </span>
          <TransText
            fr="Familiarisez-vous avec ce puissant framework PHP. Apprenez à construire des applications côté serveur robustes et évolutives, à gérer des bases de données et à créer des API RESTful"
            en="Get hands-on with this powerful PHP framework. Learn to build robust and scalable server-side applications, manage databases, and create RESTful APIs."
            ar="اكتسب خبرة عملية مع إطار PHP القوي هذا. تعلم كيفية بناء تطبيقات قوية وقابلة للتوسيع على جانب الخادم, وإدارة قواعد البيانات, وإنشاء واجهات برمجة تطبيقات RESTful"
          />
        </p>,
      ],
      { en: "Back-End", ar: "الواجهة الخلفية", fr: "Back-End" },
      [phpLogo, laravel],
    ],
    "Version Control": [
      [
        <p className={`flex gap-3 ${selectedLanguage == 'ar' ? 'flex-row-reverse ' : ''}`}>
          <span className="font-bold"> Git:</span>
          <TransText
            fr="Comprendre les notions essentielles du contrôle de version. Apprenez à suivre les modifications de votre base de code, à collaborer avec d'autres et à gérer les versions de projet"
            en="Understand the essentials of version control. Learn how to track changes in your codebase, collaborate with others, and manage project versions."
            ar="فهم أساسيات مراقبة الإصدارات. تعلم كيفية تتبع التغييرات في قاعدة الكود الخاصة بك, والتعاون مع الآخرين, وإدارة إصدارات المشروع"
          />
        </p>,
        <p className={`flex gap-3  ${selectedLanguage == 'ar' ? 'flex-row-reverse ' : ''}`}>
          <span className="font-bold">GitHub:</span>
          <TransText
            fr="Explorez cette plateforme populaire d'hébergement et de partage de code. Apprenez à utiliser GitHub pour le contrôle de version, la collaboration et la gestion de projet"
            en="Explore this popular platform for hosting and sharing code. Learn how to use GitHub for version control, collaboration, and project management."
            ar="استكشف هذه المنصة الشهيرة لاستضافة ومشاركة الكود. تعلم كيفية استخدام GitHub لمراقبة الإصدارات, والتعاون, وإدارة المشروع"
          />
        </p>,
      ],
      { en: "Version Control", ar: "التحكم في الإصدار", fr: "Version Control" },
      [gitLogo, githubLogo],
    ],
    "Shell Scripting": [
      [
        <p className={`flex gap-3  ${selectedLanguage == 'ar' ? 'flex-row-reverse ' : ''}`}>
          <span className="font-bold">Shell Scripting : </span>
          <TransText
            fr="Automatisez des tâches et améliorez votre workflow. Apprenez les bases du scripting shell, les outils en ligne de commande et comment écrire des scripts pour exécuter efficacement des tâches répétitives."
            en="Automate tasks and improve your workflow. Learn the basics of shell scripting, command-line tools, and how to write scripts to perform repetitive tasks efficiently."
            ar="أتمتة المهام وتحسين سير العمل الخاص بك. تعلم أساسيات كتابة نصوص الأوامر, وأدوات سطر الأوامر, وكيفية كتابة نصوص لتنفيذ المهام المتكررة بكفاءة  "
          />
        </p>,
      ],
      {
        en: "Shell Scripting",
        ar: "كتابة نصوص الأوامر",
        fr: "Shell Scripting",
      },
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
        <h1 className="text-5xl font-bold">
          <TransText fr="Programme" en="Program" ar="البرنامج" />
        </h1>
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
                className={`bg-white cursor-pointer p-3 pl-8 text-3xl flex justify-between items-center ${selectedLanguage === 'ar' ? 'text-right lg:flex-row-reverse': ''}`}
              >
                <h1 className={`flex gap-3 ${selectedLanguage === 'ar' ? 'text-right lg:flex-row-reverse': ''}`}>
                  <span className={`${activeSkill === element ? "text-alpha" : "" } font-bold`}>  {index + 1} </span> 
                  <span className={`${activeSkill === element ? "text-alpha" : "" } font-bold`}> {TransText(programe[element][1])} </span>
                </h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class={`lg:rotate-0 ${
                    activeSkill === element ? "stroke-alpha" : ""
                  } ${element === hint ? "rotate-90" : ""} ${selectedLanguage === 'ar' ? 'lg:-rotate-180': ''} size-5 font-bold`}
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
            } -top-6 opacity-5  `}
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
