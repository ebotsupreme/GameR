import axios from 'axios';
import Config from 'react-native-config';

/**
 *
 */
const api = axios.create({
  // baseURL: 'https://jsonplaceholder.typicode.com', // example
  baseURL: Config.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export { api };
