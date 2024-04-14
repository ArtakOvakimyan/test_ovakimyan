import { configureStore } from '@reduxjs/toolkit'
import initReducer from './slices';

export const store = configureStore({
    reducer: {
        init: initReducer
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;