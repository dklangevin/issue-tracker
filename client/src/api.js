import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  timeout: 1000,
});

api.users = {
  list: () => api.get('/users'),
  fetch: (id) => api.fetch(`/users/${id}`),
};

api.issues = {
  list: () => api.get('/issues'),
  fetch: (id) => api.get(`/issues/${id}`),
  create: (body) => api.post('/issues', body),
};

api.project = {
  list: () => api.get(`/projects`),
  categories: {
    list: (id) => api.get(`/projects/${id}/categories`),
  },
};
