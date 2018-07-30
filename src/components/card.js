import React, { Component } from 'react';

import Input from './input';
import Content from './content';

const min = 1


const INITIAL_STATE = {
    color: '',
    pluralNoun: '',
    adjectiveOne: '',
    celebOne: '',
    adjectiveTwo: '',
    nounOne: '',
    numberOne: '',
    numberTwo: '',
    nounTwo: '',
    adjectiveThree: '',
    celebTwo: '',
    celebThree: '',
    adjectiveFour: '',
    nounThree: '',
    celebFour: '',
    adjectiveFive: '',
    contentVisible: false,
}

class Card extends Component {

    constructor() {
        super();

        this.state = INITIAL_STATE;

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleInputChange(event) {
        this.setState({ [event.target.name]: event.target.value})
    }

    handleFormSubmit(event) {
        event.preventDefault();
        this.setState({ contentVisible: !this.state.contentVisible });

        if(this.state.contentVisible) {
            this.setState(INITIAL_STATE)
        } else {
            this.setState({ contentVisible: true });
                }
    }

    render() {

        const inputData = [
            {title: 'Color', state: this.state.color, name: 'color', holder: 'Blue'},
            {title: 'Plural Noun', state: this.state.pluralNoun, name: 'pluralNoun', holder: 'Dogs'},
            {title: 'Adjective', state: this.state.adjective, name: 'adjectiveOne', holder: 'Sticky'},
            {title: 'Celebrity', state: this.state.celebOne, name: 'celebOne', holder: 'Will Smith'},
            {title: 'Adjective', state: this.state.adjectiveTwo, name: 'adjectiveTwo', holder: 'Soft'},
            {title: 'Noun', state: this.state.nounOne, name: 'nounOne', holder: 'Ball'},
            {title: 'Number', state: this.state.numberOne, name: 'numberOne', holder: '25'},
            {title: 'Number', state: this.state.numberTwo, name: 'numberTwo', holder: '99'},
            {title: 'Noun', state: this.state.nounTwo, name: 'nounTwo', holder:'Bacon'},
            {title: 'Adjective', state: this.state.adjectiveThree, name: 'adjectiveThree', holder: 'Saucy'},
            {title: 'Celebrity', state: this.state.celebTwo, name: 'celebTwo', holder: 'LeBron James'},
            {title: 'Celebrity', state: this.state.celebThree, name: 'celebThree', holder: 'Donald Trump'},
            {title: 'Adjective', state: this.state.adjectiveFour, name: 'adjectiveFour', holder: 'Crunchy'},
            {title: 'Noun', state: this.state.nounThree, name: 'nounThree', holder: 'Turkey'},
            {title: 'Celebrity', state: this.state.celebFour, name: 'celebFour', holder: 'Michael Jackson'},
            {title: 'Adjective', state: this.state.adjectiveFive, name: 'adjectiveFive', holder: 'Bright'}
        ]
       

        return (
            <form onSubmit={this.handleFormSubmit} className="card">
                <div className='card__inputs'>
                    {
                        inputData.map((data, index) => {
                            return Input( (data), this.handleInputChange, index) 
                        })
                    }
                </div>
                <button className={`card__${!this.state.contentVisible ? 'generate' : 'clear'}`} type="submit">{!this.state.contentVisible ? 'Generate MadLib' : 'Clear Form'}</button>
                {
                    this.state.contentVisible ? <Content data={this.state}/> : ''
                }
            </form>
        )
    }
}

export default Card;