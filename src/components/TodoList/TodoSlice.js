// const initState=[

//         {
//             id:1,
//             name:'learn react',
//             completed:false,
//             prioriry:'High'
//         },
//         {
//             id:2,
//             name:'learn redux',
//             completed:true,
//             prioriry:'Medium'
//         },
//         {
//             id:3,
//             name:'learn javascript',
//             completed:false,
//             prioriry:'Low'
//         },

//     ]
// const todoReducer = (state = initState,action)=>{
//     switch (action.type){
//         case 'todoList/addTodo':
//             return[
//                     ...state,
//                     action.payload
//                 ]
//         case 'todoList/toggleCompleted':
//             return state.map(todo=>todo.id===action.payload ? {...todo,completed:!todo.completed}:todo)
//         default :
//         return state
//     }

// }
// export default todoReducer

import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
const todoSlice = createSlice({
    name: 'todoList',
    initialState: {
        status: 'idle',
        todos: [],
    },
    // reducers:{
    //     addTodo:(state,action)=>{
    //         state.push(action.payload)
    //     },
    //     toggleCompleted:(state,action)=>{
    //         const curentTodo = state.find(todo=>todo.id===action.payload)
    //         curentTodo.completed = !curentTodo.completed
    //     }
    // },
    extraReducers: (builder) => {
        builder
            .addCase(getData.pending, (state, action) => {
                state.status = 'Loading';
            })
            .addCase(getData.fulfilled, (state, action) => {
                state.todos = action.payload;
                state.status = 'idle';
            })
            .addCase(addData.fulfilled, (state, action) => {
                state.todos.push(action.payload);
            })
            .addCase(deleteTodo.fulfilled,(state,action)=>{
                state.todos=state.todos.filter(todo=>todo.id !== action.payload.id)
            })
        // .addCase(updateData.fulfilled,(state,action)=>{
        //     state.map(todo=>{

        //     })
        // })
    },
});

const URL = 'https://6360c22267d3b7a0a6b49625.mockapi.io/api/todolist';
export const getData = createAsyncThunk('todoList/getData', async () => {
    const res = await fetch(URL);
    const data = await res.json();
    return data;
});
export const addData = createAsyncThunk('todoList/addData', async (data) => {
    const options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
    };
    const res = await fetch(URL, options);
    const result = await res.json();
    return result;
});
// export const updateData = createAsyncThunk('todoList/updateData',async(id,data)=>{
//     console.log(data);
//     const options = {
//         method: 'PUT',
//         body: JSON.stringify(data),
//         headers: { 'Content-Type': 'application/json' },
//     };
//     const res = await fetch(URL+`${id}`,options)
//     const result = await res.json()
//     return result
// })
export const deleteTodo = createAsyncThunk('todoList/deleteTodo', async (id) => {
    console.log(id);
    const options = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    };
    const res = await fetch(URL+`/${id}`,options)
    const result = await res.json()
    return result
});
export default todoSlice;
