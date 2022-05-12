import axios from 'axios';

export const axiosInst = axios.create({
    // baseURL: 'https://jsonplaceholder.typicode.com/',
    baseURL: 'http://localhost:3005/'
});
