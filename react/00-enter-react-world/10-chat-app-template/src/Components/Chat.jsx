import React from 'react';

export default function Chat(props) {
  return (
    <div className="chat">
      <div className="chat-avatar">
        <a className="avatar avatar-online" data-toggle="tooltip" href="#" data-placement="right" title="">
          <img src="{ props.gravatar }" alt="..." />
          <i></i>
        </a>
      </div>
      <div className="chat-body">
        <div className="chat-content">
          <p>
            { props.message }
          </p>
          <time className="chat-time" dateTime="2015-07-01T11:37">{ props.time }</time>
        </div>
      </div>
    </div>
  );
}