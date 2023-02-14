import React from "react";
import { LanguageContent } from "./LanguageContext";


export class DisplayLanguage extends React.Component {
    render (){
        return (
            <LanguageContent.Consumer>
                { (language) => {
                    return (
                    <h1>
                        {language}
                    </h1>
                    )
                }}
            </LanguageContent.Consumer>
        )
    }
}