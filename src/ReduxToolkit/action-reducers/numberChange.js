import { createSlice } from "@reduxjs/toolkit";

const initialStateValues ={value:0};

export const numberChange = createSlice({
    name:'ChangeNumber',
    initialState:initialStateValues,
    reducers:{
        incNum:(state) =>{
            state.value += 1
        },
        decNum:(state) => {
            state.value -= 1
        },
        incByAmount:(state,action) =>{
            state.value += action.payload
        },
        decByAmount:(state,action) =>{
            state.value -= action.payload
        }
    }
})

export const {incNum,decNum,incByAmount,decByAmount} = numberChange.actions

export default numberChange.reducer