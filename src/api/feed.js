import axios from 'axios';

const fetchRecentFeed = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export { fetchRecentFeed };
