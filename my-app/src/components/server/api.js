import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5001' });

export const fetchEquipments = async (filters = {}) => {
  try {
    const params = new URLSearchParams(filters).toString();
    const response = await API.get(`/equipments?${params}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching equipments:', error.response?.data || error.message);
    throw new Error(error.response?.data?.error || 'Failed to fetch equipments');
  }
};
