import React from 'react'
import { RiCloseCircleLine } from 'react-icons/ri'
import { BsCheck2Circle } from 'react-icons/bs'

export default function TodoItems(props) {
const { todo, removeTodo, completeTodo } = props;
  return (
    <div className={todo.completed ? "todo-row complete" : "todo-row"}>
    {todo.text}
    <div className='iconsContainer'>
        <RiCloseCircleLine style={{margin:5}}  onClick={()=> removeTodo(todo.id)}/>
        <BsCheck2Circle onClick={() => completeTodo(todo.id)}/>
    </div>
    
    </div>
  )
}
