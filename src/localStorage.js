// src/localStorage.ts
export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('appState');
    if (serializedState === null) return undefined; // пусть RTK возьмёт initialState
    return JSON.parse(serializedState);
  } catch (e) {
    console.warn(e);
    return undefined;
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('appState', serializedState);
  } catch (e) {
    console.warn(e);
  }
};
