import { configureStore } from "@reduxjs/toolkit";

import blocksSlice from '../features/blocks/blocks.js';

import { loadState, saveState } from '../localStorage.js';

const preloadedState = loadState();

export const store = configureStore({
    reducer: { blocks: blocksSlice },
    preloadedState
});

store.subscribe(() => {
  saveState(store.getState());
});


// Это чё?
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;