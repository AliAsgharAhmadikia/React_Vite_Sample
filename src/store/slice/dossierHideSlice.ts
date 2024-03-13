import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


interface dossierHide{
    value:boolean;
}
const initialState:dossierHide={
    value:false,
}
export const dossierHideSlice=createSlice({
    name: "dossierHide",
    initialState,
    reducers: {
        dossierHide: (state,action: PayloadAction<boolean>) => {
          state.value=action.payload;
        },
        
        // Use the PayloadAction type to declare the contents of `action.payload`
      },
})

export const { dossierHide} = dossierHideSlice.actions;
export default dossierHideSlice.reducer;