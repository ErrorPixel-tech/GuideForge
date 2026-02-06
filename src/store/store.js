import { configureStore } from "@reduxjs/toolkit";

import inputsSlice from '../features/inputs/inputs';

import { loadState, saveState } from '../localStorage.js';

const preloadedState = loadState();

export const store = configureStore({
    reducer: { inputs: inputsSlice },
    preloadedState
});

store.subscribe(() => {
  saveState(store.getState());
});


// Это чё?
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;