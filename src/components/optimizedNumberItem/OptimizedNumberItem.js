import React, { Component } from 'react';
import './OptimizedNumberItem.css';

class OptimizedNumberItem extends Component {
    // adding constructor(props) and using the ...bind(this) will give access to prop values for using in method operations.
    constructor(props){
        super(props);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleRemove(e){
        // utilize the passed method in the event handler for component
        console.log(`OptNumItm => removing: ${this.props.value} passing to OptNumLst remove()`);
        // call the passed method like so... here pass the unique prop value of the generated component.
        this.props.remove(this.props.value);
    }
  render() {
    return (
        <li className='OptimizedNumberItem'>
          {this.props.value}
          {/* <button onClick={this.props.remove}>X</button> */}
          {/* designate event handler for component to utilise the method pass to the component */}
          <button onClick={this.handleRemove}>X</button>
        </li>
      )
  }
}

export default OptimizedNumberItem;