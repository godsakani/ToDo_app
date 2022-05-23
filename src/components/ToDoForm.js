import React, {useState} from 'react';

export default function ToDoForm(props) {
    
    const [input, setInput] = useState('')
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        props.addTodo(input)
        setInput("")
    }
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
        <input className="todo-input" 
        value={input}
        placeholder="add todo items here" 
        onChange={(e) =>  setInput(e.target.value)}
        />
        <button type='submit' className="todo-button">Add Todo</button>
    </form>
  );
}
