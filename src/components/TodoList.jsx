import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from '../features/todos/todoSlice';
import { CheckCircle, Circle, Trash2 } from 'lucide-react';

function TodoList() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex justify-between items-center bg-gray-100 p-3 rounded"
        >
          <div
            onClick={() => dispatch(toggleTodo(todo.id))}
            className="flex items-center gap-2 flex-1 cursor-pointer"
          >
            {todo.completed ? (
              <CheckCircle className="text-green-500 w-5 h-5" />
            ) : (
              <Circle className="text-gray-400 w-5 h-5" />
            )}
            <span className={`${todo.completed ? 'line-through text-gray-500' : ''}`}>
              {todo.text}
            </span>
          </div>

          <button
            onClick={() => dispatch(removeTodo(todo.id))}
            className="cursor-pointer ml-4 text-red-500 hover:text-red-700"
            title="Delete todo"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
