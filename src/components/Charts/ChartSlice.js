import { createSlice } from "@reduxjs/toolkit";

const chartSlice = createSlice({
    name:'chartData',
    initialState:[],
    reducers:{
        getDataChart:(state,action)=>{
            state.push(action.payload)
        }
    }
})
 const getDataSlice = ()=>{
    return function dataSlice(dispatch,getState){
        console.log(getState);
    }

 }
export default chartSlice