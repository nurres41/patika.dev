import React, { useState } from 'react'
import styles from './ControlBar.module.css'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux'
import { add, allStatus } from '../features/todoSlice';

const ControlBar = () => {

    const dispatch = useDispatch();
    const todoList = useSelector((state) => state.todoList)

    const [inputValue, setInputValue] = useState('')

    const changeInputValue = (e) =>{
        setInputValue(e.target.value)
    }
    
    const handlePressKey = (e) => {
        if(e.key === 'Enter'){
            dispatch(add(inputValue))
        }
    }

  return (
    <div className={styles.controlBarWrapper}>
      <MdOutlineKeyboardArrowDown style={{ width: '10%'}} size={40} color='#ddd' />  
      <input type='text' placeholder='Please add your ToDo!' onKeyDown={handlePressKey} value={inputValue} onChange={changeInputValue}/>
    </div>
  )
}

export default ControlBar
