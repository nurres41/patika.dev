import React from 'react'
import ControlBar from './ControlBar'
import styles from './Box.module.css'
import TodoItem from './TodoItem'
import { useSelector } from 'react-redux'

const Box = () => {

    const todoList = useSelector((state) => state.todoList);
    console.log(todoList)

  return (
    <div className={styles.box}>
       <ControlBar />
       {
        todoList.length > 0 && todoList.map((item) => (
            <TodoItem todoId={item.id} key={item.id} todoName={item.name} todoStatus={item.status} />
        ))
       }
    </div>
  )
}

export default Box
