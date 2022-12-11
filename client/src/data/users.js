import api from '../api';

const listUsers = () => {
  return api.users.list().then((res) => res.json());
};

export default listUsers;
