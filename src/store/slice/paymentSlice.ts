import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


interface payment{
    value:string | number;
}
const initialState:payment={
    value:'0',
}
export const paymentSlice=createSlice({
    name: "payment",
    initialState,
    reducers: {
        paymentCost: (state,action: PayloadAction<number>) => {
          state.value=action.payload;
        },
        
        // Use the PayloadAction type to declare the contents of `action.payload`
      },
})

export const { paymentCost} = paymentSlice.actions;
export default paymentSlice.reducer;
