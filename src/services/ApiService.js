import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const apiClient = axios.create({
  baseURL: `${API_BASE_URL}/api`,
  headers: {
    "Content-Type": "application/json",
  },

});

apiClient.interceptors.response.use(
  (response) => response
);

export const getRequest = async (endpoint, headers = {}) => {
  const response = await apiClient.get(endpoint, { headers });
  return response.data;
};

export const postRequest = async (endpoint, data, headers = {}) => {
  const response = await apiClient.post(endpoint, data, { headers });
  return response.data;
};

export const putRequest = async (endpoint, data, headers = {}) => {
  const response = await apiClient.put(endpoint, data, { headers });
  return await response.data;
};

export const deleteRequest = async (endpoint, headers = {}) => {
  const response = await apiClient.delete(endpoint, { headers });
  return await response.data;
};

// form submit services
export const postForm = async (endpoint, data, headers = {}) => {
  const response = await apiClient.postForm(endpoint, data, { headers });
  return await response.data;
};

export const putForm = async (endpoint, data, headers = {}) => {
  const response = await apiClient.putForm(endpoint, data, { headers });
  return await response.data;
};

