import React, { Component } from 'react';
import './ExperimentalSquare.css';

class ExperimentalSquare extends Component {
    static defaultProps = {

        messages: [
            "Your eyes can deceive you; don't trust them.",
            "Who's more foolish? The fool or the fool who follows him?",
            "You must unlearn what you have learned.",
            "Do or do not. There is no try.",
            "Difficult to see. Always in motion is the future."
        ]

    };

    constructor(props){
        super(props);
        this.state = {
            message: ''
        };
        this.dispenseWisdom = this.dispenseWisdom.bind(this);
    }
    /// experimental arrow function form allows the binding of 'this'.
    dispenseWisdom = (e) => {
        let {messages} = this.props;

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
        <div className='ExperimentalSquare-container'>
            <div className='ExperimentalSquare-title'>Experimental Square</div>
            <div className='ExperimentalSquare' onMouseEnter={this.dispenseWisdom}>🧐</div>{/* in conjuction with the constructor(props){} */}
            <h2>{this.state.message ? this.state.message : 'Click the square for wisdom.'}</h2>
        </div>
      
    )
  }
}

export default ExperimentalSquare;