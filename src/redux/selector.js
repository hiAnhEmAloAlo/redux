import {createSelector} from '@reduxjs/toolkit'

export const todoListSelector = (state)=>state.todoList.todos
export const searchTextSeletor = (state)=>state.filter.search
export const filterStatus = (state)=>state.filter.status
export const filterPriority =(state)=>state.filter.priority

export const todoRemaining = createSelector(todoListSelector,filterStatus,searchTextSeletor,filterPriority,
    (todoList,status,searchText,priority)=>{
    return todoList.filter(todo=>{
        if(status==='All'){
            return priority.length ? todo.name.includes(searchText) && priority.includes(todo.priority) : todo.name.includes(searchText)
        }
        else{
            return (todo.name.includes(searchText)&&(status ==='Completed' ? todo.completed : ! todo.completed) &&(priority.length ?priority.includes(todo.priority):true ) )
        }
    })
})
