import axios from 'axios';
import { API_CONFIG } from './config';

export const api = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'text/csv',
  },
  timeout: 10000,
});

// Add response interceptor for better error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Add custom error handling here
    if (error.response?.status === 429) {
      // Handle rate limiting
      console.warn('Rate limit reached for sensor API');
    }
    return Promise.reject(error);
  }
);