import React, { Component } from 'react';
import Greeting from './Greeting';

export default class Conditional extends Component {

  state = {
    isLoggedIn: false
  }

  render() {
    return <Greeting isLoggedIn={this.state.isLoggedIn} />
  }
}