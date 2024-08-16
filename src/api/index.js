import axios from "axios";

const api = axios.create ({
    baseURL:"http://192.168.6.175:3001"
})

export default api;
