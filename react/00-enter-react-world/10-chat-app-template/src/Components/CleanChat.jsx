import React, { Component } from 'react';
import Heading from './Heading';
import Footer from './Footer';
import Body from './Body';

export default class CleanChat extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: 'Chat App'
    }

  }

  render() {
    return (
      <div className="container bootstrap snippets">
        
        <div className="col-md-7 col-xs-12 col-md-offset-2">

          <div className="panel" id="chat">
            
            <Heading title={this.state.title} />
            
            <Body />
            
            <Footer />

          </div>

        </div>

      </div>
    );
  }

}