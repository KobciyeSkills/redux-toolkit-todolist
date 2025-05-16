// src/features/todos/todoSlice.js
import { createSlice, nanoid } from '@reduxjs/toolkit';

const loadTodos = () => {
  const todos = localStorage.getItem('todos');
  return todos ? JSON.parse(todos) : [];
};

const initialState = {
  todos: loadTodos(),
  filter: 'all', // new filter state
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.todos.push(action.payload);
      },
      prepare: (text) => ({
        payload: {
          id: nanoid(),
          text,
          completed: false,
        },
      }),
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find((t) => t.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((t) => t.id !== action.payload);
    },
    setFilter: (state, action) => {
      state.filter = action.payload; // "all", "active", or "completed"
    },
  },
});

export const { addTodo, toggleTodo, removeTodo, setFilter } = todoSlice.actions;
export default todoSlice.reducer;
