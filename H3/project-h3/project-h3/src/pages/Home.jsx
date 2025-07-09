import React from 'react';
import { Link } from 'react-router-dom';
import { useTodoContext } from '../context/TodoContext';
import Card from '../components/UI/Card';

function Home() {
    const { todos, activeTodos, completedTodos } = useTodoContext();
    return (
        <div className="home">
            <Card>
                <h1>🎯 Welcome to TodoMaster</h1>
                <p>Your personal productivity companion</p>

                <div className="stats">
                    <div className="stat-card">
                        <h3>{todos.length}</h3>
                        <p>Total Todos</p>
                    </div>
                    <div className="stat-card">
                        <h3>{activeTodos.length}</h3>
                        <p>Active Todos</p>
                    </div>
                    <div className="stat-card">
                        <h3>{completedTodos.length}</h3>
                        <p>Completed</p>
                    </div>
                </div>
                <div className="quick-actions">
                    <Link to="/todos" className="btn btn-primary">
                        View All Todos
                    </Link>
                    <Link to="/todos/active" className="btn btn-secondary">
                        Active Todos
                    </Link>
                </div>
            </Card>
        </div>
    );
}
export default Home;