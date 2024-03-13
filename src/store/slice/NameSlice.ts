import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


interface Name{
    value:string ;
}
const initialState:Name={
    value:'',
}
export const NameSlice=createSlice({
    name: "Name",
    initialState,
    reducers: {
        addName: (state,action: PayloadAction<string>) => {
          state.value=action.payload;
        },
        
        // Use the PayloadAction type to declare the contents of `action.payload`
      },
})

export const { addName} = NameSlice.actions;
export default NameSlice.reducer;