// src/Header.jsx
function Header(props) { 
const { title } = props;
    return (
        <header>
        <h1>{title}</h1>
        <p>Ini adalah header aplikasi kita.</p>
        </header>
    );
}

export default Header;