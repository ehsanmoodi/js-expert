import React from 'react';
import Chat from './Chat';

export default function Body(props) {
  
  const chats = props.chatsList.map((chat, index) => {
    
    let isLeft = chat.type === 'recieved';
    
    return (
      <Chat 
        key={index}
        isLeft={isLeft}
        avatar={isLeft ? props.avatars.user2 : props.avatars.user1}
        message={chat.message} 
        time={chat.time} />
    );
  });

  return (
    <div className="panel-body">
      <div className="chats">
        { chats }
      </div>
    </div>
  );
}