import axios from "axios";

// Backend is on port 8081
const API_BASE_URL = "http://localhost:8081/api/items";

export const getItems = () => axios.get(API_BASE_URL);
export const createItem = (data) => axios.post(API_BASE_URL, data);
export const updateItem = (id, data) => axios.put(`${API_BASE_URL}/${id}`, data);
export const deleteItem = (id) => axios.delete(`${API_BASE_URL}/${id}`);
