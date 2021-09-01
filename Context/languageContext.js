import React from 'react';
// english is the default context
const Context = React.createContext('english');


// named export import {languageStore}

export class LanguageStore extends React.Component{
    state = { language: 'english'};

    onLanguageChange = (language) => {
        this.setState({ language });
    }
    // add all state objects into provider and the callback function
    // this.props.children includes the children, everything wrapped in context.provider
    // has access to state and onlanguagechange
    render(){
        return(
            <Context.Provider value = { { ...this.state, onLanguageChange: this.onLanguageChange }}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export default Context;