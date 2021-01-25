import React from "react";
import { FaTrash, FaSquare, FaCheckSquare } from "react-icons/fa";
// import { Container } from './styles';

function List(props) {
  return (
    <ul>
      {props.items.map((item, i) => (
        <li  className={item.done ? "done" : ""} key={i}>
          {item.text}

          <button onClick={()=> { props.onDone(item)}}> {item.done ? <FaCheckSquare/> : <FaSquare/> }</button>
          <button onClick={()=> { props.onItemDelete(item);}}>
            <FaTrash />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default List;
