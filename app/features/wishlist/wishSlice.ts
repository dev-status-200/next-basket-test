import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface WishState {
  value: []
};
export interface payload {
  id:number
}

let initialState: WishState = {
  value: [],
}

export const wishSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addWish: (state:any, action: PayloadAction<payload>) => {
      let exists = false;
      state.value.forEach((x:any)=>{
        if(x.id==action?.payload?.id){
          exists = true;
          return
        }
      });
      if(!exists){
        state.value = [...state.value, action.payload]
      }
    },
    removeWish: (state:any, action: PayloadAction<payload>) => {
      state.value = state.value.filter((x)=>{
        return x.id!=action?.payload?.id
      })
    },
  },
})

export const { addWish, removeWish } = wishSlice.actions

export default wishSlice.reducer