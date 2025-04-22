import axios from "axios";

const BASE_URL = "http://localhost:8000";

const AxiosInstance = axios.create({
    baseURL : BASE_URL,
});

export const getBooks = async () => {
    try {
        const response = await AxiosInstance.get('api/books/');
        return response.data;
    }
    catch (error){
        console.error('Error fetching data  from the server', error);
        return [];
    }

};

export const getBookById = async(id) => {
    try {
        const response = await AxiosInstance.get(`api/books/${id}/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching data  from the server', error);
        return [];
    }
};


export { BASE_URL };