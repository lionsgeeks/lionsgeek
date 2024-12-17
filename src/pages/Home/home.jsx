import { TransText } from "../../components";
import { useAppContext } from "../../utils/contextProvider";
import {
  EventSection,
  GallerySection,
  HeroSection,
  ServicesSection,
  TrainingSection,
  WhoSection,
} from "./partials";

export const HomePage = () => {
  const { upcomingEvent } = useAppContext();
  

  return (
    <>
      <HeroSection />
      <WhoSection />
      <ServicesSection />

      <div className="px-7 md:px-16 py-12"  >
        <div className="overflow-hidden flex flex-col gap-10 md:gap-16 items-center justify-between">
          <div className="w-full text-center">
            <h1 className="text-lg md:text-xl">
              <TransText fr="Partenaires" en="Partners" ar="شركاؤنا" />
            </h1>
            <h1 className="text-3xl md:text-5xl font-bold">
              <TransText
                fr="Former une force de travail à l'épreuve du futur."
                en="Develop a future-ready workforce."
                ar="تطوير قوة عاملة جاهزة للمستقبل"
              />
            </h1>
          </div>
          <div className="flex w-full md:px-48 gap-x-7 md:gap-x-20 gap-14 md:gap-y-14 justify-center flex-wrap">
            {Array.from({ length: 6 }).map((_, index) => (
              <img
                loading="lazy"
                className={`h-12 w-[calc(calc(100%-calc(3*0.60rem))/4)] md:w-[calc(calc(100%-calc(11*3rem))/5)] object-contain`}
                key={index}
                src={require(`../../assets/images/partners/partner-${index}.png`)}
                alt={`partner-${index}`}
              />
            ))}
          </div>
        </div>
      </div>
      {upcomingEvent && <EventSection />}
      <TrainingSection />
      <GallerySection />
    </>
  );
};
