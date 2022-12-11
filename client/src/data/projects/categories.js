import api from '../api';

const listProjectCategories = (projectId) => {
  if (!projectId) {
    return [];
  }
  return api.projects.categories.list().then((res) => res.json());
};

export default listProjectCategories;
