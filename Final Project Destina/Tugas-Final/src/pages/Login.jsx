import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login({ onLogin }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Ambil user dari localStorage
        const users = JSON.parse(localStorage.getItem('registeredUsers')) || [];
        const foundUser = users.find(user => user.email === email && user.password === password);

        if (foundUser) {
            localStorage.setItem('loggedInUser', JSON.stringify(foundUser));
            onLogin(foundUser); // trigger ke App.jsx
            navigate('/');
        } else {
            setError('Email atau password salah!');
        }
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-[#0d1117] text-white">
            <form onSubmit={handleSubmit} className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-yellow-400">Login</h2>

                {error && <p className="text-red-400 mb-4 text-sm">{error}</p>}

                <div className="mb-4">
                    <label className="block text-sm mb-1">Email</label>
                    <input
                        type="email"
                        className="w-full p-2 rounded bg-gray-800 border border-gray-700"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-sm mb-1">Password</label>
                    <input
                        type="password"
                        className="w-full p-2 rounded bg-gray-800 border border-gray-700"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded"
                >
                    Login
                </button>
            </form>
        </div>
    );
}

export default Login;
