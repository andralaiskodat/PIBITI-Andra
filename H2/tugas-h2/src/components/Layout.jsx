import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div className="layout-container">
        <Navbar title="Destina Web" />
        <main className="main-content">
            <div className="content-center">
            {children}
            </div>
        </main>
        <Footer />
        </div>
    );
};

export default Layout;
