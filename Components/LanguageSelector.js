import React from 'react';
import languagecontext from '../Context/languageContext';

class LanguageSelector extends React.Component{
    static contextType = languagecontext;
    render(){
        return(
            <div>
                Select a language:
                <i className = "flag us" onClick = {() => this.context.onLanguageChange('english')}/>
                <i className = "flag nl" onClick = {() => this.context.onLanguageChange('dutch')}/>
            </div>
        );
    }
}

export default LanguageSelector;