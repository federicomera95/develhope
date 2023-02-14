import React from "react";
import { LanguageContent } from "./LanguageContext";
import { DisplayLanguage } from "./DisplayLanguge";


export class App extends React.Component {

    state = {
        language: 'en'
    };

    handleLanguageChange({value}) {
       this.setState({language: value});
    }

    render() {
        return (
            <div>
                <select value={this.state.language} onChange={({target}) => this.handleLanguageChange(target)}>
                    <option value='en'>ENGLISH</option>
                    <option value='it'>ITALIANO</option>
                </select>
                <LanguageContent.Provider value={this.state.language}>
                    <DisplayLanguage />
                </LanguageContent.Provider>
            </div>
        );
    }
}