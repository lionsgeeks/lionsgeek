import { Link } from "react-router-dom";
import { Button, TransText } from "../../../components";
import { useAppContext } from "../../../utils/contextProvider";

const EventSection = () => {
  const { selectedLanguage } = useAppContext();

  return (
    <div
      className={`flex flex-col gap-16 px-7 md:px-16 py-7 md:py-12 relative before:absolute before:bg-beta before:h-[87.5%] md:before:h-2/3 before:inset-0 before:top-1/2 before:-translate-y-1/2 before:-z-10 ${
        selectedLanguage === "ar" ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <img
        className="md:size-1/2"
        src={require(`../../../assets/images/WeChoose.jpg`)}
        alt="we-choose-art-event"
      />

      <div
        className={`h-[87.5%] md:h-2/3 flex-1 self-center ${
          selectedLanguage === "ar" ? "text-end" : "text-start"
        }`}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-alpha">
          <TransText en="Upcoming Event" fr="Prochain événement" ar="فعالية قادمة" />
        </h1>
        <h4 className="text-white mt-4 md:mt-8 text-sm md:text-base">
          <TransText en="GeekTalks" fr="Conférences Geek" ar="دردشات جيك" />
        </h4>
        <h2 className="text-white text-2xl md:text-4xl font-medium mt-1 md:mt-2 mb-2 md:mb-4">
          We choose art
        </h2>
        <h6 className="text-white text-sm md:text-base">31 / 05 / 2024 - LionsGeek</h6>
        <div className="*:text-white my-3 md:my-6">
          <p>
            <TransText
              en="🚀 Igniting the next generation of creatives!"
              fr="🚀 Allumons la prochaine génération de créateurs !"
              ar="نشعل شغف الجيل القادم من المبدعين 🚀"
            />
            <br />
            <TransText
              en="✨Join us for interactive sessions that fuel passion, inspire innovation, and encourage big dreams."
              fr="✨ Rejoignez-nous pour des sessions interactives qui attisent la passion, inspirent l'innovation et encouragent les grands rêves."
              ar="انضم إلينا في جلسات تفاعلية تغذي الشغف وتلهم الابتكار وتشجع على الأحلام الكبيرة ✨"
            />
          </p>
        </div>

        <Link to={"/about"}>
          <Button outline>
            <TransText en="See more" fr="Savoir plus" ar="عرض المزيد" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default EventSection;
