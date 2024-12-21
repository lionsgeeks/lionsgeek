import { TransText } from "../../components";
import { useAppContext } from "../../utils/contextProvider";
import { Partners } from "../About/components/partners";
import {
  EventSection,
  GallerySection,
  HeroSection,
  ServicesSection,
  TrainingSection,
  WhoSection,
} from "./partials";

export const HomePage = () => {
  const { upcomingEvent, darkMode } = useAppContext();


  return (
    <>
      <HeroSection />
      <WhoSection />
      <ServicesSection />
      <Partners />
      {upcomingEvent && <EventSection />}
      <TrainingSection />
      <GallerySection />
    </>
  );
};
