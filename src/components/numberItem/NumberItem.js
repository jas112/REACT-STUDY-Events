import React, { Component } from 'react';
import './NumberItem.css';

class NumberItem extends Component {
  render() {
    return (
      <div className='NumberItem'>{this.props.value}</div>
    )
  }
}

export default NumberItem