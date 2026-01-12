import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
  },
  reducers: {
    addTodo(state, action) {
      state.items.push({
        id: Date.now(),
        title: action.payload,
        completed: false,
      });
    },
    toggleTodo(state, action) {
      const todo = state.items.find((td) => td.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
    deleteTodo(state, action) {
      state.items = state.items.filter((td) => td.id !== action.payload);
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
