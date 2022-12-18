import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  timeout: 1000,
});

api.users = {
  list: async () => api.get('/users'),
  fetch: async (id) => api.fetch(`/users/${id}`),
};

api.issues = {
  list: async () => api.get('/issues'),
  fetch: async (id) => api.get(`/issues/${id}`),
  create: async (body) => api.post('/issues', body),
};

api.projects = {
  list: async () => api.get('/projects'),
  categories: {
    list: async (id) => api.get(`/projects/${id}/categories`),
  },
};

export default api;
