import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children, searchQuery, onSearchChange }) => {
    return (
        <div className="flex flex-col min-h-screen bg-[#0d1117] text-white">
        {/* Kirim props ke Navbar */}
        <Navbar
            title="Destina Web"
            searchQuery={searchQuery}
            onSearchChange={onSearchChange}
        />
        
        <main className="flex-1 px-4 py-8">
            <div className="max-w-6xl w-full mx-auto">{children}</div>
        </main>

        <Footer />
        </div>
    );
};

export default Layout;
