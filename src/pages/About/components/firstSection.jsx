import "./firstSection.sass";
import logo from "../../../assets/images/About us page-pana.png";
import Button from "../../../components/Button";
import { useAppContext } from "../../../utils/contextProvider";
import { TransText } from "../../../components";
import { useNavigate } from "react-router-dom";
export const FirstSectionAbout = () => {
  const { selectedLanguage } = useAppContext();
  const navigate = useNavigate();
  return (
    <>
      <section
        dir={selectedLanguage === "ar" ? "rtl" : "ltr"}
        className={`py-7 lg:py-12 flex lg:flex-row flex-col-reverse lg:px-16 px-7 justify-between `}
      >
        <div className="lg:py-14 flex flex-col justify-center gap-7">
          <h1 dir={selectedLanguage === "ar" ? "ltr" : "rtl"} className={`text-6xl font-bold ${selectedLanguage=="ar" && "text-end"}`}>
            <TransText en="What is Lionsgeek ?" fr="Qu'est-ce que Lionsgeek ?" ar="؟ Lionsgeek ماهي" />{" "}
          </h1>
          <p className="">
            <TransText
              fr="LionsGeek est une organisation à but non lucratif qui vise à autonomiser les jeunes Marocains en leur offrant des compétences numériques. Nous proposons des programmes de formation gratuits de six mois en développement web et en production de contenu numérique, favorisant ainsi une nouvelle génération de personnes technologiquement compétentes. Notre approche inclusive accueille les jeunes âgés de 18 à 30 ans, indépendamment de leur parcours éducatif. Au-delà de la formation, nous fournissons des espaces d'incubation et de coworking pour soutenir les jeunes entrepreneurs et innovateurs. Rejoignez-nous pour façonner l'avenir du paysage numérique du Maroc."
              ar="LionsGeek هي منظمة غير ربحية تعمل على تمكين الشباب المغربي بمهارات رقمية. نقدم برامج تدريبية مجانية مدتها ستة أشهر في تطوير الويب وإنتاج المحتوى الرقمي، مما يمهد الطريق لجيل جديد من الأفراد المتمكنين من التكنولوجيا. نهجنا الشامل يرحب بالشباب من سن 18 إلى 30 عامًا، بغض النظر عن خلفيتهم التعليمية. بالإضافة إلى التدريب، نوفر مساحات حضانة ومساحات عمل مشتركة لدعم رواد الأعمال والمبتكرين الشباب. انضم إلينا في تشكيل مستقبل المشهد الرقمي في المغرب."
              en="LionsGeek is a non-profit organization empowering young Moroccans with digital skills. We offer free, six-month training programs in web development and digital content creation, fostering a new generation of tech-savvy individuals. Our inclusive approach welcomes young people aged 18-30, regardless of their educational background. Beyond training, we provide incubation and coworking spaces to support young entrepreneurs and innovators. Join us in shaping the future of Morocco's digital landscape."
            />
          </p>
          <Button onClick={()=>navigate('/whatislionsgeek')}>
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
