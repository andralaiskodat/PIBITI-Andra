import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { TodoProvider } from './context/TodoContext';
import Header from './components/Layout/Header';
import LoadingSpinner from './components/UI/LoadingSpinner';
import './App.css';

const Home = React.lazy(() => import('./pages/Home'));
const TodosPage = React.lazy(() => import('./pages/TodosPage'));
const ActiveTodos = React.lazy(() => import('./pages/ActiveTodos'));
const CompletedTodos = React.lazy(() => import('./pages/CompletedTodos'));
const TodoDetail = React.lazy(() => import('./pages/TodoDetail'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
function App() {
  return (
    <TodoProvider>
      <div className="app">
        <Header />
        <main className="main-content">
          <Suspense fallback={<LoadingSpinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/todo" element={<TodosPage />} />
              <Route path="/todo/active" element={<ActiveTodos />} />
              <Route path="/todo/completed" element={<CompletedTodos />} />
              <Route path="/todo/:id" element={<TodoDetail />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </TodoProvider>
  );
}
export default App;