import React, { createContext, useContext } from 'react';
import { useTodos } from '../hooks/useTodos';

const TodoContext = createContext();
export function TodoProvider({ children }) {
    const todoUtils = useTodos();
    return (
        <TodoContext.Provider value={todoUtils}>
            {children}
        </TodoContext.Provider>
    );
}
export function useTodoContext() {
    const context = useContext(TodoContext);
    if (!context) {
        throw new Error('useTodoContext harus digunakan dalam TodoProvider');
    }
    return context;
}