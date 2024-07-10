import React from "react";
import { useAppContext } from "../utils/contextProvider";

interface TextProps {
  ar: string;
  fr: string;
  en: string;
}

const TransText: React.FC<TextProps> = (props) => {
  const { selectedLanguage } = useAppContext();

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
