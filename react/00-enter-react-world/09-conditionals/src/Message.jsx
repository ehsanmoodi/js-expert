import React from 'react';

export default function Message(props) {

  if (! props.isLoggedIn) {
    return null;
  }
  
  return <p>User is logged in!</p>
}