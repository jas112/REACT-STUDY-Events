import React, { Component } from 'react';
import './NumberItem.css';

class NumberItem extends Component {
  render() {
    return (
      <li className='NumberItem'>
        {this.props.value}
        <button onClick={this.props.remove}>X</button>
      </li>
    )
  }
}

export default NumberItem