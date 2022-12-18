import { useState } from 'react';
import { Close } from '../../icons';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Search from '../Search/Search';
import './CreateProject.css';
import useUsers from '../../data/users';
import { useMemo } from 'react';

export default function CreateProject(props) {
  const users = useUsers();

  const [project, setProject] = useState('');
  const [search, setSearch] = useState('');
  const [addedUsers, setAddedUsers] = useState([]);

  const searchData = useMemo(
    () =>
      users
        .filter(
          (user) =>
            !addedUsers.map((addedUser) => addedUser.id).includes(user.id)
        )
        .map((user) => ({
          ...user,
          value: `${user.first_name} ${user.last_name} - ${user.email}`,
        })),
    [users, addedUsers]
  );

  return (
    <div className="create-project" {...props}>
      <form>
        <Input
          title="Project Name"
          placeholder="Project Name"
          required
          value={project}
          onChange={(e) => {
            setProject(e.target.value);
          }}
        />
        <Search
          title="Invite Users"
          data={searchData}
          placeholder="Search by name or email"
          required
          value={search}
          setValue={setSearch}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          onSelect={(val) => setAddedUsers((prev) => [...prev, val])}
        />
        <div className="users">
          {addedUsers.map((user) => (
            <span key={user.id} className="user">
              {`${user.first_name} ${user.last_name}`}
              <Close
                className="remove"
                onClick={() =>
                  setAddedUsers((prev) => prev.filter((u) => u.id !== user.id))
                }
              />
            </span>
          ))}
        </div>

        <Button type="submit" onSubmit={() => console.log('hi')}>
          Create Project
        </Button>
      </form>
    </div>
  );
}
