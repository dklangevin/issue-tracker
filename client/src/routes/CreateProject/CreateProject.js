import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createProject } from '../../data/projects';
import useUsers from '../../data/users';
import useProjectContext from '../../hooks/projectContext';
import { Close } from '../../icons';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import Search from '../../components/Search/Search';
import styles from './CreateProject.module.css';

export default function CreateProject(props) {
  const users = useUsers();

  const { setProject } = useProjectContext();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [search, setSearch] = useState('');
  const [addedUsers, setAddedUsers] = useState([]);

  const [projectError, setProjectError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');
  const [loading, setLoading] = useState(false);

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

  const isValid = ({ setErrors = false } = {}) => {
    if (name === '' || description === '') {
      if (setErrors) {
        if (name === '') {
          setProjectError('Must enter a project name');
        }
        if (description === '') {
          setDescriptionError('Must enter a project description');
        }
      }
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid({ setErrors: true })) {
      setProjectError('');
      setDescriptionError('');
      const body = {
        name,
        description,
        users: addedUsers.map((user) => user.id),
      };
      setLoading(true);
      createProject(body).then(() => {
        setLoading(false);
        setProject(name);
        navigate('/project');
      });
    }
  };

  return (
    <div className={styles.container} {...props}>
      <h3 className="title">Create New Project</h3>
      <form onSubmit={handleSubmit}>
        <Input
          title="Name"
          placeholder="Enter project name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          error={projectError}
        />
        <Input
          title="Description"
          placeholder="Enter project description"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          error={descriptionError}
        />
        <Search
          title="Invite Users"
          data={searchData}
          placeholder="Search by name or email"
          value={search}
          setValue={setSearch}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          onSelect={(val) => setAddedUsers((prev) => [...prev, val])}
        />
        <div className={styles.users}>
          {addedUsers.map((user) => (
            <span key={user.id} className={styles.user}>
              {`${user.first_name} ${user.last_name}`}
              <Close
                className={styles.remove}
                onClick={() =>
                  setAddedUsers((prev) => prev.filter((u) => u.id !== user.id))
                }
              />
            </span>
          ))}
        </div>
        <Button type="submit" disabled={!isValid()} loading={loading}>
          Create Project
        </Button>
      </form>
    </div>
  );
}
