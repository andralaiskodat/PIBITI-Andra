import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Layout from './components/Layout';
import DestinationCard from './components/DestinationCard';
import FavoritesPage from './components/FavoritesPage';
import FadeInOnScroll from './components/FadeInOnScroll';
import DetailWisata from './components/DetailWisata';
import TravelPlanPage from './components/TravelPlanPage';
import TripPlanPage from './components/TripPlanPage';
import GalleryTrip from './components/GalleryTrip';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';

function App() {
  const [destinations, setDestinations] = useState([]);
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem('favorites')) || [];
  });
  const [tripPlan, setTripPlan] = useState(() => {
    return JSON.parse(localStorage.getItem('travelPlan')) || [];
  });
  const [galleryData, setGalleryData] = useState(() => {
    return JSON.parse(localStorage.getItem('galleryData')) || {};
  });
  const [plans, setPlans] = useState(() => {
    return JSON.parse(localStorage.getItem('tripPlans')) || [];
  });
  const [user, setUser] = useState(() => {
    return JSON.parse(localStorage.getItem('loggedInUser')) || null;
  });

  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    setUser(null);
  };

  useEffect(() => {
    axios.get('/data.json')
      .then((res) => {
        setDestinations(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Gagal memuat data destinasi:', err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem('travelPlan', JSON.stringify(tripPlan));
  }, [tripPlan]);

  useEffect(() => {
    localStorage.setItem('galleryData', JSON.stringify(galleryData));
  }, [galleryData]);

  useEffect(() => {
    localStorage.setItem('tripPlans', JSON.stringify(plans));
  }, [plans]);

  const addToTripPlan = (destinationName) => {
    if (!tripPlan.includes(destinationName)) {
      setTripPlan((prev) => [...prev, destinationName]);
    }
  };

  const removeFromTripPlan = (destinationName) => {
    setTripPlan((prev) => prev.filter((name) => name !== destinationName));
  };

  const toggleFavorite = (destinationName) => {
    setFavorites((prev) =>
      prev.includes(destinationName)
        ? prev.filter((name) => name !== destinationName)
        : [...prev, destinationName]
    );
  };

  const filteredData = destinations.filter((d) => {
    const matchesLocation = filter === 'All' || d.location === filter;
    const matchesSearch =
      d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.deskripsi.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesLocation && matchesSearch;
  });

  const trendingDestinations = destinations.filter((d) => d.trending);

  useEffect(() => {
    if (trendingDestinations.length === 0) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % trendingDestinations.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [trendingDestinations]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout searchQuery={searchQuery} onSearchChange={setSearchQuery} user={user} onLogout={handleLogout}>
            <section className="w-full max-w-7xl mx-auto px-4 py-8">
              {!loading && trendingDestinations.length > 0 && (
                <div className="relative mb-10 rounded-xl overflow-hidden shadow-lg h-[450px]">
                  {trendingDestinations.map((item, index) => (
                    <img
                      key={index}
                      src={item.image}
                      alt={item.name}
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                        index === currentSlide ? 'opacity-100 blur-0 z-10' : 'opacity-0 blur-md scale-105 z-0'
                      }`}
                    />
                  ))}
                  <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-6 z-20">
                    <h2 className="text-white text-3xl font-bold drop-shadow mb-2">
                      🌟 {trendingDestinations[currentSlide].name}
                    </h2>
                    <p className="text-white text-sm max-w-xl drop-shadow">
                      {trendingDestinations[currentSlide].deskripsi.slice(0, 120)}...
                    </p>
                  </div>
                </div>
              )}

              <div className="text-center mb-10">
                <h1 className="text-4xl font-bold text-yellow-400 drop-shadow mb-4">
                  Temukan Destinasi Terbaik 🌴
                </h1>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                  Jelajahi berbagai tempat wisata menarik dari seluruh Indonesia – mulai dari pantai eksotis Bali hingga budaya unik Nusa Tenggara.
                </p>
              </div>

              <div className="flex justify-center mb-12">
                <div className="flex items-center gap-4 bg-gray-800 px-6 py-3 rounded-full shadow-md">
                  <label htmlFor="lokasi" className="text-white font-medium">
                    Filter Lokasi:
                  </label>
                  <select
                    id="lokasi"
                    onChange={(e) => setFilter(e.target.value)}
                    value={filter}
                    className="bg-gray-900 text-white border border-gray-600 rounded px-4 py-1.5 focus:outline-none focus:ring-2 focus:ring-yellow-400"
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
              </div>

              {loading ? (
                <p className="text-white text-center">Memuat data destinasi...</p>
              ) : (
                <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-x-4 gap-y-6">
                  {filteredData.length === 0 ? (
                    <p className="text-gray-400 text-center col-span-full">
                      Tidak ada destinasi untuk filter ini.
                    </p>
                  ) : (
                    filteredData.map((item, index) => (
                      <FadeInOnScroll key={index} delay={index * 100}>
                        <DestinationCard
                          {...item}
                          isFavorite={favorites.includes(item.name)}
                          toggleFavorite={() => toggleFavorite(item.name)}
                        />
                      </FadeInOnScroll>
                    ))
                  )}
                </div>
              )}
            </section>
          </Layout>
        }
      />

      {/* Route lainnya */}
      <Route
        path="/favorites"
        element={
          <Layout searchQuery={searchQuery} onSearchChange={setSearchQuery} user={user} onLogout={handleLogout}>
            <FavoritesPage favorites={favorites} destinations={destinations} toggleFavorite={toggleFavorite} />
          </Layout>
        }
      />
      <Route
        path="/rencana"
        element={
          <Layout searchQuery={searchQuery} onSearchChange={setSearchQuery} user={user} onLogout={handleLogout}>
            <TravelPlanPage travelPlan={tripPlan} destinations={destinations} removeFromPlan={removeFromTripPlan} />
          </Layout>
        }
      />
      <Route
        path="/detail/:name"
        element={
          <Layout searchQuery={searchQuery} onSearchChange={setSearchQuery} user={user} onLogout={handleLogout}>
            <DetailWisata
              destinations={destinations}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
              tripPlan={tripPlan}
              addToTripPlan={addToTripPlan}
              removeFromTripPlan={removeFromTripPlan}
            />
          </Layout>
        }
      />
      <Route
        path="/trip-plan"
        element={
          <Layout searchQuery={searchQuery} onSearchChange={setSearchQuery} user={user} onLogout={handleLogout}>
            <TripPlanPage
              destinations={destinations}
              tripPlan={tripPlan}
              plans={plans}
              setPlans={setPlans}
            />
          </Layout>
        }
      />
      <Route
        path="/gallery-trip"
        element={
          <Layout searchQuery={searchQuery} onSearchChange={setSearchQuery} user={user} onLogout={handleLogout}>
            <GalleryTrip travelPlan={tripPlan} galleryData={galleryData} setGalleryData={setGalleryData} />
          </Layout>
        }
      />
      <Route
        path="/login"
        element={
          <LoginPage
            onLogin={(user) => {
              setUser(user);
              localStorage.setItem('loggedInUser', JSON.stringify(user));
            }}
          />
        }
      />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
