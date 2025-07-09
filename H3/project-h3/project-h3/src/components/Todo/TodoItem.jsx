import React from 'react';
import { Link } from 'react-router-dom';
import { useTodoContext } from '../../context/TodoContext';

function TodoItem({ todo }) {
    const { toggleTodo, deleteTodo } = useTodoContext();
    return (
        <li className={`todo-item ${todo.isCompleted ? 'completed' : ''}`}>
            <div className="todo-content">
                <input
                    type="checkbox"
                    checked={todo.isCompleted}
                    onChange={() => toggleTodo(todo.id)}
                    className="todo-checkbox"
                />
                <span className="todo-text">{todo.text}</span>
            </div>

            <div className="todo-actions">
                <Link to={`/todos/${todo.id}`} className="btn btn-sm btn-info">
                    View
                </Link>
                <button
                    onClick={() => deleteTodo(todo.id)}
                    className="btn btn-sm btn-danger"
                >
                    Delete
                </button>
            </div>
        </li>
    );
}
export default TodoItem;