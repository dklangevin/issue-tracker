import { useState } from 'react';
import EditAvatarModal from '../../components/EditAvatarModal/EditAvatarModal';
import Input from '../../components/Input/Input';
import useProjects from '../../data/projects';
import useUser from '../../data/user';
import { generateLinearGradientBackground } from '../../util';
import styles from './Profile.module.css';

export default function Profile(props) {
  const [modalHidden, setModalHidden] = useState(true);
  const projects = useProjects();
  const user = useUser(1);

  const { id, first_name: first, last_name: last, avatar } = user || {};

  const initials = first && last ? `${first[0]}${last[0]}` : '';

  return (
    <div className={styles.container} {...props}>
      <section className={styles.details}>
        <div className={styles.wrapImage}>
          {avatar ? (
            <img
              src={avatar}
              alt="avatar"
              onClick={() => setModalHidden(false)}
            />
          ) : (
            <>
              <div
                style={{
                  background: generateLinearGradientBackground(
                    `${id}-${first}`
                  ),
                }}
              />
              <span
                onClick={() => setModalHidden(false)}
                className={styles.initials}
              >
                {initials}
              </span>
            </>
          )}

          <span
            onClick={() => setModalHidden(false)}
            className={styles.changeAvatar}
          >
            Change Avatar
          </span>
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
              <span className={styles.placeholder}>You have no projects</span>
            )}
          </ul>
        </div>
      </section>
      <EditAvatarModal hidden={modalHidden} setHidden={setModalHidden} />
    </div>
  );
}
