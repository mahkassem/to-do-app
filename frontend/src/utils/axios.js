import axios from 'axios';

// Create an instance of Axios with custom configurations
export const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
	Authorization: 'Basic enVja2VyOjEyMzQ1Ng=='
  },
});