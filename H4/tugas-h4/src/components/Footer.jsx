function Footer() {
    return (
        <footer className="w-full bg-[#1f1f1f] text-white text-center px-4 py-6 mt-12 text-sm border-t border-[#333]">
            <p>&copy; {new Date().getFullYear()} Destina Web. Semua hak dilindungi.</p>
            <p>
                Dibuat oleh{' '}
                <a
                    href="https://github.com/andralaiskodat/PIBITI-Andra.git"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#ffcc00] font-bold hover:underline"
                >
                    Tim Destina
                </a>
            </p>
        </footer>
    );
}

export default Footer;
