import {createSlice} from '@reduxjs/toolkit'
// const initState={
//         search:'',
//         status:'All',
//         priority:[]   
// }
// const filterReducer = (state = initState,action)=>{
//     switch (action.type){
        
//         case 'filter/searchText':
//             return {
//                     ...state,
//                     search:action.payload
//             }
//         case 'filter/status':
//             return{
//                 ...state,
//                 status:action.payload
//             }
//         case 'filter/priority':
//         return{
//             ...state,
//             priority:action.payload
//         }
//         default :
//         return state
//     }
// }
// export default filterReducer
const filterSlice = createSlice({
    name:'filter',
    initialState:{
        search:'',
        status:'All',
        priority:[]  
    },
    reducers:{
        searchText:(state,action)=>{
            state.search = action.payload
        },
        filterStatus:(state,action)=>{
            state.status = action.payload
        },
        filterPriority:(state,action)=>{
            state.priority=action.payload
        }
    }
})
export default filterSlice