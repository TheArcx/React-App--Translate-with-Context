import React from 'react';
import languageContext from '../Context/languageContext';

class Field extends React.Component {
    // This is what links to our context
    static contextType = languageContext;

    render(){
        const text = this.context.language === 'english' ? 'Name' : 'Naam';
        return(
            <div className = "ui field">
                <label>{text}</label>
                <input />
            </div>
        );
    }
}

export default Field;