import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Destina Web. Semua hak dilindungi.</p>
            <p>
                Dibuat oleh <a href="https://github.com/andralaiskodat/PIBITI-Andra.git" target="_blank" rel="noreferrer">Tim Destina</a>
            </p>
        </footer>
    );
}

export default Footer;
