import React, { useState } from "react";
import { useAppContext } from "../../../utils/contextProvider";
import axios from "axios";
import { TransText } from "../../../components";

const ApplicationForm = () => {
  const { URL, selectedLanguage } = useAppContext();
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

  const handleSubmit = async (e) => {
    e.preventDefault();
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
      .then(() => {
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
      })
      .catch((err) => {
        console.log("coworking form", err);
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
    domain &&
    (reasons.includes("other") ? otherReasons.trim() : true) &&
    (domain.includes("other") ? otherDom.trim() : true);

  return (
    <div
      className="px-4 pt-24 lg:px-16 lg:pt-28 overflow-hidden"
      dir={selectedLanguage === "ar" ? "rtl" : "ltr"}
    >
      <form
        onSubmit={handleSubmit}
        className="p-6 bg-gray-50/50 rounded-lg shadow-md mb-4"
      >
        <h1 className="text-2xl font-bold mb-4">Application Form</h1>

        <h2 className="underline font-semibold mb-2 text-lg">
          Personal Information
        </h2>
        <div className="flex items-center flex-col lg:flex-row justify-around gap-2">
          <div className="mb-4 w-full">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="full_name"
            >
              <TransText en="Full Name" fr="Nom Complet" ar="الاسم الكامل" />
              <Required />
            </label>
            <input
              type="text"
              name="full_name"
              value={formInfo.full_name}
              onChange={handleChange}
              className="shadow border rounded w-full py-2 px-3 text-gray-700 fo focus:outline-beta"
              required
            />
          </div>

          <div className="mb-4 w-full">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              <TransText en="Email" fr="Email" ar="البريد الإلكتروني" />
              <Required />
            </label>
            <input
              type="email"
              name="email"
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
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phone"
            >
              <TransText en="Phone" fr="Téléphone" ar="الهاتف" />
              <Required />
            </label>
            <input
              type="text"
              name="phone"
              value={formInfo.phone}
              onChange={handleChange}
              className="shadow border rounded w-full py-2 px-3 text-gray-700 fo focus:outline-beta"
              required
            />
          </div>

          <div className="mb-4 w-full">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
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
              className="block text-gray-700 text-sm font-bold mb-2"
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
              value={formInfo.formation}
              onChange={handleChange}
              className="shadow border rounded w-full p-3 text-gray-700 fo focus:outline-beta"
              required
            />
          </div>

          <div className="mb-6 w-full">
            <p className="mb-3 text-sm font-bold">
              <TransText
                en="Upload CV"
                fr="Télécharger le CV"
                ar="رفع السيرة الذاتية"
              />{" "}
              <Required />
            </p>
            <label
              htmlFor="cv"
              className={`flex items-center gap-2  border shadow p-[11px] rounded cursor-pointer ${
                cv ? "bg-alpha" : "bg-white"
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

        <div className="flex flex-col mb-6 w-[48%]">
          <label htmlFor="gender" className="text-gray-700">
            Gender: <Required />
          </label>
          <select
            name="gender"
            id="gender"
            onChange={(e) => {
              setGender(e.target.value);
            }}
            className="w-full rounded border border-gray-300 p-[10px]"
            required
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        {/* Project Informtation */}
        <h1 className="underline font-semibold mb-2 text-lg">
          <TransText
            en="Project Information"
            fr="Informations sur le projet"
            ar="معلومات المشروع"
          />
        </h1>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="proj_name"
          >
            <TransText en="Project Name" fr="Nom du Project" ar="اسم المشروع" />{" "}
            <Required />
          </label>
          <input
            type="text"
            name="proj_name"
            value={formInfo.proj_name}
            onChange={handleChange}
            className="shadow border rounded w-full py-2 px-3 text-gray-700 fo focus:outline-beta"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
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
            value={formInfo.proj_desc}
            onChange={handleChange}
            className="shadow border rounded w-full py-2 px-3 text-gray-700 fo focus:outline-beta"
            required
          />
        </div>

        <fieldset className="mb-4">
          <legend className="block text-gray-700 text-sm font-bold mb-2">
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
              <span className="m-2">{option.label}</span>
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
            className="block text-gray-700 text-sm font-bold mb-2"
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
            value={formInfo.proj_plan}
            onChange={handleChange}
            className="shadow border rounded w-full py-2 px-3 text-gray-700 fo focus:outline-beta"
            required
          />
        </div>

        <div className="mb-6 w-full">
          <p className="mb-3 text-sm font-bold">
            <TransText
              en="Upload Project Presentation"
              fr="Télécharger la Présentation du Projet"
              ar="رفع عرض المشروع"
            />
            <Required />
          </p>
          <label
            htmlFor="projPresentation"
            className={`flex items-center gap-2  border border-gray p-2 rounded cursor-pointer ${
              projPresentation ? "bg-alpha" : "bg-white"
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
            className="block text-gray-700 text-sm font-bold mb-2"
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
            value={formInfo.prev_proj}
            onChange={handleChange}
            className="shadow border rounded w-full py-2 px-3 text-gray-700 fo focus:outline-beta"
          />
        </div>

        <fieldset className="mb-4">
          <legend className="block text-gray-700 text-sm font-bold mb-2">
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
              <span className="m-2">{option.label}</span>
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
          <legend className="block text-gray-700 text-sm font-bold mb-2">
            <TransText ar="احتياجاتك" en="Needs" fr="Besoins" />
          </legend>
          {workspaceOptions.map((option) => (
            <div className="m-2" key={option.value}>
              <label>
                <input
                  type="radio"
                  className="mr-1"
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
              className="shadow border rounded w-full py-2 px-3 text-gray-700 fo focus:outline-beta"
            />
          )}
        </fieldset>

        <button
          disabled={!isFormComplete}
          className={`w-full py-3 rounded transition-all ${
            isFormComplete
              ? "bg-black text-white "
              : "bg-gray-300 text-black/60"
          }`}
          type="submit"
        >
          {false ? (
            <div role="status" className="flex items-center justify-center">
              <svg
                aria-hidden="true"
                className="w-8 h-8 text-gray-200 animate-spin fill-[#fee819]"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            </div>
          ) : (
            <>Submit Form</>
          )}
        </button>
      </form>
    </div>
  );
};

export default ApplicationForm;
