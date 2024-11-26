import "./firstSection.sass";
import logo from "../../../assets/images/About us page-pana.png";
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
        className={`py-7 lg:py-2 flex lg:flex-row flex-col-reverse lg:px-16 px-7 justify-between drop-shadow-2xl `}
      >
        {/* <div className="flex flex-col w-[50%]">
          <p className={`text-6xl font-bold py-2 `}>
            {t("main.about.section1.title.first")} LionsGeek
            <span className="text-yellow-400">?</span>
          </p>
          <p className={`py-4 text-sm`}>
            {
              <TransText
                fr="LionsGeek est une organisation à but non lucratif qui vise à autonomiser les jeunes Marocains en leur offrant des compétences numériques. Nous proposons des programmes de formation gratuits de six mois en développement web et en production de contenu numérique, favorisant ainsi une nouvelle génération de personnes technologiquement compétentes. Notre approche inclusive accueille les jeunes âgés de 18 à 30 ans, indépendamment de leur parcours éducatif. Au-delà de la formation, nous fournissons des espaces d'incubation et de coworking pour soutenir les jeunes entrepreneurs et innovateurs. Rejoignez-nous pour façonner l'avenir du paysage numérique du Maroc."
                ar="LionsGeek هي منظمة غير ربحية تعمل على تمكين الشباب المغربي بمهارات رقمية. نقدم برامج تدريبية مجانية مدتها ستة أشهر في تطوير الويب وإنتاج المحتوى الرقمي، مما يمهد الطريق لجيل جديد من الأفراد المتمكنين من التكنولوجيا. نهجنا الشامل يرحب بالشباب من سن 18 إلى 30 عامًا، بغض النظر عن خلفيتهم التعليمية. بالإضافة إلى التدريب، نوفر مساحات حضانة ومساحات عمل مشتركة لدعم رواد الأعمال والمبتكرين الشباب. انضم إلينا في تشكيل مستقبل المشهد الرقمي في المغرب."
                en="LionsGeek is a non-profit organization empowering young Moroccans with digital skills. We offer free, six-month training programs in web development and digital content creation, fostering a new generation of tech-savvy individuals. Our inclusive approach welcomes young people aged 18-30, regardless of their educational background. Beyond training, we provide incubation and coworking spaces to support young entrepreneurs and innovators. Join us in shaping the future of Morocco's digital landscape."
              />
            }
          </p>
          <div
            className={`buttondiv w-[50vw] lg:block flex items-center justify-center py-4 `}
          >
            <Button>{t("main.about.section1.button")}</Button>
          </div>
        </div> */}
        <div className="lg:py-14 flex flex-col justify-center gap-7">
          <h1 className="text-6xl font-bold">
            <TransText en="What is" fr="Qu'est-ce que" ar="ماهي" />{" "}
          </h1>
          <span className="text-6xl font-bold">
            <TransText en="Lionsgeek ?" fr="Lionsgeek ?" ar="Lionsgeek ؟" />{" "}
          </span>
          <p className="">
            <TransText
              fr="LionsGeek est une organisation à but non lucratif qui vise à autonomiser les jeunes Marocains en leur offrant des compétences numériques. Nous proposons des programmes de formation gratuits de six mois en développement web et en production de contenu numérique, favorisant ainsi une nouvelle génération de personnes technologiquement compétentes. Notre approche inclusive accueille les jeunes âgés de 18 à 30 ans, indépendamment de leur parcours éducatif. Au-delà de la formation, nous fournissons des espaces d'incubation et de coworking pour soutenir les jeunes entrepreneurs et innovateurs. Rejoignez-nous pour façonner l'avenir du paysage numérique du Maroc."
              ar="LionsGeek هي منظمة غير ربحية تعمل على تمكين الشباب المغربي بمهارات رقمية. نقدم برامج تدريبية مجانية مدتها ستة أشهر في تطوير الويب وإنتاج المحتوى الرقمي، مما يمهد الطريق لجيل جديد من الأفراد المتمكنين من التكنولوجيا. نهجنا الشامل يرحب بالشباب من سن 18 إلى 30 عامًا، بغض النظر عن خلفيتهم التعليمية. بالإضافة إلى التدريب، نوفر مساحات حضانة ومساحات عمل مشتركة لدعم رواد الأعمال والمبتكرين الشباب. انضم إلينا في تشكيل مستقبل المشهد الرقمي في المغرب."
              en="LionsGeek is a non-profit organization empowering young Moroccans with digital skills. We offer free, six-month training programs in web development and digital content creation, fostering a new generation of tech-savvy individuals. Our inclusive approach welcomes young people aged 18-30, regardless of their educational background. Beyond training, we provide incubation and coworking spaces to support young entrepreneurs and innovators. Join us in shaping the future of Morocco's digital landscape."
            />
          </p>
          <Button>
            <TransText en="See More" fr="Voir plus" ar="شاهد المزيد" />{" "}
          </Button>
        </div>
        <img
          loading="lazy"
          src={logo}
          alt=""
          className="w-full lg:w-[50%] self-start"
        />
      </section>
    </>
  );
};
