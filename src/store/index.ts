import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers/rootReducer";

export const store = configureStore({reducer: rootReducer})

export type RootStateType = ReturnType<typeof store.getState>

export type DispatchType = typeof store.dispatch