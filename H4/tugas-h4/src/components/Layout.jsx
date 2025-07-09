import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children, searchQuery, onSearchChange, user, onLogout }) => {
    return (
        <div className="flex flex-col min-h-screen bg-[#0d1117] text-white">
            <Navbar
                title={
                    <span className="text-2xl font-extrabold bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500 bg-clip-text text-transparent tracking-wide">
                        ✨ Destina Web
                    </span>
                }
                searchQuery={searchQuery}
                onSearchChange={onSearchChange}
                user={user}
                onLogout={onLogout}
            />

            <main className="flex-1 px-4 py-8 mt-24">
                <div className="max-w-6xl w-full mx-auto">
                    {children}
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Layout;
