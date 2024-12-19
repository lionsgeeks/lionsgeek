import React, { useState } from "react";
import { useAppContext } from "../../../utils/contextProvider";
import axios from "axios";
import { TransText } from "../../../components";
import Modal from "../../../components/Modal";
import LoadingPage from "../../Loading";

const ApplicationForm = () => {
  const { URL, selectedLanguage , darkMode } = useAppContext();
  const [cv, setCV] = useState(null);
  const [projPresentation, setProjectPresentation] = useState(null);

  const [gender, setGender] = useState("");

  const [domain, setDomain] = useState([]);
  const [otherDom, setOtherDom] = useState("");
  const [reasons, setReasons] = useState([]);
  const [otherReasons, setOtherReasons] = useState("");
  const [needs, setNeeds] = useState([]);
  const [otherNeeds, setOtherNeeds] = useState("");

  const [formInfo, setFormInfo] = useState({
    full_name: "",
    email: "",
    phone: "",
    birthday: "",
    formation: "",
    proj_name: "",
    proj_desc: "",
    proj_plan: "",
    prev_proj: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInfo({ ...formInfo, [name]: value });
  };

  const handleCheckboxChange = (e, setter) => {
    const value = e.target.value;
    if (e.target.checked) {
      setter((prev) => [...prev, value]);
    } else {
      setter((prev) => prev.filter((item) => item !== value));
    }
  };

  const handleFileChange = (e, setter) => {
    setter(e.target.files[0]);
  };

  const [sending, setSending] = useState(false);
  const [validate, setValidate] = useState(false);
  const [confirmation, setConfirmation] = useState(false);
  const [error, setError] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    const allData = {
      ...formInfo,
      cv: cv,
      presentation: projPresentation,
      domain: domain + otherDom,
      reasons: reasons + otherReasons,
      needs: needs + otherNeeds,
      gender: gender,
    };

    const newForm = new FormData();
    Object.keys(allData).forEach((key) => {
      newForm.append(key, allData[key]);
    });

    axios
      .post(URL + "cowork", newForm)
      .then((res) => {
        setFormInfo({
          full_name: "",
          email: "",
          phone: "",
          birthday: "",
          formation: "",
          proj_name: "",
          proj_desc: "",
          proj_plan: "",
          prev_proj: "",
        });
        setCV("");
        setProjectPresentation("");
        setDomain("");
        setOtherDom("");
        setReasons("");
        setOtherReasons("");
        setNeeds("");
        setOtherNeeds("");
        setConfirmation(true);
        setSending(false);
        if (res.status === 200) {
          setValidate(true);
        } else {
          setValidate(false);
        }
      })
      .catch((err) => {
        console.log("coworking form", err);
        setError(err);
      });

  };

  const domainOptions = [
    {
      label: <TransText fr="Audiovisuel" ar="سمعي بصري" en="Audiovisual" />,
      value: "audio-visuel",
    },
    {
      label: (
        <TransText
          fr="Création de contenu digital"
          ar="إنشاء محتوى رقمي"
          en="Digital Content Creation"
        />
      ),
      value: "content-creation",
    },
    {
      label: <TransText fr="Photographie" ar="التصوير" en="Photography" />,
      value: "photography",
    },
    {
      label: (
        <TransText
          fr="Création de site Web"
          ar="إنشاء مواقع إلكترونية"
          en="Web Creation"
        />
      ),
      value: "web-creation",
    },
    {
      label: (
        <TransText fr="Application web" ar="تطبيق الويب" en="Web Application" />
      ),
      value: "web-app",
    },
    { label: <TransText ar="أخرى" en="Other" fr="Autre" />, value: "other" },
  ];

  const sourceOptions = [
    {
      label: (
        <TransText
          fr="J'ai vu une annonce sur les réseaux sociaux"
          ar="رأيت إعلانا على الشبكات الاجتماعية"
          en="I saw an ad on social media"
        />
      ),
      value: "social-media",
    },
    {
      label: (
        <TransText
          fr="J'ai reçu une invitation par email"
          ar="استلمت دعوة عبر البريد الإلكتروني"
          en="I received an invitation via email"
        />
      ),
      value: "email-invitation",
    },
    {
      label: (
        <TransText
          fr="Quelqu'un m'en a parlé personnellement"
          ar="أخبرني شخص ما عن ذلك شخصياً"
          en="Someone told me about it personally"
        />
      ),
      value: "personal-recommendation",
    },
    {
      label: (
        <TransText
          fr="J'ai lu un article dans un magazine ou un journal"
          ar="قرأت مقالة في مجلة أو جريدة"
          en="I read an article in a magazine or newspaper"
        />
      ),
      value: "magazine-article",
    },
    {
      label: (
        <TransText
          fr="J'ai vu une affiche ou une publicité dans la rue"
          ar="رأيت إعلاما أو إعلانا في الشارع"
          en="I saw a poster or advertisement on the street"
        />
      ),
      value: "street-advertisement",
    },
    {
      label: (
        <TransText
          fr="J'ai trouvé l'information en effectuant une recherche en ligne"
          ar="وجدت المعلومات عند البحث عبر الإنترنت"
          en="I found the information by searching online"
        />
      ),
      value: "online-search",
    },
    { label: <TransText ar="أخرى" en="Other" fr="Autre" />, value: "other" },
  ];

  const workspaceOptions = [
    {
      label: (
        <TransText
          fr="1 seul post de travail"
          ar="1 محطة عمل واحدة"
          en="Single Workstation"
        />
      ),
      value: "single-workstation",
    },
    {
      label: (
        <TransText
          fr="Un espace de travail pour 2/3 personnes"
          ar="مساحة عمل لـ 2/3 أشخاص"
          en="Workspace for 2/3 People"
        />
      ),
      value: "workspace2_3",
    },
    {
      label: (
        <TransText
          fr="Studio de tournage / Podcast"
          ar="استوديو تصوير / بودكاست"
          en="Filming Studio / Podcast"
        />
      ),
      value: "studio",
    },
    {
      label: (
        <TransText
          fr="Salle de réunion"
          ar="قاعة الإجتماعات"
          en="Meeting Room"
        />
      ),
      value: "meeting-room",
    },
    { label: <TransText ar="أخرى" en="Other" fr="Autre" />, value: "other" },
  ];

  const Required = () => {
    return (
      <>
        <span className="text-red-600 text-lg"> *</span>
      </>
    );
  };

  const isFormComplete =
    Object.keys(formInfo)
      .filter((key) => key !== "prev_proj")
      .every((key) => formInfo[key].trim() !== "") &&
    gender &&
    reasons &&
    domain && cv && projPresentation &&
    (reasons.includes("other") ? otherReasons.trim() : true) &&
    (domain.includes("other") ? otherDom.trim() : true);

  return (
    <div
      className={`px-4 pt-24 lg:px-16 lg:pt-28 overflow-hidden ${darkMode ? "bg-[#0f0f0f]" : ""}`}
      dir={selectedLanguage === "ar" ? "rtl" : "ltr"}
    >

      {
        !sending ?
          <form
            onSubmit={handleSubmit}
            className={`p-6  rounded-lg shadow-md mb-4 ${darkMode ? "bg-[#212529]" : "bg-gray-50/50"}  `} 
          >
            <h1 className={`text-2xl font-bold mb-4 ${darkMode ? "text-white" : ""}`}>Application Form</h1>

            <h2 className={`underline font-semibold mb-2 text-lg ${darkMode ? "text-white" : ""}`}>
              Personal Information
            </h2>
            <div className="flex items-center flex-col lg:flex-row justify-around gap-2">
              <div className="mb-4 w-full">
                <label
                  className={`block text-sm font-bold mb-2 ${darkMode ? "text-white" : "text-gray-700"}`}
                  htmlFor="full_name"
                >
                  <TransText en="Full Name" fr="Nom Complet" ar="الاسم الكامل" />
                  <Required />
                </label>
                <input
                  type="text"
                  name="full_name"
                  placeholder={
                    selectedLanguage === "en" ? "Enter Your Full Name" :
                    selectedLanguage === "fr" ? "Entrez votre nom complet" :
                    "أدخل اسمك الكامل"}
                  value={formInfo.full_name}
                  onChange={handleChange}
                  className={`shadow border rounded w-full py-2 px-3 text-gray-700 fo focus:outline-beta `}
                  required
                />
              </div>

              <div className="mb-4 w-full">
                <label
                  className={`block text-sm font-bold mb-2 ${darkMode ? "text-white" : "text-gray-700"}`}
                  htmlFor="email"
                >
                  <TransText en="Email" fr="Email" ar="البريد الإلكتروني" />
                  <Required />
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder={
                    selectedLanguage === "en" ? "Enter Your Email" :
                    selectedLanguage === "fr" ? "Entrez votre email" :
                    "أدخل بريدك الإلكتروني  "}
                  value={formInfo.email}
                  onChange={handleChange}
                  className="shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-beta"
                  required
                />
              </div>
            </div>

            <div className="flex items-center flex-col lg:flex-row justify-around gap-2">
              <div className="mb-4 w-full">
                <label
                  className={`block text-sm font-bold mb-2 ${darkMode ? "text-white" : "text-gray-700"}`}
                  htmlFor="phone"
                >
                  <TransText en="Phone" fr="Téléphone" ar="الهاتف" />
                  <Required />
                </label>
                <input
                  type="text"
                  name="phone"
                  placeholder={
                    selectedLanguage === "en" ? "Enter Your Phone" :
                    selectedLanguage === "fr" ? "Entrez votre téléphone" :
                    "أدخل رقم هاتفك"}
                  value={formInfo.phone}
                  onChange={handleChange}
                  className="shadow border rounded w-full py-2 px-3 text-gray-700 fo focus:outline-beta"
                  required
                />
              </div>

              <div className="mb-4 w-full">
                <label
                  className={`block text-sm font-bold mb-2 ${darkMode ? "text-white" : "text-gray-700"}`}
                  htmlFor="birthday"
                >
                  <TransText
                    en="Date of Birth"
                    fr="Date de Naissance"
                    ar="تاريخ الإزدياد"
                  />
                  <Required />
                </label>
                <input
                  type="date"
                  name="birthday"
                  value={formInfo.birthday}
                  onChange={handleChange}
                  className="shadow border rounded w-full py-2 px-3 text-gray-700 fo focus:outline-beta"
                  required
                />
              </div>
            </div>

            <div className="flex items-center flex-col lg:flex-row justify-around gap-2">
              <div className="mb-4 w-full">
                <label
                  className={`block text-sm font-bold mb-2 ${darkMode ? "text-white" : "text-gray-700"}`}
                  htmlFor="formation"
                >
                  <TransText
                    en="Education/Professional Experience (brief description)"
                    fr="Formation/Expérience professionnelle (bref descriptif)"
                    ar="التعليم/الخبرة المهنية (وصف مختصر)"
                  />
                  <Required />
                </label>
                <input
                  type="text"
                  name="formation"
                  placeholder={
                    selectedLanguage === "en" ? "Education/Professional" :
                    selectedLanguage === "fr" ? "Formation/Expérience" :
                    "التعليم/الخبرة المهنية"}
                  value={formInfo.formation}
                  onChange={handleChange}
                  className="shadow border rounded w-full p-3 text-gray-700 fo focus:outline-beta"
                  required
                />
              </div>

              <div className="mb-6 w-full">
                <p className={`mb-3 text-sm font-bold ${darkMode ? "text-white" : ""}`}>
                  <TransText
                    className = {`${darkMode ? "text-white" : ""}`}
                    en="Upload CV"
                    fr="Télécharger le CV"
                    ar="رفع السيرة الذاتية"
                  />{" "}
                  <Required />
                </p>
                <label
                  htmlFor="cv"
                  className={`flex items-center gap-2  border shadow p-[11px] rounded cursor-pointer ${cv ? "bg-alpha" : "bg-white"
                    }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
                    />
                  </svg>

                  <span className="text-sm font-medium">
                    <TransText
                    className = {`${darkMode ? "text-white" : ""}`}
                      en="Upload CV"
                      fr="Télécharger le CV"
                      ar="رفع السيرة الذاتية"
                    />
                  </span>
                  <Required />
                </label>

                <input
                  type="file"
                  id="cv"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => handleFileChange(e, setCV)}
                  className="hidden"
                />
              </div>
            </div>

            <div className="flex flex-col mb-6 lg:w-[48%]">
              <label htmlFor="gender" className={`${darkMode ? "text-white" : "text-gray-700"}`}>
              <TransText en="Gender" fr="Genre" ar="الجنس" />:
              <Required />
              </label>
              <select
                name="gender"
                id="gender"
                onChange={(e) => {
                  setGender(e.target.value);
                }}
                className={`w-full rounded border border-gray-300 p-[10px] `}
                required
              >
                <option value="" disabled selected>                  
                  <TransText en="Select Gender" fr="Sélectionnez le sexe" ar="حدد الجنس" />
                </option>
                <option value="male">
                  <TransText en="Male" fr="Homme" ar="ذكر" />
                </option>
                <option value="female">
                  <TransText en="Female" fr="Female" ar="أنثى"  />
                </option>
              </select>
            </div>

            {/* Project Informtation */}
            <h1 className={`${darkMode && "text-white"} underline font-semibold mb-2 text-lg`}>
              <TransText
                en="Project Information"
                fr="Informations sur le projet"
                ar="معلومات المشروع"
              />
            </h1>
            <div className="mb-4">
              <label
                className={`block text-sm font-bold mb-2 ${darkMode ? "text-white" : "text-gray-700"}`}
                htmlFor="proj_name"
              >
                <TransText en="Project Name" fr="Nom du Project" ar="اسم المشروع" />{" "}
                <Required />
              </label>
              <input
                type="text"
                name="proj_name"
                placeholder={
                  selectedLanguage === "en" ? "Enter Project Name" :
                  selectedLanguage === "fr" ? "Entrez le nom du projet" :
                  "أدخل اسم المشروع"}
                value={formInfo.proj_name}
                onChange={handleChange}
                className="shadow border rounded w-full py-2 px-3 text-gray-700 fo focus:outline-beta"
                required
              />
            </div>

            <div className="mb-4">
              <label
                className={`block text-sm font-bold mb-2 ${darkMode ? "text-white" : "text-gray-700"}`}
                htmlFor="proj_desc"
              >
                <TransText
                  fr="Project Description"
                  en="Project Description"
                  ar="وصف المشروع"
                />{" "}
                <Required />
              </label>
              <textarea
                name="proj_desc"
                placeholder={
                  selectedLanguage === "en" ? "Enter Project Description" :
                  selectedLanguage === "fr" ? "Entrez le description du projet" :
                  "أدخل وصف المشروع"}
                value={formInfo.proj_desc}
                onChange={handleChange}
                className="shadow border rounded w-full py-2 px-3 text-gray-700 fo focus:outline-beta"
                required
              />
            </div>

            <fieldset className="mb-4">
              <legend className={`block text-sm font-bold mb-2 ${darkMode ? "text-white" : "text-gray-700"}`}>
                <TransText
                  en="Project's domain of activity"
                  fr="Domaine d'activité du projet"
                  ar="مجال عمل المشروع "
                />
                <Required />
              </legend>
              {domainOptions.map((option) => (
                <label className="inline-flex items-center m-2" key={option.value}>
                  <input
                    type="checkbox"
                    value={option.value}
                    checked={domain.includes(option.value)}
                    onChange={(e) => {
                      handleCheckboxChange(e, setDomain);
                    }}
                    className="form-checkbox"
                  />
                  <span className={`m-2 ${darkMode ? "text-white" : ""}`}>{option.label}</span>
                </label>
              ))}

              {domain.includes("other") && (
                <input
                  type="text"
                  placeholder="Other..."
                  value={otherDom}
                  required
                  onChange={(e) => setOtherDom(e.target.value)}
                  className="shadow border rounded w-full py-2 px-3 text-gray-700 fo focus:outline-beta"
                />
              )}
            </fieldset>

            <div className="mb-4">
              <label
                className={`block text-sm font-bold mb-2 ${darkMode ? "text-white" : "text-gray-700"}`}
                htmlFor="proj_plan"
              >
                <TransText
                  en="Concrete action plan to develop the project"
                  fr="Plan d'actions concret pour le développement du projet"
                  ar="خطة عمل دقيقة لتطوير المشروع "
                />

                <Required />
              </label>
              <textarea
                name="proj_plan"
                placeholder={
                  selectedLanguage === "en" ? "Enter Action Plan" :
                  selectedLanguage === "fr" ? "Entrez plan d'actions" :
                  "أدخل خطة العمل"}
                value={formInfo.proj_plan}
                onChange={handleChange}
                className="shadow border rounded w-full py-2 px-3 text-gray-700 fo focus:outline-beta"
                required
              />
            </div>

            <div className="mb-6 w-full">
              <p className={`${darkMode && "text-white"} mb-3 text-sm font-bold`}>
                <TransText
                  en="Upload Project Presentation"
                  fr="Télécharger la Présentation du Projet"
                  ar="رفع عرض المشروع"
                />
                <Required />
              </p>
              <label
                htmlFor="projPresentation"
                className={`flex items-center gap-2  border border-gray p-2 rounded cursor-pointer ${projPresentation ? "bg-alpha" : "bg-white"
                  }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
                  />
                </svg>

                <span className="text-sm font-medium">
                  <TransText
                    en="Upload Project Presentation"
                    fr="Télécharger la Présentation du Projet"
                    ar="رفع عرض المشروع"
                  />
                </span>
                <Required />
              </label>

              <input
                type="file"
                id="projPresentation"
                accept=".pdf,.doc,.docx"
                onChange={(e) => handleFileChange(e, setProjectPresentation)}
                className="hidden"
              />
            </div>

            <div className="mb-4">
              <label
                className={`block text-sm font-bold mb-2 ${darkMode ? "text-white" : "text-gray-700"}`}
                htmlFor="proj_plan"
              >
                <TransText
                  en="Previous Similar Project?"
                  fr="Projet Précédent Similaire ?"
                  ar="مشروع مشابه سابق؟"
                />
              </label>
              <textarea
                name="prev_proj"
                placeholder={
                  selectedLanguage === "en" ? "Enter Previous Similar Project" :
                  selectedLanguage === "fr" ? "Entrez Projet Précédent Similaire" :
                  "أدخل مشروع مشابه سابق"}
                value={formInfo.prev_proj}
                onChange={handleChange}
                className="shadow border rounded w-full py-2 px-3 text-gray-700 fo focus:outline-beta"
              />
            </div>

            <fieldset className="mb-4">
              <legend className={`block text-sm font-bold mb-2 ${darkMode ? "text-white" : "text-gray-700"}`}>
                <TransText
                  ar="كيف سمعت عن فرصة السكن التعاوني في عين السبع"
                  fr="Comment avez-vous entendu parler de l' opportunité pour l'espace de coworking à Ain Sbaa"
                  en="How did you find out about the coworking opportunity in Ain Sbaa"
                />
                <Required />
              </legend>
              {sourceOptions.map((option) => (
                <label className="inline-flex items-center m-2" key={option.value}>
                  <input
                    type="checkbox"
                    value={option.value}
                    checked={reasons.includes(option.value)}
                    onChange={(e) => {
                      handleCheckboxChange(e, setReasons);
                    }}
                    className="form-checkbox"
                  />
                  <span className={`m-2 ${darkMode ? "text-white" : ""} `}>{option.label}</span>
                </label>
              ))}

              {reasons.includes("other") && (
                <input
                  type="text"
                  placeholder="Other..."
                  value={otherReasons}
                  required
                  onChange={(e) => setOtherReasons(e.target.value)}
                  className="shadow border rounded w-full py-2 px-3 text-gray-700 fo focus:outline-beta"
                />
              )}
            </fieldset>

            <fieldset className="mb-4">
              <legend className={`block text-sm font-bold mb-2 ${darkMode ? "text-white" : "text-gray-700"}`}>
                <TransText ar="احتياجاتك" en="Needs" fr="Besoins" />
              </legend>
              {workspaceOptions.map((option) => (
                <div className="m-2"  key={option.value}>
                  <label className={`${darkMode ? "text-white" : ""}`}>
                    <input
                      type="radio"
                      className={`mr-1 `}
                      value={option.value}
                      checked={needs === option.value}
                      onChange={(e) => {
                        setNeeds(e.target.value);
                      }}
                    />
                    {option.label}
                  </label>
                </div>
              ))}
              {needs === "other" && (
                <input
                  type="text"
                  placeholder="Other..."
                  value={otherNeeds}
                  required
                  onChange={(e) => setOtherNeeds(e.target.value)}
                  className={`shadow border rounded w-full py-2 px-3  fo focus:outline-beta ${darkMode ? "text-white" : "text-gray-700"}`}
                />
              )}
            </fieldset>

            <button
              disabled={!isFormComplete}
              className={`w-full py-3 rounded transition-all ${isFormComplete
                ? ` ${darkMode ? "bg-alpha " : "bg-black text-white"} `
                : "bg-gray-300 text-black/60"
                }`}
              type="submit"
            >
              <TransText en="Submit" fr="Soumettre" ar="تحميل" />
            </button>
          </form>
          :
          <LoadingPage load={true} />
      }

      {!sending && confirmation && (
        <Modal
          validate={validate}
          confirm={confirmation}
          action={
            <button
              onClick={() => {
                setConfirmation(false);
              }}
              className="px-5 py-2 font-medium bg-alpha rounded"
            >
              Close
            </button>
          }
        />
      )}
    </div>
  );
};

export default ApplicationForm;
