import api from '../api';
import { useEffect, useState } from 'react';

const fetchUser = async (id) => {
  return api.users.fetch(id).then((res) => res.data);
};

const useUser = (id) => {
  const [user, setUser] = useState();
  useEffect(() => {
    if (id) {
      fetchUser(id).then((res) => setUser(res));
    }
  }, [id]);
  return user;
};

export default useUser;
