import React, { Component } from 'react';
import NumberItem from '../numberItem/NumberItem';
import './NumberList.css';

class NumberList extends Component {
    constructor(props){
        super(props);
        this.state = {nums: [1, 2, 3, 4, 5]};
        this.remove = this.remove.bind(this);
    }

    remove(num){
        console.log(`removing: ${num}...`);

        // this.setState(currState => {
        //     let newState = {...currState};
        //     console.log(`newState.nums preFilter(${num}) => ${newState.nums}`);
        //     newState.nums.filter(n => n !== num);
        //     console.log(`newState.nums postFilter(${num}) => ${newState.nums}`);
        //     return newState;
        // });
        
        this.setState(currState => ({
            nums: currState.nums.filter(n => n !== num)
        }));
    }

  render() {

    let nums = this.state.nums.map(n => (
        <NumberItem value ={n} remove={() => this.remove(n)} />
    ));

    return (
      <div className='NumberList-container'>
        <h1>NumberList</h1>
        <ul>{nums}</ul>
      </div>
    )
  }
}

export default NumberList;