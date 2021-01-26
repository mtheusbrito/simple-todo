import React from 'react';

// import { Container } from './styles';

function Card(props) {
  return  <div className={props.className ? `${props.className} card`: "card"} >
    {props.children}

  </div>;
}

export default Card;