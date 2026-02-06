import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [], };

const inputsSlice = createSlice(
    {
        name: "inputs",
        initialState,
        reducers: {
            addInput(state, action) {
                const newId = state.items.length > 0
                    ? Math.max(...state.items.map(i => i.id)) + 1
                    : 1;
                state.items.push({ id: newId, type: action.payload.type, value: '', className: action.payload.className, tag: action.payload.tag });
            },
            updateInput(state, action) {
                const { id, value } = action.payload;
                const input = state.items.find(item => item.id === id);
                if (input) {
                    input.value = value;
                }
            },
            removeInput(state, action) {
                state.items = state.items.filter((item) => item.id !== action.payload.id);
            },
            removeAllInputs(state) {
                state.items = [];
            }
        }
    }
);

export const { addInput, updateInput, removeInput, removeAllInputs } = inputsSlice.actions;

export default inputsSlice.reducer;