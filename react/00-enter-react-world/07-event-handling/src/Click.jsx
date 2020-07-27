import React, { Component } from 'react';

export default class Click extends Component {
  
  state = {
    clickCounter: 0
  }

  handleClick = (event) => {
    this.setState((state) => {
      return state.clickCounter++
    })
  }

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     clickCounter: 0
  //   };

  //   this.handleClick = this.handleClick.bind(this);
  // }

  render() {
    return (
      <div>
        <p>Clicks: { this.state.clickCounter }</p>
        <button onClick={this.handleClick}>Click Me!</button>
        {/* <button onClick={this.handleClick.bind(this)}>Click Me!</button> */}
      </div>
    );
  }

  // handleClick(event) {
  //   this.setState((state) => {
  //     return state.clickCounter++
  //   })
  // }
}