import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ar from "./locales/ar/translation.json";
import en from "./locales/en/translation.json";

const lng = localStorage.getItem("lng") || "ar";

const resources = {
  ar: {
    translation: ar,
  },
  en: {
    translation: en,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: lng,
  fallbackLng: "ar",
  interpolation: {
    escapeValue: false,
  },
  debug: true, // Enable debug mode
});

export default i18n;
