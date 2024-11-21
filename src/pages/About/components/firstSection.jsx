import "./firstSection.sass";
import logo from "../../../assets/images/logolionsgeek.png";
import Button from "../../../components/Button";
import { useTranslation } from "react-i18next";
import { useAppContext } from "../../../utils/contextProvider";
import { TransText } from "../../../components";
export const FirstSectionAbout = () => {
  const { t } = useTranslation();
  const { selectedLanguage } = useAppContext();
  return (
    <>
      <section
        dir={selectedLanguage === "ar" ? "rtl" : "ltr"}
        className={`xl:py-[17vh] py-[10vh] flex xl:flex-row flex-col-reverse xl:px-16 px-7 justify-between drop-shadow-2xl ${
          selectedLanguage === "ar" ? "lg:flex-row-reverse" : ""
        }`}
      >
        <div className="flex flex-col w-[50%]">
          <p className={`text-6xl xl:w-[30vw] w-[70vw] font-bold py-2 `}>
            {t("main.about.section1.title.first")} LionsGeek
            <span className="text-yellow-400">?</span>
          </p>
          <p className={`xl:w-[70%] w-[80vw] py-4 text-sm`}>
            {
              <TransText
                fr="LionsGeek est une organisation à but non lucratif qui vise à autonomiser les jeunes Marocains en leur offrant des compétences numériques. Nous proposons des programmes de formation gratuits de six mois en développement web et en production de contenu numérique, favorisant ainsi une nouvelle génération de personnes technologiquement compétentes. Notre approche inclusive accueille les jeunes âgés de 18 à 30 ans, indépendamment de leur parcours éducatif. Au-delà de la formation, nous fournissons des espaces d'incubation et de coworking pour soutenir les jeunes entrepreneurs et innovateurs. Rejoignez-nous pour façonner l'avenir du paysage numérique du Maroc."
                ar="LionsGeek هي منظمة غير ربحية تعمل على تمكين الشباب المغربي بمهارات رقمية. نقدم برامج تدريبية مجانية مدتها ستة أشهر في تطوير الويب وإنتاج المحتوى الرقمي، مما يمهد الطريق لجيل جديد من الأفراد المتمكنين من التكنولوجيا. نهجنا الشامل يرحب بالشباب من سن 18 إلى 30 عامًا، بغض النظر عن خلفيتهم التعليمية. بالإضافة إلى التدريب، نوفر مساحات حضانة ومساحات عمل مشتركة لدعم رواد الأعمال والمبتكرين الشباب. انضم إلينا في تشكيل مستقبل المشهد الرقمي في المغرب."
                en="LionsGeek is a non-profit organization empowering young Moroccans with digital skills. We offer free, six-month training programs in web development and digital content creation, fostering a new generation of tech-savvy individuals. Our inclusive approach welcomes young people aged 18-30, regardless of their educational background. Beyond training, we provide incubation and coworking spaces to support young entrepreneurs and innovators. Join us in shaping the future of Morocco's digital landscape."
              />
            }
          </p>
          <div
            className={`buttondiv w-[50vw] xl:block flex items-center justify-center py-4 `}
          >
            <Button>{t("main.about.section1.button")}</Button>
          </div>
        </div>
        <div className="imgdiv">
          <img
            src={logo}
            alt=""
            className="xl:w-[20vw] xl:block hidden rounded-full"
          />
        </div>
      </section>
    </>
  );
};
