import { useCallback, useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";

const useTodos = () => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await axiosInstance.get('/todos/user/2?limit=10'); // Mengambil 10 todo sebagai contoh
        
        const formattedTodos = response.data.todos.map(item => ({
          id: item.id,
          text: item.todo,
          isCompleted: item.completed,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        }));

        setTodos(formattedTodos.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))); // Urutkan berdasarkan tanggal terbaru
      } catch (err) {
        console.error("Gagal mengambil todos:", err);
        setError("Tidak dapat memuat data. Silakan coba lagi nanti.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchTodos();
  }, []);
  
  const addTodo = useCallback(async (text) => {
    try {
      // Body request disesuaikan dengan dokumentasi dummyjson
      const response = await axiosInstance.post('/todos/add', {
        todo: text.trim(),
        completed: false,
        userId: 2,
      });

      const newTodo = {
        id: response.data.id,
        text: response.data.todo,
        isCompleted: response.data.completed,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      };

      // Menambahkan todo baru ke state lokal setelah berhasil
      setTodos(prev => [newTodo, ...prev]);

    } catch (err) {
      console.error("Gagal menambah todo:", err);
      setError("Tidak dapat menambah todo. Silakan coba lagi nanti.");
    }
  }, []);

  const deleteTodo = useCallback(async (id) => {
    try {
      await axiosInstance.delete(`/todos/${id}`);
      
      setTodos(prev => prev.filter(todo => todo.id !== id));
    } catch (err) {
      console.error("Gagal menghapus todo:", err);
      setError("Tidak dapat menghapus todo. Silakan coba lagi nanti.");
      // Jika gagal, tetap hapus dari state lokal untuk menjaga konsistensi UI
      setTodos(prev => prev.filter(todo => todo.id !== id));
    }
  }, []);

  const toggleTodo = useCallback(async (id) => {
    const todoToToggle = todos.find(todo => todo.id === id);
    if (!todoToToggle) return;

    try {
      // API dummyjson menggunakan 'completed'
      const updatedStatus = !todoToToggle.isCompleted;
      const response = await axiosInstance.put(`/todos/${id}`, {
        completed: updatedStatus,
      });

      // Memperbarui state lokal dengan data dari respons API
      setTodos(prev =>
        prev.map(todo =>
          todo.id === id
            ? { ...todo, isCompleted: response.data.completed, updatedAt: new Date().toISOString() }
            : todo
        )
      );
    } catch (err) {
      setTodos(prev =>
        prev.map(todo =>
          todo.id === id
            ? { ...todo, isCompleted: !todoToToggle.isCompleted, updatedAt: new Date().toISOString() }
            : todo
        )
      );
    }
  }, [todos]);

  const updateTodo = useCallback(async (id, newText) => {
    try {
      // API dummyjson menggunakan 'todo' untuk teks
      const response = await axiosInstance.put(`/todos/${id}`, {
        todo: newText,
      });

      // Memperbarui state lokal dengan data dari respons API
      setTodos(prev =>
        prev.map(todo =>
          todo.id === id
            ? { ...todo, text: response.data.todo, updatedAt: new Date().toISOString() }
            : todo
        )
      );
    } catch (err) {
      console.error("Gagal memperbarui todo:", err);
    }
  }, []);

  // Computed values
  const activeTodos = todos.filter(todo => !todo.isCompleted);
  const completedTodos = todos.filter(todo => todo.isCompleted);

  return {
    todos,
    activeTodos,
    completedTodos,
    isLoading,
    error,
    addTodo,
    deleteTodo,
    toggleTodo,
    updateTodo
  };
}

export default useTodos