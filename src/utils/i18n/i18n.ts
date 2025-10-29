"use client";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { i18n_en } from "./English";
import { i18n_est } from "./Estonian";

export type Languages = "en" | "et"

const supportedLanguages = {
  en: "en",
  et: "et",
};

const language = supportedLanguages["et"];

const resources = {
  en: {
    translation: i18n_en,
  },
  et: {
    translation: i18n_est,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: language,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
