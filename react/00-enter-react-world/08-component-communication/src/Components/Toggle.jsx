import React from 'react';

export default function Toggle(props) {
  return (
    <div className="toggle">
      <span>{ props.box.title }</span>
      <label className="toggle-control">
        <input type="checkbox" checked={ props.activeBoxes.includes(props.box.id) } />
        <span onClick={ (e) => props.toggle(props.box.id) } className="control"></span>
      </label>
    </div>
  );
}