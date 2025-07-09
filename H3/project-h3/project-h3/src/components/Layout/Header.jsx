import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="container">
                <Link to="/" className="logo">
                    📝 TodoMaster
                </Link>
                <nav className="nav">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/todos" className="nav-link">All Todos</Link>
                    <Link to="/todos/active" className="nav-link">Active</Link>
                    <Link to="/todoscompleted" className="nav-link">Completed</Link>
                </nav>
            </div>
        </header>
    );
}
export default Header;