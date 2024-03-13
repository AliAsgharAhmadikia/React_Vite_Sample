import { createSlice } from '@reduxjs/toolkit'


interface IServices{
    RoomList:any [];
}
const initialState:IServices={
    RoomList:[],
}
export const roomListSlice=createSlice({
    name: "roomList",
    initialState,
    reducers: {
        setRoomList: (state,action) => {
            state.RoomList.push(action.payload);
        },
        removeRoomList:(state)=>{
            state.RoomList=[]
        },
        removeOneRoom:(state,action)=>{
            state.RoomList.filter(item=>item.id !==action.payload)
        }
        
        // Use the PayloadAction type to declare the contents of `action.payload`
      },
})
// export const selectServices = (state: RootState) => state.paymentList.serviceList;
export const { removeOneRoom,removeRoomList,setRoomList} = roomListSlice.actions;
export default roomListSlice.reducer;
