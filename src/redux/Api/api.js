import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://water-backend-4k0b.onrender.com',
});

