import api from '../api';
import { useEffect, useState } from 'react';

const fetchProject = async (id) => {
  return api.projects.fetch(id).then((res) => res.data);
};

const useProject = (id) => {
  const [project, setProject] = useState();
  useEffect(() => {
    if (id) {
      fetchProject(id).then((res) => setProject(res));
    }
  }, [id]);
  return project;
};

export default useProject;
