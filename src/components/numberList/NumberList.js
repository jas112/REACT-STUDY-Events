import React, { Component } from 'react';
import NumberItem from '../numberItem/NumberItem';
import './NumberList.css';

class NumberList extends Component {
    constructor(props){
        super(props);
        this.state = {nums: [1, 2, 3, 4, 5]};
    }

    remove(num){
        this.setState(currState => {
            nums: currState.nums.filter(n => n !== num);
        });
    }

  render() {

    let nums = this.state.nums.map(n => <NumberItem value ={n} />)

    return (
      <div className='NumberList-container'>
        <h1>NumberList</h1>
        <ul>{nums}</ul>
      </div>
    )
  }
}

export default NumberList;