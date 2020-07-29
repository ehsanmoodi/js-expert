import React, { Component } from 'react';
import Greeting from './Greeting';
import LoginBtn from './LoginBtn';
import LogoutBtn from './LogoutBtn';

export default class Conditional extends Component {

  state = {
    isLoggedIn: false
  }

  handleLogin() {
    this.setState({
      isLoggedIn: true
    });
  }

  handleLogout() {
    this.setState({
      isLoggedIn: false
    });
  }

  render() {

    // Element Variable
    let button = null;

    if (this.state.isLoggedIn) {
      button = <LogoutBtn handleClick={ () => this.handleLogout() } />;
    } else {
      button = <LoginBtn handleClick={ () => this.handleLogin() } />;
    }

    return (
      <>
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        { button }
      </>
    );
  }
}