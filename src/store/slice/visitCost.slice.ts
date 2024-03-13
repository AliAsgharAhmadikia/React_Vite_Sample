import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


interface VisitCost{
    value:string | number;
}
const initialState:VisitCost={
    value:'0',
}
export const CostSlice=createSlice({
    name: "cost",
    initialState,
    reducers: {
        changecost: (state,action: PayloadAction<number>) => {
          state.value=action.payload;
        },
        
        // Use the PayloadAction type to declare the contents of `action.payload`
      },
})

export const { changecost} = CostSlice.actions;
export default CostSlice.reducer;
