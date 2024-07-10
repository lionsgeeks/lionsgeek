import { useContext } from "react";
import { TransText } from "../../../components";
import { MyContext } from "../../../utils/contextProvider";

const PillarCard = ({ title, description, icon }) => {
  const { selectedLanguage } = useContext(MyContext);

  return (
    <div className="md:w-[32%] py-3 md:py-0 border rounded-lg rounded-tr-none md:h-full border-beta relative overflow-hidden group cursor-pointer flex justify-end">
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
  );
};

export default PillarCard;
