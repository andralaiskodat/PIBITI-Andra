import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';

function DetailWisata({
    destinations,
    favorites,
    toggleFavorite,
    tripPlan,
    addToTripPlan,
    removeFromTripPlan
}) {
    const { name } = useParams();
    const decodedName = decodeURIComponent(name);
    const destination = destinations.find((d) => d.name === decodedName);
    const [isFavorited, setIsFavorited] = useState(favorites.includes(decodedName));

    if (!destination) {
        return (
            <div className="text-center text-white mt-10">
                <p>Destinasi tidak ditemukan.</p>
                <Link to="/" className="text-yellow-300 underline">Kembali ke Beranda</Link>
            </div>
        );
    }

    const handleFavorite = () => {
        toggleFavorite(destination.name);
        setIsFavorited((prev) => !prev);
    };

    const isPlanned = tripPlan.includes(destination.name);

    return (
        <div className="max-w-4xl mx-auto p-6 text-white">
            <h2 className="text-3xl font-bold text-yellow-300 mb-4">{destination.name}</h2>

            <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-[300px] object-cover rounded-md mb-6"
            />

            <div className="mb-4 space-y-1">
                <p><strong>Lokasi:</strong> {destination.location}</p>
                <p><strong>Rating:</strong> {destination.rating}</p>
                <p><strong>Jam Buka:</strong> {destination.jam}</p>
                <p><strong>Harga Tiket:</strong> {destination.harga}</p>
            </div>

            <p className="mt-4 mb-6">{destination.deskripsi}</p>

            {/* Tombol Favorit */}
            <button
                onClick={handleFavorite}
                className={`mb-4 px-6 py-2 rounded-full text-sm font-medium transition duration-200 ${isFavorited
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-700 text-white hover:bg-gray-500'
                    }`}
            >
                {isFavorited ? '❤️ Favorit' : '🤍 Tambah Favorit'}
            </button>

            {/* Tombol Rencana Perjalanan */}
            {isPlanned ? (
                <button
                    onClick={() => removeFromTripPlan(destination.name)}
                    className="ml-4 px-6 py-2 rounded-full bg-red-500 text-white text-sm hover:bg-red-600 transition duration-200"
                >
                    ❌ Batalkan dari Rencana
                </button>
            ) : (
                <button
                    onClick={() => addToTripPlan(destination.name)}
                    className="ml-4 px-6 py-2 rounded-full bg-blue-600 text-white text-sm hover:bg-blue-700 transition duration-200"
                >
                    ➕ Tambahkan ke Rencana
                </button>
            )}

            <h3 className="text-2xl font-semibold mt-10 mb-3">Galeri</h3>
            <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
                {destination.gallery.map((img, idx) => (
                    <img
                        key={idx}
                        src={img}
                        alt={`gallery-${idx}`}
                        className="w-[150px] h-[150px] object-cover rounded"
                    />
                ))}
            </div>

            <Link to="/" className="mt-6 inline-block text-yellow-300 underline">
                ← Kembali ke Beranda
            </Link>
        </div>
    );
}

export default DetailWisata;
