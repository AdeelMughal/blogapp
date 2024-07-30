import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export const fetchUserPosts = (userId: number) => {
  return api.get(`/users/${userId}/posts`);
};

export const fetchUserDetails = (userId: number) => {
  return api.get(`/users/${userId}`);
};
