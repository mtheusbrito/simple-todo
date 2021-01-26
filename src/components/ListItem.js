import React from "react";
import { FaTrash, FaSquare, FaCheckSquare } from "react-icons/fa";
import  Card from './Card';
// import { Container } from './styles';

function ListItem(props) {
  const item = props.item;
  return (<li>
          <Card className={item.done ? "done item" : "item"}>
            {item.text}
            <div>
              <button type="button" onClick={()=> { props.onDone(item)} }>{item.done ? <FaCheckSquare/> : <FaSquare/> } </button>
              <button type="button" onClick={()=> { props.onItemDelete(item);}} ><FaTrash /></button>
            </div>
          </Card>
        </li>
    
  );
}

export default ListItem;
