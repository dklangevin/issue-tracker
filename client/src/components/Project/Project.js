import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import Input from '../../components/Input/Input';
import TextArea from '../../components/TextArea/TextArea';
import useProject from '../../data/project';
import useProjectUsers from '../../data/projects/users';
import useProjectContext from '../../hooks/projectContext';
import { Close } from '../../icons';
import { InviteUsers } from '../InviteUsers/InviteUsers';
import styles from './Project.module.css';
import Button from '../Button/Button';

export default function Project({ create = false, ...props }) {
  const { project: id } = useProjectContext();
  const project = useProject(create ? null : id);
  const projectUsers = useProjectUsers(id);
  const [file, setFile] = useState();
  const [preview, setPreview] = useState();
  const [addedUsers, setAddedUsers] = useState([]);
  const ref = useRef();

  const { name, description } = project || {};

  console.log(id);

  useEffect(() => {
    if (!file) {
      setPreview();
      return;
    }

    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);

  return (
    <div className={styles.container} {...props}>
      <Input
        placeholder="Enter project name"
        value={name}
        onChange={(e) => {
          // setName(e.target.value);
        }}
        // error={projectError}
        className={styles.title}
      />
      <div className={styles.content}>
        <section className={styles.details}>
          <div className={styles.wrapImage}>
            <img
              className={styles.image}
              src={preview || `https://avatar.tobi.sh/${id}-${name}`}
              onClick={() => ref.current.click()}
            />
            <input
              type="file"
              ref={ref}
              className={styles.input}
              onChange={(e) => setFile(e.target.files[0])}
            />
            <span>Edit Image</span>
          </div>
          <form>
            <TextArea
              placeholder="Enter project description"
              value={description}
            />
          </form>
        </section>
        <section className={styles.membersInvites}>
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
          <InviteUsers addedUsers={addedUsers} setAddedUsers={setAddedUsers} />
        </section>
        {create && (
          // <Button type="submit" disabled={!isValid()} loading={loading}>
          <Button type="submit">Create Project</Button>
        )}
      </div>
    </div>
  );
}
