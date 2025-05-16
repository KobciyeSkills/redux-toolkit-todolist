// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todos/todoSlice';

export const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem('todos', JSON.stringify(state.todo.todos)); // only persist todos, not filter
});
