import React, { Component } from 'react';
import './AnnoyingForm.css';

class AnnoyingForm extends Component {

    handleKeyUp(e){
        // alert('You just typed something!!!');
        if (e.keyCode === 56) {
            alert('I LIKE THIS CHARACTER!!!!')
        } else {
            alert('YOU PRESSED SOMETHING!!!!')
        }
    }
  render() {
    return (
      <div className='AnnoyingForm'>
        <div>AnnoyingForm</div>
        <textarea onKeyUp={this.handleKeyUp}/>
      </div>
    )
  }
}

export default AnnoyingForm