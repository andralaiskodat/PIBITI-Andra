import DestinationCard from './DestinationCard';

function TravelPlanPage({ travelPlan, destinations, removeFromPlan }) {
    const plannedDestinations = destinations.filter((d) =>
        travelPlan.includes(d.name)
    );

    return (
        <div className="max-w-6xl mx-auto px-4 py-8 mt-20 text-white">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">📍 Rencana Perjalanan Anda</h2>

            {plannedDestinations.length === 0 ? (
                <p className="text-center text-gray-400">
                    Belum ada destinasi yang ditambahkan ke rencana perjalanan.
                </p>
            ) : (
                <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
                    {plannedDestinations.map((item, index) => (
                        <DestinationCard
                            key={index}
                            {...item}
                            isFavorite={false}
                            toggleFavorite={() => removeFromPlan(item.name)}
                            isInPlan={true} // digunakan jika ingin custom tombol "Hapus dari Rencana"
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default TravelPlanPage;
