import { useEffect, useState } from "react";
import { useAppContext } from "../../utils/contextProvider";
import axios from "axios";
import Modal from "../../components/Modal";
import LoadingPage from "../Loading";
import TransText from "../../components/TransText.tsx";

const InfoSession = () => {
  const { selectedLanguage, URL, sessions,darkMode } = useAppContext();
  const [chosenSession, setChosenSession] = useState("");
  const [sending, setSending] = useState(false);
  const [validate, setValidate] = useState(false);
  const [confirmation, setConfirmation] = useState(false);
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");
  const [pref, setPref] = useState("");
  const [error, setError] = useState("");
  const [emailError, setEmailError] = useState(false);

  const dateLanguage = {
    en: "US",
    fr: "FR",
    ar: "AR",
  };

  const [motivation, setMotivation] = useState("");
  const [source, setSource] = useState("");
  const formFields = [
    { name: "full_name", label: "Full Name", type: "text" },
    { name: "email", label: "Email", type: "email" },
    { name: "birthday", label: "Birthday", type: "date" },
    { name: "phone", label: "Phone", type: "tel" },
  ];

  const initialState = formFields.reduce((acc, field) => {
    acc[field.name] = "";
    return acc;
  }, {});

  const [formData, setFormData] = useState(initialState);
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmailError(false);
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (motivation && motivation.length < 150) {
      alert("Please Write 150 Characters in Your Motivation");
    } else {
      window.scrollTo(0, 0);
      setSending(true);
      const allData = {
        ...formData,
        info_session_id: chosenSession,
        motivation: motivation,
        source: source,
        gender: gender,
        city: city,
        prefecture: pref,
      };

      const newForm = new FormData();
      Object.keys(allData).forEach((key) => {
        newForm.append(key, allData[key]);
      });

      axios
        .post(URL + "participate", newForm)
        .then((res) => {
          setSending(false);
          if (res.data.status === 69) {
            setEmailError(true);
            return;
          }
          setFormData(initialState);
          setMotivation("");
          setConfirmation(true);
          if (res.status === 200) {
            setValidate(true);
          } else {
            setValidate(false);
          }
        })
        .catch((err) => {
          console.log(err);
          setError(err);
        });
    }
  };

  useEffect(() => {
    if (error) {
      setFormData(initialState);
      setValidate(false);
      setSending(false);
      setConfirmation(true);
    }
    return () => {
      setError("");
    };
  }, [error]);

  const Required = () => {
    return <span className="text-lg font-bold text-red-500">*</span>;
  };

  function formatDate(dateString) {
    const date = new Date(dateString);

    // Get formatted date: Monday 20 novembre 2024
    const formattedDate = date.toLocaleDateString(
      `${selectedLanguage}-${dateLanguage[selectedLanguage]}`,
      {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }
    );

    // Get formatted time: 16:49
    const formattedTime = date.toLocaleTimeString("fr-FR", {
      hour: "2-digit",
      minute: "2-digit",
    });

    return `${formattedDate} ${formattedTime}`;
  }

  const today = chosenSession
    ? new Date(sessions?.find((s) => s.id == chosenSession)?.start_date)
    : new Date();
  const maxDate = new Date(
    today.getFullYear() - 18,
    today.getMonth(),
    today.getDate()
  );
  const minDate = new Date(
    today.getFullYear() - 30,
    today.getMonth(),
    today.getDate()
  );
  // Format dates as YYYY-MM-DD
  const maxDateString = maxDate.toISOString().split("T")[0];
  const minDateString = minDate.toISOString().split("T")[0];

  return (
    <div
      className={`px-4 pt-24 lg:px-16 lg:pt-28 overflow-hidden ${darkMode ? "bg-[#0f0f0f]":"bg-white"}`}
      dir={selectedLanguage === "ar" ? "rtl" : "ltr"}
    >
      {!sending ? (
        <>
          <h1 className={`font-semibold pb-2 text-2xl tracking-wide ${darkMode ? "text-white":"text-black"}`}>
            Sign Up to Start Your Adventure with Us
          </h1>

          {sessions && sessions.length > 0 && (
            <form
              onSubmit={handleSubmit}
              className={`mx-auto p-6  rounded-lg shadow-md space-y-4 ${darkMode ? "bg-[#212529]":"bg-white"}`}
            >
              <div className={`flex flex-col space-y-2 `}>
                <label htmlFor="sessions" className={` ${darkMode ? "text-white":"text-gray-700"} `}>
                  Choose a Session: <Required />
                </label>
                <select
                  name="sessions"
                  id="sessions"
                  value={chosenSession}
                  onChange={(e) => {
                    setChosenSession(e.target.value);
                  }}
                  className="w-full rounded border border-gray-300 px-4 py-2"
                  required
                >
                  <option value="">Choose a Session</option>
                  {sessions.map(
                    (opt, ind) =>
                      opt.isAvailable && (
                        <option key={ind} className="text-lg" value={opt.id}>
                          {opt.formation} {opt.name}{" "}
                          {formatDate(opt.start_date)}
                        </option>
                      )
                  )}
                </select>
              </div>

              <div className="flex flex-wrap gap-1">
                {formFields.map((field) => (
                  <div
                      key={field.name}
                      className="flex flex-col space-y-2 w-full sm:w-[49.7%]"
                    >
                      <label
                        htmlFor={field.name}
                        className={`${darkMode ? "text-white" : "text-gray-700"}`}
                      >
                        {field.label}: <Required />
                      </label>
                      <input
                        type={field.type}
                        id={field.name}
                        name={field.name}
                        min={minDateString}
                        max={maxDateString}
                        placeholder={field.label + "..."}
                        value={formData[field.name]}
                        onChange={handleChange}
                        className={`px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-beta ${
                          emailError && field.name === "email"
                            ? "text-red-500 border-red-500"
                            : "border-gray-300 text-black"
                        }`}
                        required
                      />
                      {emailError && field.name === "email" && (
                        <span className="text-red-500 text-sm">
                          The email is already exist
                        </span>
                      )}
                  </div>

                ))}

                <div className="flex flex-col space-y-2 w-full sm:w-[49.7%] ">
                  <label htmlFor="city" className={` ${darkMode ? "text-white":"text-gray-700"} `}>
                    City: <Required />
                  </label>
                  <select
                    name="city"
                    id="city"
                    onChange={(e) => {
                      setCity(e.target.value);
                    }}
                    value={city}
                    className="w-full rounded border border-gray-300 px-4 py-[11px]"
                    required
                  >
                    <option value="" defaultValue={""} disabled>
                      City
                    </option>
                    <option value="casablanca">Casablanca</option>
                    <option value="mohammedia">Mohammedia</option>
                    <option value="other">
                      <TransText en="Other" fr="Autres" ar="اخر" />
                    </option>
                  </select>
                </div>

                <div className="flex flex-col space-y-2 w-full sm:w-[49.7%]">
                  <label htmlFor="prefecture" className={` ${darkMode ? "text-white":"text-gray-700"} `}>
                    Prefecture: <Required />
                  </label>
                  <select
                    name="prefecture"
                    value={pref}
                    id="prefecture"
                    onChange={(e) => {
                      setPref(e.target.value);
                    }}
                    className="w-full rounded border border-gray-300 px-4 py-[11px]"
                    required
                  >
                    <option value="" defaultValue={""} disabled>
                      Prefecture
                    </option>
                    <option value="none">None</option>
                    {[
                      "Casablanca Anfa",
                      "Sidi Bernoussi",
                      "Ain Sbaa Hay Mohammedi",
                      "Al Fida Mers Sultan",
                      "Moulay Rachid",
                      "Ain Chock",
                      "Ben M'Sick Sidi Othmane",
                      "Hay Hassani",
                    ].map((el, ind) => (
                      <option
                        key={ind}
                        value={el.toLowerCase().replace(/ /g, "_")}
                      >
                        {el}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col space-y-2 w-full sm:w-[49.7%]">
                  <label htmlFor="gender" className={` ${darkMode ? "text-white":"text-gray-700"} `}>
                    <TransText en="Gender" fr="Genre" ar="الجنس" />
                    <Required />
                  </label>
                  <select
                    name="gender"
                    id="gender"
                    onChange={(e) => {
                      setGender(e.target.value);
                    }}
                    className="w-full rounded border border-gray-300 px-4 py-[11px]"
                    required
                  >
                    <option value="" defaultValue={""} disabled>
                      Gender
                    </option>
                    <option value="male">
                      <TransText en="Male" fr="Homme" ar="ذكر" />
                    </option>
                    <option value="female">
                      <TransText en="Female" fr="Female" ar="أنثى" />
                    </option>
                  </select>
                </div>

                <div className="flex flex-col space-y-2 w-full sm:w-[49.7%]">
                  <label htmlFor="source" className={`${darkMode ? "text-white":"text-black"} `}>
                    Where Have you Heard of LionsGeek: <Required />
                  </label>
                  <input
                    type="text"
                    value={source}
                    name="source"
                    id="source"
                    placeholder="Source..."
                    onChange={(e) => {
                      setSource(e.target.value);
                    }}
                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-beta"
                    required
                  />
                </div>

                <div className="flex flex-col space-y-2 w-full">
                  <label htmlFor="motivation" className={`${darkMode ? "text-white":"text-black"} `}>
                    Motivation:
                    <Required />
                    <span
                      className={`text-sm ${
                        motivation.length < 150
                          ? "text-red-600"
                          : "text-green-500"
                      } ${darkMode ? "text-white":"text-gray-700"} `}
                    >
                      {" "}
                      {motivation.length}/150
                    </span>
                  </label>
                  <textarea
                    name="motivation"
                    id="motivation"
                    className="border border-gray-400 rounded p-[6px]"
                    onChange={(e) => setMotivation(e.target.value)}
                    placeholder="Motivation"
                    value={motivation}
                  ></textarea>
                </div>
              </div>
              <div className="mt-4">
                <button
                  type="submit"
                  disabled={sending}
                  className={`w-full py-2 px-4 bg-alpha font-semibold rounded-md ${darkMode ? "hover:bg-[#2d343a]":"hover:bg-[#212529]"} hover:text-alpha focus:outline-none`}
                >
                  Submit
                </button>
              </div>
            </form>
          )}
        </>
      ) : (
        <LoadingPage load={true} />
      )}
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

export default InfoSession;
