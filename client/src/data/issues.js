import api from '../api';
import { useState, useEffect } from 'react';

const listIssues = async () => {
  return api.issues.list().then((res) => res.data);
};

export const createIssue = async (body) => {
  await api.issues.create(body);
};

const useIssues = () => {
  const [issues, setIssues] = useState([]);
  useEffect(() => {
    listIssues().then((res) => setIssues(res));
  }, []);
  return issues;
};

export default useIssues;
