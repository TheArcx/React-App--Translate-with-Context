import React from 'react';
import languageContext from '../Context/languageContext';
import ColorContext from '../Context/ColorContext';

class Button extends React.Component {

    renderSubmit(language) {
        return language === 'english' ? 'Submit' : 'Voorleggen';
    }

    renderButton(color){
        return(
            <button className= {`ui button ${color}`}>
                <languageContext.Consumer>
                    { ({ language }) => this.renderSubmit(language) }
                </languageContext.Consumer>
            </button>
        );
    }

    render() {
        return (
            <ColorContext.Consumer>
                { (color) => this.renderButton(color) }
            </ColorContext.Consumer>
        );
    }
}

export default Button;