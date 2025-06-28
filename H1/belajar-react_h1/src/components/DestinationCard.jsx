function DestinationCard({ name, rating, location, image }) {
    return (
        <div className="destination-card">
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <h2>{rating}</h2>
            <p>{location}</p>
        </div>
    );
}

export default DestinationCard;
