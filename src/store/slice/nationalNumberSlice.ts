import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


interface nationalNumber{
    value:string ;
}
const initialState:nationalNumber={
    value:'',
}
export const NationalNumberSlice=createSlice({
    name: "setNationalNumber",
    initialState,
    reducers: {
        setNationalNumber: (state,action: PayloadAction<string>) => {
          state.value=action.payload;
        },
        
        // Use the PayloadAction type to declare the contents of `action.payload`
      },
})

export const { setNationalNumber} = NationalNumberSlice.actions;
export default NationalNumberSlice.reducer;