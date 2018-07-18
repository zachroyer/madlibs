import React, { Component } from 'react';

class Content extends Component {
    render() {
        const data = this.props.data;
        return (
            <div>
                <p>
                    Ladies and gentlemen, this is <b>{data.color}</b> Barber, your sportscaster, bringing you the last inning of the game between the Cleveland {data.pluralNoun} and the {data.adjectiveOne} Yankees. {data.celebOne} is pitching for the Yankees. Here's the pitch! It's a low {data.adjectiveTwo} ball that just cuts the inside of the {data.nounOne} for a strike. That makes the count {data.numberOne} strikes and {data.numberTwo} balls. Now here's the next pitch. The batter swings and connects. It's a long, high {data.nounTwo} out to {data.adjectiveThree} field. But {data.celebTwo} is coming up fast and has it for the second out. The next batter up is {data.celebThree}, the Cleveland {data.adjectiveFour}-stop. Here's the pitch... and it's hit... a short ground ball to third {data.nounThree} {data.celebFour} scoops it up and throws it to first base for an out, and the game is over. And the Yankees move into second place in the {data.adjectiveFive} League!
                </p>

            </div>
        )
    }
}

export default Content;