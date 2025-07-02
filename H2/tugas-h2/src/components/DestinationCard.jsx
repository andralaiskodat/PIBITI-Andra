import React, { useState } from 'react';
import './DestinationCard.css';

function DestinationCard({
    name,
    location,
    image,
    rating,
    jam,
    harga,
    deskripsi,
    gallery,
    isFavorite,
    toggleFavorite,
}) {
    return (
        <div className="destination-card">
            <img className="destination-image" src={image} alt={name} />
            <div className="destination-info">
                <h3>{name}</h3>
                <p className="rating">{rating}</p>
                <p>{location}</p>
            </div>

            <div className="destination-overlay">
                <h4>{name}</h4>
                <div className="gallery">
                    <div className="gallery-track">
                        {[...gallery, ...gallery].map((img, idx) => (
                            <img key={idx} src={img} alt={`gallery-${idx}`} />
                        ))}
                    </div>
                </div>
                <p><strong>Jam Buka:</strong> {jam}</p>
                <p><strong>Harga Tiket:</strong> {harga}</p>
                <p>{deskripsi}</p>
                <button className={`favorite-button ${isFavorite ? 'active' : ''}`} onClick={toggleFavorite}>
                    {isFavorite ? '❤️ Favorit' : '🤍 Tambah Favorit'}
                </button>
            </div>
        </div>
    );
}
export default DestinationCard;