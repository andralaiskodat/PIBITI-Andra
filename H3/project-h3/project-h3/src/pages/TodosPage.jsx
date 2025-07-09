import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { useTodoContext } from '../context/TodoContext';
import TodoForm from '../components/Todos/TodoForm';
import TodoList from '../components/Todos/TodoList';
import FilterTabs from '../components/Todos/FilterTabs';
import Card from '../components/UI/Card';

function TodosPage() {
    const { todos, activeTodos, completedTodos } = useTodoContext();
    const [searchParams] = useSearchParams();

    const filter = searchParams.get('filter') || 'all';

    const getFilteredTodos = () => {
        switch (filter) {
            case 'active':
                return activeTodos;
            case 'completed':
                return completedTodos;
            default:
                return todos;
        }
    };
    const filteredTodos = getFilteredTodos();
    return (
        <div className="todos-page">
            <Card>
                <h1>📋 Todos</h1>
                <TodoForm />
                <FilterTabs currentFilter={filter} />
                <TodoList todos={filteredTodos} />

                {filteredTodos.length === 0 && (
                    <div className="empty-state">
                        <p>No todos found for "{filter}" filter.</p>
                    </div>
                )}
            </Card>
        </div>
    );
}
export default TodosPage;