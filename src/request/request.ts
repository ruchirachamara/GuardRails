import axios from 'axios';

import { API_BASE_URL } from '../config/serverApiConfig';

const errorHandler = {
    success: false,
    result: null,
    message: 'There is a server error',
};

const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    timeout: 30000,
    withCredentials: false,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, PATCH, OPTIONS',
        mode: 'no-cors',
    },
});

const request = {
    get: async (entity: string) => {
        try {
            const response = await axiosInstance.get(entity);
            return { success: true, result: response.data };
        } catch (error) {
            return errorHandler;
        }
    },
    post: async (entity: string, payload: any) => {
        try {
            const response = await axiosInstance.post(entity, payload);
            return { success: true, result: response.data };
        } catch (error) {
            return errorHandler;
        }
    },
    put: async (entity: string, payload: any) => {
        try {
            const response = await axiosInstance.put(entity, payload);
            return { success: true, result: response.data };
        } catch (error) {
            return errorHandler;
        }
    }, 
    delete: async (entity: string) => {
        try {
            const response = await axiosInstance.delete(entity);
            return { success: true, result: response.data };
        } catch (error) {
            return errorHandler;
        }
    }, 
};

export default request;
