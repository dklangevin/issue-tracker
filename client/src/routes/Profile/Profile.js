import { useEffect, useRef, useState } from 'react';
import Input from '../../components/Input/Input';
import useProjects from '../../data/projects';
import useUser from '../../data/user';
import styles from './Profile.module.css';
import { generateLinearGradientBackground } from '../../util';

export default function Profile(props) {
  const [file, setFile] = useState();
  const [, setPreview] = useState();
  const ref = useRef();

  const projects = useProjects();

  const user = useUser(1);

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
            <div
              style={{
                background: generateLinearGradientBackground(`${id}-${first}`),
              }}
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
              onChange={() => {
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
