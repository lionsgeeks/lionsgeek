import codePic from "../../../assets/images/code.jpg";
import audioviuelPic from "../../../assets/images/audiovisuelle.jpg";
import marketingPic from "../../../assets/images/marketing.jpg";
import eventspic from "../../../assets/images/events.jpg";
import { useTranslation } from "react-i18next";
import { useAppContext } from "../../../utils/contextProvider";
import { FaChartBar, FaCode, FaTrophy, FaVideo } from "react-icons/fa";
import { TransText } from "../../../components";
import { Link } from "react-router-dom";
export const FirstSectionPro = () => {
  const { t } = useTranslation();
  const { projects, selectedLanguage, setSelectedLanguage, IMAGEURL } =
    useAppContext();
  const services = [
    {
      id: 1,
      icon: <FaCode size={25} />,
      photo: codePic,
      header: "main.lionsgeekpro.firstsection.title1",
      subHeader: "",
      descriptions: [
        {
          title: "main.lionsgeekpro.firstsection.title2",
          description: "main.lionsgeekpro.firstsection.desc1",
        },
        {
          title: "main.lionsgeekpro.firstsection.title3",
          description: "main.lionsgeekpro.firstsection.desc3",
        },
        {
          title: "main.lionsgeekpro.firstsection.title4",
          description: "main.lionsgeekpro.firstsection.desc1",
        },
      ],
    },
    {
      id: 2,
      icon: <FaVideo size={25} />,
      photo: audioviuelPic,
      header: "main.lionsgeekpro.Secondsection.title1",
      subHeader: "",
      descriptions: [
        {
          title: "main.lionsgeekpro.Secondsection.title2",
          description: "main.lionsgeekpro.Secondsection.desc1",
        },
        {
          title: "main.lionsgeekpro.Secondsection.title3",
          description: "main.lionsgeekpro.Secondsection.desc3",
        },
        {
          title: "main.lionsgeekpro.Secondsection.title4",
          description: "main.lionsgeekpro.Secondsection.desc4",
        },
        {
          title: "main.lionsgeekpro.Secondsection.title5",
          description: "main.lionsgeekpro.Secondsection.desc5",
        },
        {
          title: "main.lionsgeekpro.Secondsection.title6",
          description: "main.lionsgeekpro.Secondsection.desc6",
        },
      ],
    },
    {
      id: 3,
      icon: <FaChartBar size={25} />,
      photo: marketingPic,
      header: "main.lionsgeekpro.section3.title1",
      subHeader: "",
      descriptions: [
        {
          title: "main.lionsgeekpro.section3.title2",
          description: "main.lionsgeekpro.section3.desc1",
        },
        {
          title: "main.lionsgeekpro.section3.title3",
          description: "main.lionsgeekpro.section3.desc3",
        },
        {
          title: "main.lionsgeekpro.section3.title4",
          description: "main.lionsgeekpro.section3.desc4",
        },
        {
          title: "main.lionsgeekpro.section3.title5",
          description: "main.lionsgeekpro.section3.desc5",
        },
      ],
    },
    {
      id: 4,
      icon: <FaTrophy size={25} />,
      photo: eventspic,
      header: "main.lionsgeekpro.section4.title1",
      subHeader: "",
      descriptions: [
        {
          title: "main.lionsgeekpro.section4.title2",
          description: "main.lionsgeekpro.section4.desc1",
        },
        {
          title: "main.lionsgeekpro.section4.title3",
          description: "main.lionsgeekpro.section4.desc3",
        },
      ],
    },
  ];

  return (
    <>
      <div className="w-full lg:px-16">
        {/* hero section */}
        <div className="flex flex-col gap-4 w-full items-center py-8  self-center ">
          <h1 className="lg:text-5xl text-3xl font-bold">
            {t("main.lionsgeekpro.firstsection.first-title")}
          </h1>
          <p className="lg:text-xl py-2 font-normal lg:w-[50%] w-[95%] text-center ">
            {t("main.lionsgeekpro.header.title")}
          </p>
        </div>

        <div className="w-full  px-3  flex justify-between flex-wrap gap-3">
          {services.map((ele, idx) => (
            <div
              key={idx}
              className={`lg:w-[48%] w-full relative border-2 py-5  ${
                selectedLanguage === "ar" && "text-end"
              }  overflow-hidden rounded-xl`}
            >
              <img
              loading="lazy"
                className="absolute top-0 w-full h-full  object-cover -z-20 opacity-90"
                src={ele.photo}
                alt=""
              />
              <div className="absolute top-0 -z-10 bg-black/60 w-full h-full"></div>

              <div className="w-full flex items-center justify-between p-8">
                <div className="bg-[#e7e7e8]  rounded-lg p-3 text-alpha">
                  {ele.icon}
                </div>
                <h1 className="text-alpha text-4xl shadow font-bold">
                  0{ele.id}
                </h1>
              </div>

              <div className="py-5 px-8">
                <h1 className="text-3xl text-white font-bold">
                  {t(ele.header)}
                </h1>
                <h1 className="text-white/80  py-3">{t(ele.header)}</h1>
              </div>

              <div className="px-8 py-2 text-white">
                {ele.descriptions.map((e, i) => (
                  <div
                    key={i}
                    className={`text-white flex   items-center gap-x-3 mt-2   ${
                      selectedLanguage === "ar" && " flex-row-reverse"
                    }`}
                  >
                    <div
                      className={` ${
                        selectedLanguage === "ar" && "rotate-180"
                      }`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="white"
                        className="bi bi-arrow-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                        />
                      </svg>
                    </div>

                    <h3 className="text-white">{t(e.title)}</h3>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center py-5 mt-5">
          <Link className="bg-alpha py-3 md:px-7 px-3 rounded-lg" to={"/contact-us"}>
            <TransText en="Contact Us" fr="Contactez-nous" ar="اتصل بنا" />
          </Link>
        </div>

        <div className="py-3 mt-3 text-center ">
          <h1 className="lg:text-5xl text-3xl font-bold">
            <TransText
              en="Those Who Trust in Us"
              fr="Ceux Qui Nous Font Confiance"
              ar="من يثقون بنا"
            />
          </h1>
          <p className="lg:text-l lg:px-0 px-4 py-3 mt-2 font-normal">
            <TransText
              en="We are honored to work alongside organizations that share our values, striving for success together."
              fr="Nous sommes honorés de collaborer avec des organisations partageant nos valeurs, œuvrant ensemble vers la réussite."
              ar="نفتخر بالعمل جنباً إلى جنب مع المؤسسات التي تشاركنا قيمنا، ساعين معاً نحو النجاح."
            />
          </p>
        </div>

        {/* projects */}
        <div className="py-10 px-5 flex items-center flex-wrap gap-5">
          {projects &&
            projects.map((ele, indx) => (
              <div
                key={indx}
                className="lg:w-[32%] w-full projects relative p-5 transition-all overflow-hidden  border border-black rounded-lg"
              >
                <div className="flex items-center justify-between w-full">
                  <p className="font-bold">{ele.name}</p>
                  <img
                  loading="lazy"
                    className="w-16 h-16 object-cover rounded-full"
                    src={IMAGEURL + "projects/" + ele.logo}
                    alt=""
                  />
                </div>
                <p
                  className={`py-6 h-[25vh] overflow-y-auto text-base ${
                    selectedLanguage == "ar" && "text-end"
                  }`}
                >
                  {JSON.parse(ele.description)[selectedLanguage]}
                </p>
                <div className=" preview rounded-lg ">
                  <img
                  loading="lazy"
                    className="w-full h-full object-cover "
                    src={
                      IMAGEURL +
                      "projects/" +
                      (ele.preview ? ele.preview : ele.logo)
                    }
                    alt=""
                  />
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
