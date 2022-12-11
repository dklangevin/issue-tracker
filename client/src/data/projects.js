import api from '../api';

const listProjects = () => {
  return api.projects.list().then((res) => res.json());
};

export default listProjects;
