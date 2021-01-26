import React from "react";
import ListItem from "./ListItem";
// import { Container } from './styles';

function List(props) {
  return (
    <ul>
      {props.items.map((item, i) => (
        <ListItem key={item.id} item={item} onDone={props.onDone} onItemDelete={props.onItemDelete}/>
      ))}
    </ul>
  );
}

export default List;
