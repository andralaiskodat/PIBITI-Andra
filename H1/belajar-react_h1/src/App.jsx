import Navbar from './components/Navbar';
import DestinationCard from './components/DestinationCard';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Navbar title="Destina Web" /> 

      <div className="app-container">
        <div className="content-wrapper">
          <h2>Destinasi Populer</h2>
            <p className="app-description">
              Destina Web adalah aplikasi web yang membantu pengguna menemukan tempat wisata yang sedang tren di berbagai daerah Indonesia. 
              Aplikasi ini menampilkan daftar destinasi lengkap dengan lokasi, harga tiket, jam buka, rating, dan review dari pengunjung.
            </p>
          <div className="card-container">
            <DestinationCard
              name="Pantai Kuta"
              rating="⭐⭐⭐⭐⭐"
              location="Bali"
              image="https://images.pexels.com/photos/5345067/pexels-photo-5345067.jpeg"
            />
            <DestinationCard
              name="Gunung Bromo"
              rating="⭐⭐⭐⭐"
              location="Jawa Timur"
              image="https://images.pexels.com/photos/2609952/pexels-photo-2609952.jpeg"
            />
            <DestinationCard
              name="Labuan Bajo"
              rating="⭐⭐⭐⭐⭐"
              location="Flores"
              image="https://images.pexels.com/photos/12376211/pexels-photo-12376211.jpeg"
            />
            <DestinationCard
              name="Raja Ampat"
              rating="⭐⭐⭐⭐"
              location="Papua"
              image="https://images.pexels.com/photos/18080802/pexels-photo-18080802.jpeg"
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;
