import React from 'react';
import Toggle from './Toggle';

export default function Sidebar(props) {
  
  const toggles = props.boxes.map((box) => {
    return (
      <Toggle 
        box={box}
        activeBoxes={props.activeBoxes}
        toggle={props.toggle}
      />
    );
  })

  return (
    <aside>
      { toggles }
    </aside>
  );

}