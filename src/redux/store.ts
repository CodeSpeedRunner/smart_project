import {configureStore} from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {}
})

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export type {
    RootState,
    AppDispatch
}

export {
    store
}
