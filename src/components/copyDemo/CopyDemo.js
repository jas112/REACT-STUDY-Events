import React, { Component } from 'react';
import './CopyDemo.css';

class CopyDemo extends Component {

    handleCopy(e){
        alert('This is from "Conan the Barbarian"');
    }

  render() {
    return (
      <div className='CopyDemo-container'>
        <div>Copy Demo</div>
        <div className='CopyDemo' onCopy={this.handleCopy}>
            ~ The Wizard ~<br/>
            Between the time when the oceans drank Atlantis, and the rise of the sons of Aryas, 
            there was an age undreamed of. And onto this, Conan, destined to wear the jeweled 
            crown of Aquilonia upon a troubled brow. It is I, his chronicler, who alone can tell 
            thee of his saga. Let me tell you of the days of high adventure!
        </div>
      </div>
    )
  }
}

export default CopyDemo;