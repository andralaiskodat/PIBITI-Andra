import React from 'react';
import './Card.css'; // pastikan file CSS ada

function Card({ children }) {
    return (
        <div className="card-container">
        {children}
        </div>
    );
}

export default Card;
