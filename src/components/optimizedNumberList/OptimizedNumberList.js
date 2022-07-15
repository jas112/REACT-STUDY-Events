import React, { Component } from 'react';
import OptimizedNumberItem from '../optimizedNumberItem/OptimizedNumberItem';
import './OptimizedNumberList.css';

class OptimizedNumberList extends Component {
    constructor(props){
        super(props);
        this.state = {nums: [1, 2, 3, 4, 5]};
        this.remove = this.remove.bind(this);
    }

    remove(num){
        console.log(`OptNumLst => removing: ${num} passed from OptNumItm handleRemove()`);
        
        this.setState(currState => ({
            nums: currState.nums.filter(n => n !== num)
        }));
    }

  render() {

    let nums = this.state.nums.map(n => (
        // note the 'key', React needs a key value to track changes to generated components usually this value would be a dB id of an object.
        // the method below should only be used if the root data is static and does not have repeating values.
        <OptimizedNumberItem value ={n} remove={this.remove} key={n} />
    ));

    return (
      <div className='OptimizedNumberList-container'>
        <h1>OptimizedNumberList</h1>
        <ul>{nums}</ul>
      </div>
    )
  }
}
export default OptimizedNumberList;