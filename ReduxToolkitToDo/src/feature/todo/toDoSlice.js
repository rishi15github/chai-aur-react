import { configureStore, createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {

    todos : [{id:1, text:"Hello, World"}]

}

export const todoSlice = createSlice({
    name : "todo",
    initialState ,
    reducers:{
        addTodos:(state,action)=>{
            const todo = {
                id: nanoid(),
                text :action.payload.text,
            }
            state.todos.push(todo)
        },

        removeTodos:  (state, action) =>{
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        }
    }
});


export const { addTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer         