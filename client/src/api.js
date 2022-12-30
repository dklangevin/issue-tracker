import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  timeout: 3000,
});

api.users = {
  list: async () => api.get('/users'),
  fetch: async (id) => api.get(`/users/${id}`),
  upload: async (id, body) => api.post(`/users/${id}/upload`, body),
};

api.issues = {
  list: async () => api.get('/issues'),
  fetch: async (id) => api.get(`/issues/${id}`),
  create: async (body) => api.post('/issues', body),
};

api.projects = {
  fetch: async (id) => api.get(`/projects/${id}`),
  list: async () => api.get('/projects'),
  create: async (body) => api.post('/projects', body),
  categories: {
    list: async (id) => api.get(`/projects/${id}/categories`),
  },
  users: {
    list: async (id) => api.get(`/projects/${id}/users`),
  },
};

export default api;
