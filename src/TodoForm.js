import React, { useState } from "react";

// import { Container } from './styles';

function TodoForm(props) {
  const [text, setText] = useState("");

  function handleChange(event) {
    let t = event.target.value;
    console.log(t);
    setText(t);
  }

  function addItem(event) {
    event.preventDefault();

    if (text) {
      props.onAddItem(text)
      setText("");
    }
  }
  return (
    <form action="">
      <input onChange={handleChange} type="text" value={text} />
      <button onClick={addItem}>Add</button>
    </form>
  );
}

export default TodoForm;
