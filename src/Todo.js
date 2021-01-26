import React, { useState, useEffect } from "react";

import "./Todo.css";
import List from "./components/List";
import TodoForm from './components/TodoForm';
import Item from './components/Item';
const SAVED_ITEMS = "savedItems";
function Todo() {
 
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
  return (
    <div className="container">
      <h1>Todo</h1>
      <TodoForm onAddItem={onAddItem}/>
      <List onDone={onDone} onItemDelete={onItemDelete} items={items}/>
    </div>
  );
}

export default Todo;
