# 📝 TodoList App

A simple yet powerful Todo List application built using **React**, **Vite**, and **Redux Toolkit**. This app allows users to **add**, **remove**, and **persist** todos using the browser's **localStorage**.

## 🚀 Features

- ✅ Add new todos
- ❌ Remove existing todos
- 💾 Save todos to localStorage automatically
- 📂 Load todos from localStorage on startup
- ⚛️ Powered by React + Redux Toolkit
- ⚡ Fast development with Vite

---

## 📦 Tech Stack

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [Tailwind CSS](https://tailwindcss.com/) (optional, if used for styling)

---

## 📁 Project Structure

```bash
todolist-app/
├── public/
├── src/
│   ├── app/
│   │   └── store.js               # Redux store configuration
│   ├── features/
│   │   └── todos/
│   │       └── todosSlice.js      # Redux slice for todos
│   ├── components/
│   │   ├── TodolistInput.jsx      # Input form to add todos
│   │   └── TodoList.jsx           # Renders the list of todos
│   ├── App.jsx                    # Main App component
│   └── main.jsx                   # Entry point with <Provider>
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js (if using Tailwind)
└── vite.config.js
