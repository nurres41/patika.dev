import React, { useState } from 'react'
import styles from './TodoItem.module.css'
import { TiTick } from "react-icons/ti";
import { MdOutlineCancel } from "react-icons/md";
import {useDispatch, useSelector } from 'react-redux'
import { deleteTodo, status } from '../features/todoSlice';


const TodoItem = ({todoId, todoName, todoStatus}) => {

  const dispatch = useDispatch();

  const [todoNames, setTodoNames] = useState(todoName)

  const deleteItem = (todoId) => {
    dispatch(deleteTodo(todoId))
  }

  const statusChange = () =>{
    dispatch(status(todoId))
  }

  const changeTodoName = (e) => {
    setTodoNames(e.target.value)
  }
 
  return (
    <div className={styles.todoItemWrapper}>
      <div className={styles.circle} onClick={statusChange}>
        {
            todoStatus === true ? <TiTick size={30} color='green'/> : undefined
        }
      </div>
      <div className={styles.inputWrapper}>
        <input type='text' placeholder='Text' value={todoNames} onChange={changeTodoName} className={styles.input}/>
        <MdOutlineCancel size={30} className={styles.cancel} onClick={() => deleteItem(todoId)} />
      </div>
    </div>
  )
}

export default TodoItem
