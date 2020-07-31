import React, { Component } from 'react';

export default class Footer extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      input: ''
    }
    
    this.handleInput = this.handleInput.bind(this);
    this.send = this.send.bind(this);
  }

  handleInput(event) {
    this.setState({
      input: event.target.value
    })
  }

  send() {
    this.props.handleSubmit(this.state.input);
    this.setState({
      input: ''
    });
  }

  render() {
    return (
      <div className="panel-footer">
        <form>
          <div className="input-group">
            <input value={this.state.input} onChange={this.handleInput} type="text" className="form-control" placeholder="Say something" />
            <span className="input-group-btn">
              <button onClick={this.send} className="btn btn-primary" type="button">Send</button>
            </span>
          </div>
        </form>
      </div>
    );
  }
}