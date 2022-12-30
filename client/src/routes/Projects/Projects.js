import styles from './Projects.module.css';
import useProjects from '../../data/projects';

export default function Projects() {
  const projects = useProjects();

  return (
    <div className={styles.container}>
      <div className={styles.projects}>
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
    </div>
  );
}
