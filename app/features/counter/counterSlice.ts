import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: []
}

export interface payload {
  id:number
}

let initialState: CounterState = {
  value: [],
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addItem: (state:any, action: PayloadAction<payload>) => {
      let exists = false;
      state.value.forEach((x:any)=>{
        if(x.id==action?.payload.id){
          x.qty = x.qty + 1;
          exists = true;
          return
        }
      });
      if(!exists){
        state.value = [...state.value, action.payload]
      }
    },
    removeItem: (state:any, action: PayloadAction<payload>) => {
      let isZero = false;
      state.value.forEach((x:any)=>{
        if(x.id==action?.payload?.id){
          x.qty>1?
            x.qty = x.qty - 1:
            isZero = true;
          return
        }
      });
      if(isZero){
        state.value = state.value.filter((x)=>{
          return x.id!=action?.payload?.id
        })
      }
    },
  },
})

export const { addItem, removeItem } = counterSlice.actions

export default counterSlice.reducer