// src/components/Navbar.jsx
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar({ title }) {
    return (
        <nav className="navbar">
        <h1 className="navbar-title">{title}</h1>
        <ul className="navbar-menu">
            <li><Link to="/">Beranda</Link></li>
            <li><Link to="/favorites">Favorit</Link></li>
        </ul>
        </nav>
    );
}

export default Navbar;
