import React, { Component } from 'react';
import './WiseSquare.css';

class WiseSquare extends Component {
    dispenseWisdom(){
        let messages = [
            "Your eyes can deceive you; don't trust them.",
            "Who's more foolish? The fool or the fool who follows him?",
            "You must unlearn what you have learned.",
            "Do or do not. There is no try.",
            "Difficult to see. Always in motion is the future."
        ];

        let rIdx = Math.floor(Math.random()* messages.length);
        console.log(messages[rIdx]);
    }

  render() {
    return (
      <div className='WiseSquare' onMouseEnter={this.dispenseWisdom}>😎</div>
    )
  }
}

export default WiseSquare