import axios from "axios";

export const axiosInst = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
})
