import { useContext } from "react";
import { LanguageContent } from "./LanguageContext";


const DisplayLanguage = () => {
    
    const language = useContext(LanguageContent);

    return (
        <h1>{language}</h1>
    )
   
}

export default DisplayLanguage;