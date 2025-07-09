// src/api/axiosInstance.js

import axios from 'axios';

// Membuat instance axios dengan konfigurasi default
const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com', // Base URL untuk semua request
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosInstance;