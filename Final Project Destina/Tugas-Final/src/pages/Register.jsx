import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        if (!email || !password) {
            alert('Lengkapi email dan password!');
            return;
        }

        const users = JSON.parse(localStorage.getItem('registeredUsers')) || [];
        const exists = users.find((u) => u.email === email);

        if (exists) {
            alert('Email sudah terdaftar!');
            return;
        }

        users.push({ email, password });
        localStorage.setItem('registeredUsers', JSON.stringify(users));

        alert('Registrasi berhasil! Silakan login.');
        navigate('/login');
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#0d1117] text-white">
            <form
                onSubmit={handleRegister}
                className="bg-gray-800 p-8 rounded-md shadow-md w-full max-w-sm space-y-4"
            >
                <h2 className="text-xl font-bold text-yellow-400 text-center">Daftar Akun</h2>

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 rounded bg-gray-900 border border-gray-600"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full px-4 py-2 rounded bg-gray-900 border border-gray-600"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button
                    type="submit"
                    className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-2 rounded"
                >
                    Register
                </button>
            </form>
        </div>
    );
}

export default Register;
