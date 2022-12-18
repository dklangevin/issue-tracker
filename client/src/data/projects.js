import api from '../api';
import { useEffect, useState } from 'react';

const listProjects = async () => {
  return api.projects.list().then((res) => res.data);
};

const useProjects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    listProjects().then((res) => setProjects(res));
  }, []);
  return projects;
};

export default useProjects;
