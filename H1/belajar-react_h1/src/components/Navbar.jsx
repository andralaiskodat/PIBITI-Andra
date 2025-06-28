import './Navbar.css';

function Navbar({ title }) {
    return (
        <nav className="navbar">
        <h1 className="navbar-title">{title}</h1>
        <ul className="navbar-menu">
            <li><a href="#">Beranda</a></li>
            <li><a href="#">Populer</a></li>
            <li><a href="#">Kontak</a></li>
        </ul>
        </nav>
    );
}

export default Navbar;
