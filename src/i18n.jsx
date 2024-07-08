import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      header: {
        home: "Home",
        formation: "Formation",
        coding: "Learn to code",
        media: "Master media arts",
        coworking: "Coworking",
        events: "Events",
        about: "About",
        gallerie: "Gallerie",
        contact_us: "Contact Us",
        who_we_are: "Who we are",
        blog: "Blog",
      },
      main: {
        coding: `Become a full stack pro and build powerful, responsive web apps. Our
          bootcamp focuses on hands-on projects to help you master the latest
          technologies and frameworks .`,
      },
      footer: {},
    },
  },
  fr: {
    translation: {
      header: {
        home: "Accueil",
        formation: "Formation",
        coding: "Apprenez à coder",
        media: "Maîtriser les arts médiatiques",
        coworking: "Coworking",
        events: "Événements",
        about: "À propos",
        gallerie: "Galerie",
        contact_us: "Contactez-nous",
        who_we_are: "Qui sommes-nous",
        blog: "Blog",
      },
      main: {
        coding: `bl francais `,
      },
      footer: {},
    },
  },
  ar: {
    translation: {
      header: {
        home: "الرئيسية",
        formation: "التكوين",
        coding: "تعلم البرمجة",
        media: "إتقان فنون الإعلام",
        coworking: "العمل المشترك",
        events: "الفعاليات",
        about: "حول",
        gallerie: "معرض",
        contact_us: "اتصل بنا",
        who_we_are: "من نحن",
        blog: "مدونة",
      },
      main: {
        coding: `bl 3arbia hahah`,
      },
      footer: {},
    },
  },
};
i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("selectedLanguage"),
  fallbackLng: "en",
});

export default i18n;
