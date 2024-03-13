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

export const booleanServiceSlice = createSlice({
  name: 'booleanService',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    changeAddServicePositive: (state) => {
      state.value=true;
    },
    changeneAddServiceNegative: (state) => {
      state.value =false;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
  },
})

export const { changeAddServicePositive, changeneAddServiceNegative} = booleanServiceSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const booleansetService = (state: RootState) => state.booleanService.value

export default booleanServiceSlice.reducer