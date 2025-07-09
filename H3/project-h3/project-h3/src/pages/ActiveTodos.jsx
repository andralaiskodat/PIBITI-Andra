import React from 'react';
import { useTodoContext } from '../context/TodoContext';
import TodoForm from '../components/Todos/TodoForm';
import TodoList from '../components/Todos/TodoList';
import Card from '../components/UI/Card';

function ActiveTodos() {
    const { activeTodos } = useTodoContext();
    return (
        <div className="active-todos">
            <Card>
                <h1>🔥 Active Todos</h1>
                <p>You have {activeTodos.length} active todos</p>
                <TodoForm />
                <TodoList todos={activeTodos} />
            </Card>
        </div>
    );
}
export default ActiveTodos;