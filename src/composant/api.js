// api.js

import axios from 'axios';

const baseURL = 'https://api.github.com';

const api = axios.create({
  baseURL,
});

export const searchUsers = async (query) => {
  try {
    const response = await api.get(`/search/users?q=${query}`);
    return response.data.items;
  } catch (error) {
    throw error;
  }
};

export const getUserDetails = async (username) => {
  try {
    const response = await api.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

