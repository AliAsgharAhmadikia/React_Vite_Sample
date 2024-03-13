import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import  counterSlice  from './slice/booleanSlice';
import CostSlice  from './slice/visitCost.slice';
import  servicesSlice  from './slice/arrayOfServiceSlice';
import  PhoneNumberSlice  from './slice/phoneNumber';
import NationalNumberSlice  from './slice/nationalNumberSlice';
import booleanServiceSlice from './slice/booleanServiceSlice';
import NameSlice from './slice/NameSlice';
import chooseServiceSlice from './slice/chooseServiceSlice';
import paymentSlice from './slice/paymentSlice';
import roomListSlice  from './slice/arrayOfRoomListSlice';
import dossierHideSlice from './slice/dossierHideSlice';

const rootReducer = combineReducers({
  counter:counterSlice ,
  cost: CostSlice,
  services:servicesSlice,
  setphoneNumber:PhoneNumberSlice,
  setNationalNumber:NationalNumberSlice,
  booleanService:booleanServiceSlice,
  Name:NameSlice,
  chooseService:chooseServiceSlice,
  payment:paymentSlice,
  roomList:roomListSlice,
  dossierHide:dossierHideSlice,

});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
   
    ),
})



// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>(); // Export a hook that can be reused to resolve types
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;