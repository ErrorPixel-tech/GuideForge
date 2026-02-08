import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [], };

const blocksSlice = createSlice(
    {
        name: "blocks",
        initialState,
        reducers: {
            addInput(state, action) {
                const newId = Date.now().toString();
                const {
                    type,
                    className,
                    tag,
                    isDisabled = false,
                    ...otherProps
                } = action.payload
                state.items.push(
                    {
                        id: newId,
                        blockType: "inputBlock",
                        type,
                        value: '',
                        className,
                        tag,
                        isDisabled,
                        ...otherProps
                    });
            },
            addList(state, action) {
                const listId = Date.now().toString();
                const itemId = Date.now().toString();
                state.items.push({
                    id: listId,
                    blockType: "listBlock",
                    type: "listBlock",
                    className: action.payload.className,
                    items: [
                        { id: itemId, value: '1' },
                        { id: itemId + 1, value: '2' }
                    ],
                });
            },
            updateInput(state, action) {
                const { id, value } = action.payload;
                const input = state.items.find(item => item.id === id);
                if (input) {
                    input.value = value;
                }
            },
            updateList(state, action) {
                const { id, listId, value } = action.payload;
                const list = state.items.find(item => item.id === listId);
                const input = list.items.find(item => item.id === id);
                if (input) {
                    input.value = value;
                }
            },
            formatAllBlocks(state) {
                state.items = state.items.map((input) => {
                    if (input.type === "code"
                        || input.type === "list"
                        || input.type === "olist"
                        || input.type === "slist"
                        || input.type === "numlist"
                        || input.type === "checkbox") {
                        return input;
                    }
                    let cleaned = input.value.replace(/\s+/g, ' ').trim();
                    return { ...input, value: cleaned };
                });
            },
            removeBlock(state, action) {
                state.items = state.items.filter((item) => item.id !== action.payload.id);
            },
            moveBlockDown(state, action) {
                const index = action.payload.index;
                let newIndex = index + 1;
                if (newIndex >= state.items.length) { return; }
                const holder = state.items[index];
                state.items[index] = state.items[newIndex];
                state.items[newIndex] = holder;
            },
            moveBlockUp(state, action) {
                const index = action.payload.index;
                let newIndex = index - 1;
                if (newIndex < 0) { return; }
                const holder = state.items[index];
                state.items[index] = state.items[newIndex];
                state.items[newIndex] = holder;
            },
            removeAllBlocks(state) {
                state.items = [];
            }
        }
    }
);

export const { updateList, addList, moveBlockUp, moveBlockDown, addInput, updateInput, removeBlock, removeAllBlocks, formatAllBlocks } = blocksSlice.actions;

export default blocksSlice.reducer;