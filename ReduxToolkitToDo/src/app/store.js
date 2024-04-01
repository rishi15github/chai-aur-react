import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../feature/todo/toDoSlice';



export const  store = configureStore(
    {
        reducer : todoReducer
    }
)


