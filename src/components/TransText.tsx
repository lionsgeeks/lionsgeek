import React, { useContext } from "react";
import { MyContext } from "../utils/contextProvider";

interface TextProps {
  ar: string;
  fr: string;
  en: string;
}

const TransText: React.FC<TextProps> = (props) => {
  const { selectedLanguage } = useContext(MyContext);

  const allowedLanguages = ["ar", "fr", "en"];

  if (!allowedLanguages.includes(selectedLanguage)) {
    throw new Error(
      `Invalid language: ${selectedLanguage}. Supported languages are: ${allowedLanguages.join(
        ", "
      )}`
    );
  }

  return props[selectedLanguage];
};

export default TransText;
