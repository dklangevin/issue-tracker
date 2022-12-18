import { useEffect, useState } from 'react';
import api from '../api';

const listUsers = async () => {
  return api.users.list().then((res) => res.data);
};

const useUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    listUsers().then((res) => setUsers(res));
  }, []);
  return users;
};

export default useUsers;
