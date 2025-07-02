import React from 'react';

const Card = ({ title, children }) => {
    return (
        <div style={{
        backgroundColor: '#ffffff',
        border: '1px solid #ccc',
        borderRadius: '12px',
        padding: '50px',
        margin: '20px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        maxWidth: '300px'
        }}>
        <h2>{title}</h2>
        <div>{children}</div>
        </div>
    );
};

export default Card;
