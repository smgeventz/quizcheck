import axios from 'axios';

// Use the environment variable for the base URL or fallback to localhost for development
const apiUrl = import.meta.env.NEXT_PUBLIC_API_BASE_URL;


const axiosInstance = axios.create({
    baseURL: apiUrl,  // Set the base URL here
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
    }
});

export default axiosInstance;
