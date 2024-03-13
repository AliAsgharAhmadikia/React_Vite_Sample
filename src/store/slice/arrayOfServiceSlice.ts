import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '..';


interface IServices{
    serviceList:any [];
}
const initialState:IServices={
    serviceList:[],
}
export const servicesSlice=createSlice({
    name: "servicesSlice",
    initialState,
    reducers: {
        setServices: (state,action) => {
            state.serviceList.push(action.payload);
        },
        removeList:(state)=>{
            state.serviceList=[]
        },
        removeone:(state,action)=>{
            state.serviceList.forEach((item: any) => {
                if (item.id === action.payload) {
                    state.serviceList.splice(item,0);
                }
            })
        }
        
        // Use the PayloadAction type to declare the contents of `action.payload`
      },
})
export const selectServices = (state: RootState) => state.services.serviceList;
export const { removeone,removeList,setServices} = servicesSlice.actions;
export default servicesSlice.reducer;
