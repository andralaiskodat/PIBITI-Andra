import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import DestinationCard from './components/DestinationCard';
import FavoritesPage from './components/FavoritesPage';
import './App.css';

function App() {
  const [destinations, setDestinations] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    fetch('/data.json')
      .then((res) => res.json())
      .then((data) => {
        setDestinations(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Gagal memuat data destinasi:', err);
        setLoading(false);
      });
  }, []);

  const toggleFavorite = (destinationName) => {
    setFavorites((prev) =>
      prev.includes(destinationName)
        ? prev.filter((name) => name !== destinationName)
        : [...prev, destinationName]
    );
  };

  const filteredData =
    filter === 'All'
      ? destinations
      : destinations.filter((d) => d.location === filter);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <div className="content-wrapper">
              <h2>Destinasi Populer</h2>
              <p className="app-description">
                Destina Web adalah aplikasi web yang membantu pengguna menemukan tempat wisata yang sedang tren di Indonesia.
              </p>

              <div className="filter-container">
                <label htmlFor="lokasi">Filter Lokasi:</label>
                <select
                  id="lokasi"
                  onChange={(e) => setFilter(e.target.value)}
                  value={filter}
                >
                  <option value="All">Semua</option>
                  <option value="Bali">Bali</option>
                  <option value="Yogyakarta">Yogyakarta</option>
                  <option value="Jawa Timur">Jawa Timur</option>
                  <option value="Jawa Tengah">Jawa Tengah</option>
                  <option value="Nusa Tenggara Timur">Nusa Tenggara Timur</option>
                  <option value="Sumatera">Sumatera</option>
                </select>
              </div>

              {loading ? (
                <p>Memuat data destinasi...</p>
              ) : (
                <div className="card-container">
                  {filteredData.length === 0 ? (
                    <p>Tidak ada destinasi untuk filter ini.</p>
                  ) : (
                    filteredData.map((item, index) => (
                      <DestinationCard
                        key={index}
                        {...item}
                        isFavorite={favorites.includes(item.name)}
                        toggleFavorite={() => toggleFavorite(item.name)}
                      />
                    ))
                  )}
                </div>
              )}
            </div>
          </Layout>
        }
      />

      <Route
        path="/favorites"
        element={
          <Layout>
            <FavoritesPage
              favorites={favorites}
              destinations={destinations}
              toggleFavorite={toggleFavorite}
            />
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
