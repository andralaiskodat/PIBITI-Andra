import { useState } from 'react';

function GalleryTrip({ travelPlan, galleryData, setGalleryData }) {
    const [selectedDestination, setSelectedDestination] = useState('');
    const [images, setImages] = useState([]);

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files).slice(0, 5);
        const previews = files.map((file) => URL.createObjectURL(file));
        setImages(previews);
        setGalleryData({
            ...galleryData,
            [selectedDestination]: previews,
        });
    };

    const handleRemoveImage = (index) => {
        const updated = [...images];
        updated.splice(index, 1);
        setImages(updated);
        setGalleryData({
            ...galleryData,
            [selectedDestination]: updated,
        });
    };

    return (
        <div className="max-w-5xl mx-auto px-4 py-16 text-white">
            <h2 className="text-4xl font-bold text-yellow-400 mb-8 text-center">📸 Galeri Perjalanan Anda</h2>

            {/* Pilih Destinasi */}
            <div className="mb-10 text-center">
                <label className="block text-lg font-medium mb-2">🎯 Pilih Destinasi</label>
                <select
                    value={selectedDestination}
                    onChange={(e) => {
                        const value = e.target.value;
                        setSelectedDestination(value);
                        setImages(galleryData[value] || []);
                    }}
                    className="bg-gray-800 border border-gray-600 text-white rounded-full px-6 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                >
                    <option value="">-- Pilih Destinasi --</option>
                    {travelPlan.map((dest, idx) => (
                        <option key={idx} value={dest}>{dest}</option>
                    ))}
                </select>
            </div>

            {/* Upload Gambar */}
            {selectedDestination && (
                <div className="text-center">
                    <label className="inline-block mb-3 font-medium">🖼️ Unggah Foto Favorit Anda</label>
                    <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleFileChange}
                        className="block mx-auto text-sm file:bg-yellow-400 file:text-black file:rounded-full file:px-4 file:py-1.5 file:font-medium file:border-none cursor-pointer hover:file:bg-yellow-300"
                    />
                    <p className="text-sm text-gray-400 mt-2 mb-6">Maksimal 5 gambar per destinasi.</p>

                    {/* Gambar Preview */}
                    <div className="flex flex-wrap gap-6 justify-center">
                        {images.map((src, index) => (
                            <div
                                key={index}
                                className="relative group w-[160px] h-[160px] rounded-xl overflow-hidden shadow-lg border border-gray-600"
                            >
                                <img
                                    src={src}
                                    alt={`preview-${index}`}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                                <button
                                    onClick={() => handleRemoveImage(index)}
                                    className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full hover:bg-red-600 transition-all duration-300"
                                    title="Hapus"
                                >
                                    ✕
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default GalleryTrip;
