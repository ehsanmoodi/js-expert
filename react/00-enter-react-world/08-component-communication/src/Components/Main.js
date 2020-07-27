import React, { Component } from 'react';

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


    this.setState({
      'activeBoxes': tempActiveBoxes
    });

  }

  render() {

    const toggles = this.state.boxes.map((box) => {
      return (
        <div className="toggle">
          <span>{ box.title }</span>
          <label className="toggle-control">
            <input type="checkbox" checked={this.state.activeBoxes.includes(box.id)} />
            <span onClick={ (e) => this.toggleBox(box.id) } className="control"></span>
          </label>
        </div>
      );
    })

    const boxes = this.state.boxes.map((box) => {
      if (this.state.activeBoxes.includes(box.id)) {
        return (<div className="box">{ box.title }</div>);
      }
    })

    return (
      <>
        <aside>
          
          { toggles }

        </aside>
        <div className="box-wrapper">
          
          { boxes }

        </div>
      </>
    );
  }

}