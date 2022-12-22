import api from '../../api';

const listProjectCategories = async (projectId) => {
  if (!projectId) {
    return [];
  }
  return api.projects.categories.list().then((res) => res.data);
};

export default listProjectCategories;
