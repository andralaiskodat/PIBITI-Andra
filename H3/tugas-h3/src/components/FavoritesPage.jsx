import DestinationCard from './DestinationCard';

function FavoritesPage({ favorites, destinations, toggleFavorite }) {
    const favoriteDestinations = destinations.filter((d) =>
        favorites.includes(d.name)
    );

    return (
        <section className="w-full max-w-7xl mx-auto px-4 py-10">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-yellow-400 mb-2 drop-shadow">
                    💖 Daftar Favorit Anda
                </h2>
                <p className="text-gray-300">
                    Berikut adalah destinasi wisata yang telah Anda tambahkan ke favorit.
                </p>
            </div>

            {favoriteDestinations.length === 0 ? (
                <p className="text-center text-gray-400">
                    Belum ada destinasi yang ditambahkan ke favorit.
                </p>
            ) : (
                <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-x-4 gap-y-6">
                    {favoriteDestinations.map((item, index) => (
                        <DestinationCard
                            key={index}
                            {...item}
                            isFavorite={true}
                            toggleFavorite={() => toggleFavorite(item.name)}
                        />
                    ))}
                </div>
            )}
        </section>
    );
}

export default FavoritesPage;
