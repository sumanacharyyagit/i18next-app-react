import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const languages = [
    { code: "en", lang: "English" },
    { code: "fr", lang: "French" },
    { code: "hi", lang: "Hindi" },
    { code: "ar", lang: "Arabic" },
];

const LanguageSelector = () => {
    const { i18n } = useTranslation();

    const handleChangeLang = (code) => {
        i18n.changeLanguage(code);
    };

    useEffect(() => {
        document.body.dir = i18n.dir();
    }, [i18n, i18n.language]);

    return (
        <div className="btn-container">
            {languages.map((item) => (
                <button
                    key={item.code}
                    className={item.code === i18n.language ? "selected" : ""}
                    onClick={() => handleChangeLang(item.code)}
                >
                    {item.lang}
                </button>
            ))}
        </div>
    );
};

export default LanguageSelector;
