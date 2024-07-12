import { useContext } from "react";
import { Button, TransText } from "../../../components";
import { MyContext } from "../../../utils/contextProvider";

export default function HeroSection() {
  const { selectedLanguage } = useContext(MyContext);

  const pillars = [
    {
      title: { en: "Traning", fr: "Formation", ar: "تدريب" },
      description: {
        en: "Master tech in 6 months! Conquer the digital world with in-demand skills. Build a career or projects, join our community, and become the tech pro you were meant to be.",
        fr: "Devenez un pro de la tech en 6 mois ! Maîtrisez les compétences recherchées pour conquérir le monde numérique. Construisez une carrière ou des projets.",
        ar: "أتقن المجال التقني في 6 أشهر فقط! سيطر على العالم الرقمي بمهارات مطلوبة بشدة. ابني مهنة أو مشاريع، انضم إلى مجتمعنا وكن خبير التقنية الذي يجب أن تكونه.",
      },
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className={`absolute -z-10 h-full scale-125 stroke-beta/[6.25%] -top-[10%] ${
            selectedLanguage === "ar" ? "left-0 rotate-45" : "right-0 -rotate-45"
          } transition-all duration-[625ms] group-hover:opacity-0 group-hover:scale-[25]`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
          />
        </svg>
      ),
    },
    {
      title: { en: "Co-working", fr: "Coworking", ar: "العمل المشترك" },
      description: {
        en: "Master tech in 6 months! Conquer the digital world with in-demand skills. Build a career or projects, join our community, and become the tech pro you were meant to be.",
        fr: "Devenez un pro de la tech en 6 mois ! Maîtrisez les compétences recherchées pour conquérir le monde numérique. Construisez une carrière ou des projets.",
        ar: "أتقن المجال التقني في 6 أشهر فقط! سيطر على العالم الرقمي بمهارات مطلوبة بشدة. ابني مهنة أو مشاريع، انضم إلى مجتمعنا وكن خبير التقنية الذي يجب أن تكونه.",
      },
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className={`absolute -z-10 h-full scale-125 stroke-beta/[6.25%] -top-[10%] ${
            selectedLanguage === "ar" ? "left-0 rotate-45" : "right-0 -rotate-45"
          } transition-all duration-[625ms] group-hover:opacity-0 group-hover:scale-[25]`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
          />
        </svg>
      ),
    },
    {
      title: { en: "Event", fr: "Évènement", ar: "فعالية" },
      description: {
        en: "Master tech in 6 months! Conquer the digital world with in-demand skills. Build a career or projects, join our community, and become the tech pro you were meant to be.",
        fr: "Devenez un pro de la tech en 6 mois ! Maîtrisez les compétences recherchées pour conquérir le monde numérique. Construisez une carrière ou des projets.",
        ar: "أتقن المجال التقني في 6 أشهر فقط! سيطر على العالم الرقمي بمهارات مطلوبة بشدة. ابني مهنة أو مشاريع، انضم إلى مجتمعنا وكن خبير التقنية الذي يجب أن تكونه.",
      },
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className={`absolute -z-10 h-full scale-125 stroke-beta/[6.25%] -top-[10%] ${
            selectedLanguage === "ar" ? "left-0 rotate-45" : "right-0 -rotate-45"
          } transition-all duration-[625ms] group-hover:opacity-0 group-hover:scale-[25]`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className=" mt-[67.11px] px-7 md:px-16 text- text-balance pt-6 py-12 flex flex-col justify-between gap-6 md:gap-12">
      <div className="bg-image bg-no-repeat bg-center bg-cover md:h-[calc(calc(100vh-67.11px)*2/3)] rounded-lg overflow-hidden p-12 relative after:absolute after:size-full after:inset-0 after:bg-beta/50">
        <div
          className={`flex flex-col gap-4 absolute z-10 top-1/2 -translate-y-1/2 w-[calc(calc(100%-6rem)*0.5)] ${
            selectedLanguage === "ar" ? "items-end right-12" : "items-start left-12"
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white text-balance">
            <TransText
              fr="Le portail vers le monde numérique."
              en="The door to the digital world."
              ar=".بوابة إلى العالم الرقمي"
            />
          </h1>
          <p className="text-lg md:text-xl font-normal text-white text-balance">
            <TransText
              fr="Formation et mentorat gratuits pour vous aider à prospérer dans les secteurs de la technologie et des médias."
              en="Free training and mentorship to help you thrive in the tech and media industries."
              ar=".تدريب مجاني وتوجيه لمساعدتك على النجاح في مجالي التكنولوجيا والإعلام"
            />
          </p>

          <Button
            className="mt-3"
            onClick={() =>
              document.getElementById("trainings")?.scrollIntoView({ behavior: "smooth" })
            }
            outline
          >
            <TransText fr="Lancez-vous" en="Get Started" ar="ابدأ الآن" />
          </Button>
        </div>
      </div>

      <div className="md:h-1/2 flex gap-4 flex-col">
        <h2
          className={`text-xl md:text-3xl font-bold ${
            selectedLanguage === "ar" ? "text-end" : "text-start"
          }`}
        >
          <TransText fr="Nos piliers" en="Our pillars" ar="ركائزنا" />
        </h2>

        <div
          className={`flex gap-6 flex-col md:gap-0 justify-between md:h-full ${
            selectedLanguage === "ar" ? "md:flex-row-reverse" : "md:flex-row"
          }`}
        >
          {pillars.map(({ title, description, icon }, index) => (
            <div
              key={index}
              className="md:w-[32%] py-3 md:pt-8 md:pb-4 border rounded-lg rounded-tr-none md:h-full border-beta relative overflow-hidden group cursor-pointer flex justify-end"
            >
              {icon}

              <div
                className={`flex flex-col justify-end py-4 px-4 md:pl-8 md:pb-6 overflow-hidden ${
                  selectedLanguage === "ar" ? "text-end" : "text-start"
                }`}
              >
                <h1 className="font-medium text-lg md:text-xl md:duration-700 md:transition-all md:translate-y-[calc(150%+1.75rem)] md:group-hover:translate-y-0">
                  <TransText {...title} />
                </h1>
                <div className="md:duration-700 md:transition-all md:translate-y-[150%] md:group-hover:translate-y-0">
                  <TransText {...description} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
