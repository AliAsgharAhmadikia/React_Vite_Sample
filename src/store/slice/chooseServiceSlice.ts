import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


interface VisitCost{
    value:string ;
}
const initialState:VisitCost={
    value:'',
}
export const chooseServiceSlice=createSlice({
    name: "chooseService",
    initialState,
    reducers: {
        chooseService: (state,action: PayloadAction<string>) => {
          state.value=action.payload;
        },
        
        // Use the PayloadAction type to declare the contents of `action.payload`
      },
})

export const { chooseService} = chooseServiceSlice.actions;
export default chooseServiceSlice.reducer;