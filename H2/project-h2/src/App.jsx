// App.js
import React, { useState, useEffect, useContext } from 'react';
import Card from './components/Card';
import { TodoContext } from './components/TodoContext'; // Impor context
import './style.css';


// Komponen baru untuk item todo
function TodoItem({ todo }) {
  // 3. Menggunakan (Consume) context dengan hook useContext
  const { handleDeleteTodo } = useContext(TodoContext);

  return (
    <li className="todo-item">
      <span>{todo.text}</span>
      <button onClick={() => handleDeleteTodo(todo.id)} className="delete-button">
        Hapus
      </button>
    </li>
  );
}


function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  
  const [input, setInput] = useState('');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;
    setTodos([...todos, { id: Date.now(), text: input, isCompleted: false }]);
    setInput('');
  };
  
  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  
  // Nilai yang ingin kita bagikan melalui context
  const contextValue = {
    handleDeleteTodo
  };

  return (
    // 2. Menyediakan (Provide) context ke semua komponen di dalamnya
    <TodoContext.Provider value={contextValue}>
      <Card>
        <h1>Daftar Isi</h1>
        <h2>Aplikasi Todo List Sederhana</h2>
        
        <form className="todo-form" onSubmit={handleAddTodo}>
          <input
            type="text"
            className="todo-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Tambahkan kegiatan baru..."
          />
          <button type="submit" className="todo-button">Tambah</button>
        </form>

        <ul className="todo-list">
          {todos.map(todo => (
            // Kita render komponen TodoItem baru
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      </Card>
    </TodoContext.Provider>
  );
}

export default App;