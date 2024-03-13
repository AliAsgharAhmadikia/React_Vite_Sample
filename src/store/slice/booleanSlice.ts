import { createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../../store/index'

// Define a type for the slice state
interface CounterState {
  value: boolean;
}

// Define the initial state using that type
const initialState: CounterState = {
  value: false
}

export const counterSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    changepositive: (state) => {
      state.value=true;
    },
    changenegative: (state) => {
      state.value =false;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
  },
})

export const { changepositive, changenegative} = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value

export default counterSlice.reducer