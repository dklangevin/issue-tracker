import classNames from 'classnames';
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/Input/Input';
import TextArea from '../../components/TextArea/TextArea';
import useProject from '../../data/project';
import { createProject } from '../../data/projects';
import useProjectUsers from '../../data/projects/users';
import useProjectContext from '../../hooks/projectContext';
import { Close } from '../../icons';
import AvatarUpload from '../AvatarUpload/AvatarUpload';
import Button from '../Button/Button';
import { InviteUsers } from '../InviteUsers/InviteUsers';
import styles from './Project.module.css';

export default function Project({ create = false, ...props }) {
  const { project: id, setProject } = useProjectContext();
  const project = useProject(create ? null : id);
  const projectUsers = useProjectUsers(id);

  const [newProject, setNewProject] = useState({
    name: '',
    description: '',
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [addedUsers, setAddedUsers] = useState([]);
  const navigate = useNavigate();

  const { token = '', name = '', description = '' } = project || {};

  const validators = {
    name: {
      func: (val) => val !== '',
      message: 'Project name is required',
    },
    description: {
      func: (val) => val !== '',
      message: 'Project description is required',
    },
  };

  const validate = ({ setErrorMessages = false } = {}) => {
    const _errors = {};
    let valid = true;
    for (const [key, { func, message }] of Object.entries(validators)) {
      if (!func(newProject[key])) {
        _errors[key] = message;
        valid = false;
      } else {
        _errors[key] = null;
      }
    }
    if (setErrorMessages) {
      setErrors((prev) => ({ ...prev, ..._errors }));
    }
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate({ setErrorMessages: true })) {
      const body = {
        ...newProject,
        users: addedUsers.map((user) => user.id),
      };
      setLoading(true);
      createProject(body).then((res) => {
        setLoading(false);
        setProject(res.data.id);
        navigate('/project');
      });
    }
  };

  const isValid = useMemo(
    () => validate(),
    [newProject.name, newProject.description]
  );

  return (
    <div className={styles.container} {...props}>
      <form onSubmit={handleSubmit}>
        {create ? (
          <Input
            placeholder="Enter project name"
            value={newProject.name}
            onChange={(e) => {
              setNewProject((prev) => ({ ...prev, name: e.target.value }));
            }}
            error={errors.name}
            className={styles.title}
          />
        ) : (
          <Input
            placeholder="Enter project name"
            value={name}
            className={styles.title}
            onChange={() => {}}
          />
        )}
        <div className={styles.content}>
          <div className={styles.details}>
            <AvatarUpload seed={token} />
            {create ? (
              <TextArea
                placeholder="Enter project description"
                value={newProject.description}
                onChange={(e) => {
                  setNewProject((prev) => ({
                    ...prev,
                    description: e.target.value,
                  }));
                }}
              />
            ) : (
              <TextArea
                placeholder="Enter project description"
                value={description}
                onChange={() => {}}
              />
            )}
          </div>
          <div className={styles.membersInvites}>
            {!create && (
              <div>
                <span className={styles.heading}>Members</span>
                <ul className={styles.users}>
                  {projectUsers.length ? (
                    projectUsers.map(
                      ({ user_id, first_name, last_name, role }) => (
                        <li key={user_id}>
                          <span
                            className={classNames([
                              styles.role,
                              ...(role === 'admin' ? [styles.admin] : []),
                            ])}
                          >
                            {role}
                          </span>
                          <span>{`${first_name} ${last_name}`}</span>
                          <Close className={styles.remove} />
                        </li>
                      )
                    )
                  ) : (
                    <span className={styles.placeholder}>
                      There are no users in this project
                    </span>
                  )}
                </ul>
              </div>
            )}
            <InviteUsers
              addedUsers={addedUsers}
              setAddedUsers={setAddedUsers}
            />
          </div>
          {create && (
            // <Button type="submit" disabled={!isValid()} loading={loading}>
            <div className="flex-row">
              <Button to="/" appearance="secondary">
                Cancel
              </Button>
              {/* <Button type="submit" disabled={!isValid} onSubmit={handleSubmit}> */}
              <Button type="submit" disabled={!isValid} loading={loading}>
                Create Project
              </Button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
