import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


interface phoneNumber{
    value:string ;
}
const initialState:phoneNumber={
    value:'',
}
export const PhoneNumberSlice=createSlice({
    name: "setPhoneNumber",
    initialState,
    reducers: {
        setPhoneNumber: (state,action: PayloadAction<string>) => {
          state.value=action.payload;
        },
        
        // Use the PayloadAction type to declare the contents of `action.payload`
      },
})

export const { setPhoneNumber} = PhoneNumberSlice.actions;
export default PhoneNumberSlice.reducer;
