import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

i18n.use(LanguageDetector)
    .use(initReactI18next)
    .use(Backend)
    .init({
        debug: true,
        fallbackLng: "en",
        returnObjects: true,
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        // resources: {
        //     en: {
        //         translation: {
        //             greeting: "Hello Welcome!",
        //             description: {
        //                 line1: "Direction of LAnguage: <1>{{dvalue}}</1>",
        //                 line2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        //             },
        //         },
        //     },
        // },
    });
