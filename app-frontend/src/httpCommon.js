import axios from "axios";

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: import.meta.env.API_APP_BASE_URL,
});

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originRequest = error.config;
        if((error.response.status === 401 || error.response.status === 419) && !originRequest._retry){
            console.log('unauthenticated');
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;