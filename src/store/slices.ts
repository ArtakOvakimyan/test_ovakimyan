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
            state.value.push(action.payload);
            if (state.value.length > 20) {
                state.value.shift();
            }
        }
    }
})

export const { add } = slice.actions;

export default slice.reducer;