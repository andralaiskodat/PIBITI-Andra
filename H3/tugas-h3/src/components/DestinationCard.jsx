import React from 'react';
import { Link } from 'react-router-dom';
import '../animation.css';

function DestinationCard({
    name,
    location,
    image,
    rating,
    jam,
    harga,
    deskripsi,
    gallery,
}) {
    return (
        <div className="group relative w-[260px] rounded-xl overflow-hidden bg-[#1e1e1e] border border-[#333] shadow-md transition-transform duration-300 origin-center z-10 will-change-transform hover:scale-105 hover:z-30 hover:shadow-lg">

            {/* Navigasi ke halaman detail */}
            <Link to={`/detail/${encodeURIComponent(name)}`} className="block focus:outline-none">
                {/* Gambar & Info Singkat */}
                <img className="w-full h-[180px] object-cover" src={image} alt={name} />
                <div className="p-2.5">
                    <h3 className="text-yellow-300 my-1 text-lg font-semibold">{name}</h3>
                    <p className="text-yellow-400">{rating}</p>
                    <p className="text-gray-300 text-sm">{location}</p>
                </div>

                {/* Overlay saat hover */}
                <div className="absolute inset-0 bg-black/85 text-white p-5 opacity-0 pointer-events-none transition-opacity duration-300 overflow-y-auto text-sm group-hover:opacity-100 group-hover:pointer-events-auto scrollbar-hide">
                    <h4 className="text-lg font-semibold mb-2">{name}</h4>

                    {/* Galeri scroll */}
                    <div className="overflow-hidden w-full h-[120px] mt-2 rounded-sm relative">
                        <div className="flex gap-2 animate-scrollGallery group-hover:animate-running">
                            {[...gallery, ...gallery].map((img, idx) => (
                                <img
                                    key={idx}
                                    src={img}
                                    alt={`gallery-${idx}`}
                                    className="w-[100px] h-[100px] object-cover rounded-sm shrink-0"
                                />
                            ))}
                        </div>
                    </div>

                    <p className="mt-2"><strong>Jam Buka:</strong> {jam}</p>
                    <p><strong>Harga Tiket:</strong> {harga}</p>
                    <p className="mt-2">{deskripsi}</p>
                </div>
            </Link>
        </div>
    );
}

export default DestinationCard;
