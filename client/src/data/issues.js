import api from '../api';

const listIssues = async () => {
  return api.issues.list().then((res) => res.json());
};

export const createIssue = async (body) => {
  await api.issues.create(body);
};

export default listIssues;
