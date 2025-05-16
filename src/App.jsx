import React from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center pt-10">
      <h1 className="text-4xl font-bold mb-6 text-slate-500">Todo List</h1>
      <div className="w-full max-w-md bg-white shadow-lg p-6 rounded-lg">
        <TodoInput />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
