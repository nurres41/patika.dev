import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4} from 'uuid'

const initialState = [{
    id: uuidv4(),
    name: "KingMakers",
    status: false
}]

const todoList = createSlice({
    name: 'todoList',
    initialState: initialState,
    reducers: {
        add: (state, action) => {
            state.push({
                id: uuidv4(),
                name: action.payload,
                status: false
            })
        },
        delete: (state, action) => {
            return state.filter((item) => item.id !== action.payload)
        },
        status: (state,action) => {
            const updateStatus = state.find((item) => item.id === action.payload);
            if(updateStatus){
                updateStatus.status = !updateStatus.status;
            }
        },
        allStatus: (state, action) => {
            state.forEach((todo) => {
                todo.status = action.payload;
              });
        } 
    }
});

export const { add, delete: deleteTodo, status, allStatus} = todoList.actions;
export default todoList.reducer;