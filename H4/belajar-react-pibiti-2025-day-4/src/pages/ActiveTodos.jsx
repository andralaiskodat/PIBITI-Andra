import React from 'react'
import { useTodoContext } from '../context/TodoContext';
import Card from '../components/UI/Card';
import TodoForm from '../components/Todo/TodoForm';
import TodoList from '../components/Todo/TodoList';
import TodoSkeleton from '../components/UI/TodoSkeleton';

const ActiveTodos = () => {
  const { activeTodos, isLoading } = useTodoContext();

  if (isLoading) {
    return (
      <div className="active-todos flex justify-center items-start min-h-screen bg-gray-100 py-8">
        <Card className="w-full max-w-xl shadow-lg p-4">
          <h1 className="text-2xl font-bold mb-4">Loading Active Todos...</h1>
          <TodoSkeleton />
        </Card>
      </div>
    )
  }

  return (
    <div className="active-todos flex justify-center items-start min-h-screen bg-gray-100 py-8">
      <Card className="w-full max-w-xl shadow-lg">
        <h1 className="text-2xl font-bold mb-2 flex items-center gap-2">
          <span role="img" aria-label="fire">🔥</span> Active Todos
        </h1>
        <p className="mb-4 text-gray-600">
          You have <span className="font-semibold">{activeTodos.length}</span> active todos
        </p>
        <TodoForm />
        <TodoList todos={activeTodos} />
      </Card>
    </div>
  )
}

export default ActiveTodos