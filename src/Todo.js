import React, { useState, useEffect } from "react";

import "./Todo.css";
import List from "./components/List";
import TodoForm from './components/TodoForm';
import Item from './components/Item';
import { FaPlus} from 'react-icons/fa'
import Modal from "./components/Modal";
const SAVED_ITEMS = "savedItems";
function Todo() {
  const[showModal, setShowModal] =useState(false);
  const [items, setItems] = useState([]);
  useEffect(()=>{
    let savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS));
    if(savedItems){
      setItems(savedItems);
    }
  },[]);


  useEffect(()=>{
    localStorage.setItem(SAVED_ITEMS, JSON.stringify(items));
  },[items]);
 
  function onAddItem(text){
    let it =  new Item(text);
    setItems([...items, it])
    onHideModal();
  }
  function onItemDelete(item){
    let filterItems = items.filter(it=>it.id !== item.id);
    setItems(filterItems);

  }
  function onDone(item){
    
    let updatedItems = items.map(it=>{
      if(it.id === item.id){
        it.done = !it.done;
      }
      return it;
    })
    setItems(updatedItems);
  }


  function onHideModal(){
    setShowModal(false);

  }
  return (
    <div className="container">
      <header className="header">
        <h1>Todo</h1>
        <button onClick={()=>{setShowModal(true)}} className="addButton"> <FaPlus size={20}/></button>
      </header>
      
      {/*  */}
      
      <List onDone={onDone} onItemDelete={onItemDelete} items={items}/>

      <Modal show={showModal} onHideModal={onHideModal}>
        <TodoForm onAddItem={onAddItem}/>
      </Modal>
    </div>
  );
}

export default Todo;
