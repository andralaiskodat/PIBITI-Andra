import { Link } from 'react-router-dom';

function Navbar({ title, searchQuery, onSearchChange }) {
    return (
        <nav className="w-screen max-w-full flex items-center justify-between px-8 py-4 bg-[#1f1f1f] text-white shadow-md box-border fixed top-0 z-50">
            {/* Kiri: Judul */}
            <div className="flex-shrink-0">
                <h1 className="text-xl text-[#ffcc00] m-0">{title}</h1>
            </div>

            {/* Tengah: Search */}
            <div className="flex-1 flex justify-center px-4">
                <input
                    type="text"
                    placeholder="Cari wisata..."
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className="w-full max-w-md bg-gray-800 text-white px-4 py-1.5 rounded-full border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
            </div>

            {/* Kanan: Navigasi */}
            <div className="flex gap-6 items-center">
                <Link
                    to="/"
                    className="text-white font-medium no-underline hover:underline"
                >
                    Beranda
                </Link>
                <Link
                    to="/favorites"
                    className="text-white font-medium no-underline hover:underline"
                >
                    Favorit
                </Link>
                <Link
                    to="/rencana"
                    className="text-white font-medium no-underline hover:underline"
                >
                    Rencana
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
