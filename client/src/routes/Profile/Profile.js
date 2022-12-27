import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import Input from '../../components/Input/Input';
import TextArea from '../../components/TextArea/TextArea';
import useProject from '../../data/project';
import useProjectUsers from '../../data/projects/users';
import useProjectContext from '../../hooks/projectContext';
import { Close } from '../../icons';
import { InviteUsers } from '../../components/InviteUsers/InviteUsers';
import styles from './Profile.module.css';
import Button from '../../components/Button/Button';
import useUser from '../../data/user';
import useProjects from '../../data/projects';

export default function Profile(props) {
  const [file, setFile] = useState();
  const [preview, setPreview] = useState();
  const ref = useRef();

  const projects = useProjects();

  const user = useUser(1);
  console.log(user);

  const { id, first_name: first, last_name: last } = user || {};

  useEffect(() => {
    if (!file) {
      setPreview();
      return;
    }

    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);

  const initials = first && last ? `${first[0]}${last[0]}` : '';

  return (
    <div className={styles.container} {...props}>
      <div className={styles.content}>
        <section className={styles.details}>
          <div className={styles.wrapImage}>
            <img
              src={preview || `https://avatar.tobi.sh/${id}-${first}`}
              onClick={() => ref.current.click()}
            />
            <span className={styles.initials}>{initials}</span>
            <input
              type="file"
              ref={ref}
              onChange={(e) => setFile(e.target.files[0])}
            />
            <span className={styles.changeAvatar}>Change Avatar</span>
          </div>
          <form>
            <Input
              placeholder="Enter project name"
              value={`${first} ${last}`}
              onChange={(e) => {
                // setName(e.target.value);
              }}
              // error={projectError}
              className={styles.title}
            />
            {/* <TextArea
              placeholder="Enter project description"
              value={description}
            /> */}
          </form>
        </section>
        <section className={styles.projects}>
          <div>
            <span className={styles.heading}>Projects</span>
            <ul className={styles.users}>
              {projects.length ? (
                projects.map(({ id, name }) => (
                  <li key={id}>
                    <span>{name}</span>
                  </li>
                ))
              ) : (
                <span className={styles.placeholder}>
                  There are no users in this project
                </span>
              )}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
