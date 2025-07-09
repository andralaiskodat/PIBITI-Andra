import React from 'react';
import { useTodoContext } from '../context/TodoContext';
import TodoList from '../components/Todos/TodoList';
import Card from '../components/UI/Card';

function CompletedTodos() {
    const { completedTodos } = useTodoContext();
    return (
        <div className="completed-todos">
        <Card>
            <h1>✅ Completed Todos</h1>
            <p>You've completed {completedTodos.length} todos. Great job!</p>
            {completedTodos.length === 0 ? (
            <p className="empty-state">No completed todos yet. Keep going! 💪</p>
            ) : (
            <TodoList todos={completedTodos} />
            )}
        </Card>
        </div>
    );
}
export default CompletedTodos;