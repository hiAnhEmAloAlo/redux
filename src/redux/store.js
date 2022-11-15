// import { createStore } from 'redux'
// import rootReducer from './reducer'

// export const store = createStore(rootReducer)
import {configureStore} from '@reduxjs/toolkit'
import filterSlice from '../components/Filters/FilterSlice';
import todoSlice from '../components/TodoList/TodoSlice';

const store = configureStore({
    reducer:{
        filter:filterSlice.reducer,
        todoList:todoSlice.reducer
    },
});
export default store