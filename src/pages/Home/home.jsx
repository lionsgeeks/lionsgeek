import { Link } from "react-router-dom";
import { Button, TransText } from "../../components";
import { GallerySection, HeroSection, ServicesSection, TrainingSection } from "./partials";
import { MyContext } from "../../utils/contextProvider";
import { useContext } from "react";

export const HomePage = () => {
  const { selectedLanguage } = useContext(MyContext);

  return (
    <>
      <HeroSection />

      <div className="px-7 md:px-16 pt-6 py-12">
        <div
          className={`flex flex-col gap-6 md:items-center justify-between py-12 md:py-24 bg-beta px-7 md:px-16 rounded-lg ${
            selectedLanguage === "ar" ? "md:flex-row-reverse" : "md:flex-row"
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-bold text-balance md:w-1/3 text-white tracking-tighter">
            <TransText en="Who we are" fr="Qui nous sommes" ar="من نحن" />
            <span className="text-alpha">
              <TransText en="?" fr="?" ar="؟" />
            </span>
          </h1>

          <div
            className={`md:w-2/4 flex flex-col gap-8 ${selectedLanguage === "ar" && "items-end"}`}
          >
            <p
              className={`text-lg md:text-xl font-normal text-white text-balance ${
                selectedLanguage === "ar" && "text-end"
              }`}
            >
              <TransText
                en="LionsGeek is a Moroccan non-profit organization based in Casablanca. Our mission is to equip young people with the skills they need to succeed in the digital and audiovisual job markets"
                fr="LionsGeek est une association marocaine à but non lucratif basée à Casablanca. Notre mission est de doter les jeunes des compétences nécessaires pour réussir sur les marchés du numérique et de l'audiovisuel."
                ar="هي جمعية مغربية غير ربحية تتخذ من الدار البيضاء مقرا لها. مهمتنا تزويد الشباب بالمهارات المطلوبة للنجاح في سوقي العمل الرقمي والسمعية البصرية"
              />
            </p>

            <Link to={"/about"}>
              <Button outline>
                <TransText en="Learn more" fr="En savoir plus" ar="تعرف أكثر" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <ServicesSection />

      <div className="px-7 md:px-16 py-12">
        <div className="overflow-hidden flex flex-col gap-10 md:gap-16 items-center justify-between">
          <div className="w-full text-center">
            <h1 className="text-lg md:text-xl">Partners</h1>
            <h1 className="text-3xl md:text-5xl font-bold">Develop a future-ready workforce.</h1>
          </div>

          <div className="flex w-full md:px-48 gap-x-7 md:gap-x-16 gap-5 md:gap-y-14 justify-center flex-wrap">
            {Array.from({ length: 7 }).map((_, index) => (
              <img
                className={`h-12 w-[calc(calc(100%-calc(3*1.75rem))/4)] md:w-[calc(calc(100%-calc(6*4rem))/7)] grayscale saturate-0 brightness-150`}
                key={index}
                src={require(`../../assets/images/partners/partner-${index}.png`)}
                alt={`partner-${index}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-16 px-7 md:px-16 py-7 md:py-12 relative before:absolute before:bg-beta before:h-[87.5%] md:before:h-2/3 before:inset-0 before:top-1/2 before:-translate-y-1/2 before:-z-10">
        <img
          className="md:size-1/2"
          src={require(`../../assets/images/WeChoose.jpg`)}
          alt="we-choose-art-event"
        />

        <div className="h-[87.5%] md:h-2/3 flex-1 self-center">
          <h1 className="text-4xl md:text-6xl font-bold text-start text-alpha">Upcoming Event</h1>
          <h4 className="text-white mt-4 md:mt-8 text-sm md:text-base">GeekTalks</h4>
          <h2 className="text-white text-2xl md:text-4xl font-medium mt-1 md:mt-2 mb-2 md:mb-4">
            We choose art
          </h2>
          <h6 className="text-white text-sm md:text-base">31 / 05 / 2024 - LionsGeek</h6>
          <div className="*:text-white my-3 md:my-6">
            <p>🚀 Igniting the next generation of creatives!</p>
            <p>
              ✨Join us for interactive sessions that fuel passion, inspire innovation, and
              encourage big dreams.
            </p>
          </div>

          <Link to={"/about"}>
            <Button outline>See more</Button>
          </Link>
        </div>
      </div>

      <TrainingSection />
      <GallerySection />
    </>
  );
};
