import useProjects from '../../data/projects';
import useProjectContext from '../../hooks/projectContext';
import { DownArrow } from '../../icons';
import styles from './ProjectDropdown.module.css';

export default function ProjectDropdown() {
  const { project, setProject } = useProjectContext();
  const projects = useProjects();

  return (
    <div className={styles.container}>
      <div className={styles.current}>
        <span>{project}</span>
        <DownArrow height={20} width={20} />
      </div>
      <ul className={styles.dropdown}>
        {projects
          .filter(({ title }) => title !== project)
          .map(({ title }, i) => (
            <li key={i} onClick={() => setProject(title)}>
              {title}
            </li>
          ))}
      </ul>
    </div>
  );
}
