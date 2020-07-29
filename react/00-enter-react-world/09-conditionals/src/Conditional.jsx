import React, { Component } from 'react';
import Greeting from './Greeting';
import LoginBtn from './LoginBtn';
import LogoutBtn from './LogoutBtn';
import Message from './Message';

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
        {/* { this.state.isLoggedIn && <p>Welcome user</p> } */}
        <Message isLoggedIn={this.state.isLoggedIn} />
      </>
    );
  }
}