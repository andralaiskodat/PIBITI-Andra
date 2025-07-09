import { useState, useEffect } from 'react';

function TripPlanPage({ destinations, tripPlan, plans, setPlans }) {
    const [formData, setFormData] = useState({
        id: null,
        title: '',
        date: '',
        notes: '',
        selectedDestinations: [],
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSelectDestination = (e) => {
        const options = Array.from(e.target.selectedOptions).map((opt) => opt.value);
        setFormData((prev) => ({ ...prev, selectedDestinations: options }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.title || !formData.date) return;

        if (formData.id !== null) {
            setPlans((prev) =>
                prev.map((plan) => (plan.id === formData.id ? { ...formData } : plan))
            );
        } else {
            setPlans((prev) => [...prev, { ...formData, id: Date.now() }]);
        }

        setFormData({ id: null, title: '', date: '', notes: '', selectedDestinations: [] });
    };

    const handleEdit = (plan) => {
        setFormData(plan);
    };

    const handleDelete = (id) => {
        setPlans((prev) => prev.filter((plan) => plan.id !== id));
    };

    const tripPlanDestinations = destinations.filter((d) =>
        tripPlan.includes(d.name)
    );

    return (
        <div className="max-w-4xl mx-auto p-6 text-white">
            <h2 className="text-2xl font-bold text-yellow-400 mb-6">📅 Buat Rencana Detail</h2>

            <form onSubmit={handleSubmit} className="mb-8 bg-gray-800 p-4 rounded-lg space-y-4">
                <div>
                    <label className="block mb-1">Judul Rencana</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="w-full bg-gray-900 text-white px-4 py-2 rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block mb-1">Tanggal</label>
                    <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full bg-gray-900 text-white px-4 py-2 rounded"
                        required
                    />
                </div>

                <div>
                    <label className="block mb-1">Catatan</label>
                    <textarea
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        rows={3}
                        className="w-full bg-gray-900 text-white px-4 py-2 rounded"
                    />
                </div>

                <div>
                    <label className="block mb-1">Pilih Destinasi dari Rencana</label>
                    <select
                        multiple
                        value={formData.selectedDestinations}
                        onChange={handleSelectDestination}
                        className="w-full bg-gray-900 text-white px-4 py-2 rounded"
                    >
                        {tripPlanDestinations.length > 0 ? (
                            tripPlanDestinations.map((dest, idx) => (
                                <option key={idx} value={dest.name}>
                                    {dest.name}
                                </option>
                            ))
                        ) : (
                            <option disabled>Belum ada destinasi dalam Rencana Perjalanan</option>
                        )}
                    </select>
                    <p className="text-sm text-gray-400 mt-1">*Tahan Ctrl / Cmd untuk pilih lebih dari satu</p>
                </div>

                <button
                    type="submit"
                    className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded hover:bg-yellow-300 transition"
                >
                    {formData.id !== null ? '💾 Simpan Perubahan' : '➕ Tambah Rencana'}
                </button>
            </form>

            <div className="space-y-6">
                {plans.length === 0 ? (
                    <p className="text-gray-400">Belum ada rencana detail dibuat.</p>
                ) : (
                    plans.map((plan) => (
                        <div key={plan.id} className="bg-gray-700 p-4 rounded shadow-sm">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="text-xl font-semibold text-yellow-300">{plan.title}</h3>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => handleEdit(plan)}
                                        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-400"
                                    >
                                        ✏️ Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(plan.id)}
                                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-400"
                                    >
                                        🗑️ Hapus
                                    </button>
                                </div>
                            </div>
                            <p className="text-sm text-gray-300 mb-2">📅 {plan.date}</p>
                            <p className="text-white mb-2">{plan.notes}</p>
                            <div className="text-sm text-gray-200">
                                <strong>Destinasi:</strong> {plan.selectedDestinations.join(', ')}
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

export default TripPlanPage;
