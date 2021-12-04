import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    counter: 0,
    showCounter: true,
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.counter++
        },
        incrementByValue(state, action) {
            state.counter = state.counter + action.payload
        },
        decrement(state) {
            state.counter--
        },
        toogle(state) {
            state.showCounter = !state.showCounter
        }
    }
})

export const counterActions = counterSlice.actions
export default counterSlice.reducer