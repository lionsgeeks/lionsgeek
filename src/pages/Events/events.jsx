// import { FirstSectionEvent } from "./components/firstSection";
import { useAppContext } from "../../utils/contextProvider";
import { CardsSection } from "./components/cardsSection";
import { FirstSectionEvent } from "./components/firstSection";

export const EventPage = () => {
  const { events } = useAppContext();
  return (
    <>
      <FirstSectionEvent />
      <CardsSection />
    </>
  );
};
