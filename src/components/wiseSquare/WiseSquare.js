import React, { Component } from 'react';
import './WiseSquare.css';

class WiseSquare extends Component {
    constructor(props){
        super(props);
        this.state = {
            message: ''
        };
        this.dispenseWisdom = this.dispenseWisdom.bind(this);
    }

    dispenseWisdom(e){
        let messages = [
            "Your eyes can deceive you; don't trust them.",
            "Who's more foolish? The fool or the fool who follows him?",
            "You must unlearn what you have learned.",
            "Do or do not. There is no try.",
            "Difficult to see. Always in motion is the future."
        ];

        let rIdx;
        let isRepeatedValue = false;

        do {
            rIdx = Math.floor(Math.random()* messages.length);
            isRepeatedValue = (messages[rIdx] === this.state.message);
            console.log(`isRepeatedValue: ${isRepeatedValue}`);
        } while (isRepeatedValue);

        console.log(messages[rIdx]);

        this.setState(currState => {
            let newState = {...currState};
            newState.message = messages[rIdx];
            return newState;
        });

    }

  render() {
    return (
        <div>
            <div className='WiseSquare' onMouseEnter={this.dispenseWisdom}>🧐</div>
            <h2>{this.state.message}</h2>
        </div>
      
    )
  }
}

export default WiseSquare