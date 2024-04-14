import {createSlice} from "@reduxjs/toolkit";

interface InitState {
    value: Array<string>
}

const initState: InitState = {
    value: []
}

const slice = createSlice({
    name: "queries",
    initialState: initState,
    reducers: {
        add: (state, action) => {
            state.value.push(action.payload)
        }
    }
})

export const { add } = slice.actions;

export default slice.reducer;