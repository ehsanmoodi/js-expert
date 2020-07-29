import React, { Component } from 'react';
import Sidebar from './Sidebar';
import Boxes from './Boxes';

export default class Main extends Component {

  state = {
    boxes: [
      { id: 1, title: 'Box 1' },
      { id: 2, title: 'Box 2' },
      { id: 3, title: 'Box 3' },
      { id: 4, title: 'Box 4' },
    ],

    activeBoxes: [ 1, 3, 4 ]
  };

  toggleBox = (id) => {

    let tempActiveBoxes = [...this.state.activeBoxes];

    if (tempActiveBoxes.includes(id)) {
      tempActiveBoxes.splice(tempActiveBoxes.indexOf(id), 1);
    } else {
      tempActiveBoxes.push(id);
    }

    // this.setState({
    //   'activeBoxes': tempActiveBoxes
    // });
    this.setState((state) => {
      return {
        ...state,
        activeBoxes: tempActiveBoxes
      }
    });

  }

  render() {

    return (
      <>
        <Sidebar boxes={this.state.boxes} activeBoxes={this.state.activeBoxes} toggle={this.toggleBox} />
        <Boxes boxes={this.state.boxes} activeBoxes={this.state.activeBoxes} />
      </>
    );

  }

}