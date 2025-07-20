import React from "react";
import { useState } from "react";

const LanguageSwitcher = () => {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    const newLang = language === "en" ? "ar" : "en";
    setLanguage(newLang);
    document.dir = newLang === "ar" ? "rtl" : "ltr";
    // You can add here logic to change the language in your i18n system
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
    >
      {language === "en" ? "العربية" : "English"}
      <span className="text-xs">{language === "en" ? "eg" : "🇺🇸"}</span>
    </button>
  );
};

export default LanguageSwitcher;
