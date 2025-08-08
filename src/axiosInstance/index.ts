import axios from "axios";


export const axiosInstance = axios.create(
    {
        baseURL: process.env.NEXT_PUBLIC_BASE_URL, // Set in .env
        timeout: 10000,
        headers: {
            'Content-Type': 'application/json',
        },
    }
)


// Optional: Add request interceptor
axiosInstance.interceptors.request.use(
    (config) => {
        // e.g., attach token
        // const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
        // if (token) {
        //     config.headers.Authorization = `Bearer ${token}`;
        // }
        return config;
    },
    (error) => Promise.reject(error)
);

// Optional: Add response interceptor
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        // Global error handling
        if (error.response?.status === 401) {
            // Redirect or handle unauthorized
        }
        return Promise.reject(error);
    }
);