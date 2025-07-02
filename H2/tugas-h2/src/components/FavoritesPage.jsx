// src/components/FavoritesPage.jsx
import DestinationCard from './DestinationCard';

function FavoritesPage({ favorites, destinations, toggleFavorite }) {
    const favoriteDestinations = destinations.filter((d) =>
        favorites.includes(d.name)
    );

    return (
        <div className="content-wrapper">
            <h2>Daftar Favorit</h2>
            {favoriteDestinations.length === 0 ? (
                <p>Belum ada destinasi yang ditambahkan ke favorit.</p>
            ) : (
                <div className="card-container">
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
        </div>
    );
}

export default FavoritesPage;
