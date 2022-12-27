import api from '../../api';
import { useEffect, useState } from 'react';

const listProjectUsers = async (id) => {
  return api.projects.users.list(id).then((res) => res.data);
};

const useProjectUsers = (id) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    if (id) {
      listProjectUsers(id).then((res) => setUsers(res));
    }
  }, [id]);
  return users;
};

export default useProjectUsers;
