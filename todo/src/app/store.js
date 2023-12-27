import {configureStore} from '@reduxjs/toolkit'
import todoListReducer from '../features/todoSlice'

export const store = configureStore({
    reducer:{
        todoList: todoListReducer
    }
})