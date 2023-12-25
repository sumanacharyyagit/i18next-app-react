import { Trans, useTranslation } from "react-i18next";
import "./App.css";
import LanguageSelector from "./components/LanguageSelector";

function App() {
    const { t } = useTranslation();

    const greeting = t("greeting");
    const description = t("description");

    return (
        <>
            <div className="container">
                <LanguageSelector />
                <h1>{greeting}</h1>
                <span>
                    <Trans
                        i18nKey={description?.line1}
                        values={{
                            dvalue: `${document.body.dir}`,
                        }}
                        components={{ 1: <b /> }}
                    />
                </span>
                <p>{description?.line2}</p>
            </div>
        </>
    );
}

export default App;
