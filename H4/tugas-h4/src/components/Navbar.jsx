import { Link } from 'react-router-dom';

function Navbar({ title, searchQuery, onSearchChange, user, onLogout }) {
    return (
        <nav className="w-screen max-w-full flex flex-wrap items-center px-8 py-4 bg-[#1f1f1f] text-white shadow-md fixed top-0 z-50">
            {/* Kiri: Judul */}
            <div className="w-full md:w-1/3 mb-2 md:mb-0">
                <h1 className="text-2xl font-bold text-[#ffcc00] tracking-wide drop-shadow-sm">
                    {title}
                </h1>
            </div>

            {/* Tengah: Search */}
            <div className="w-full md:w-1/3 mb-3 md:mb-0 flex justify-center">
                <input
                    type="text"
                    placeholder="Cari wisata..."
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className="w-full max-w-md bg-gray-800 text-white px-4 py-1.5 rounded-full border border-gray-600 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
            </div>

            {/* Kanan: Navigasi + Auth */}
            <div className="w-full md:w-1/3 flex flex-wrap justify-end items-center gap-4 text-sm">
                {/* Menu */}
                <div className="flex gap-4">
                    <NavItem to="/" label="Beranda" />
                    <NavItem to="/favorites" label="Favorit" />
                    <NavItem to="/rencana" label="Rencana" />
                    <NavItem to="/trip-plan" label="Perjalanan Saya" />
                    <NavItem to="/gallery-trip" label="Galeri" />
                </div>

                {/* Auth */}
                {user ? (
                    <div className="flex items-center gap-2 text-xs">
                        <span className="text-yellow-300 truncate max-w-[120px]">
                            👤 {user.email}
                        </span>
                        <button
                            onClick={onLogout}
                            className="text-red-400 hover:underline"
                        >
                            Logout
                        </button>
                    </div>
                ) : (
                    <div className="flex gap-3">
                        <Link to="/login" className="hover:underline text-sm">Login</Link>
                        <Link to="/register" className="hover:underline text-sm">Register</Link>
                    </div>
                )}
            </div>
        </nav>
    );
}

function NavItem({ to, label }) {
    return (
        <Link
            to={to}
            className="relative font-medium after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-yellow-400 after:transition-all after:duration-300 hover:after:w-full"
        >
            {label}
        </Link>
    );
}

export default Navbar;
