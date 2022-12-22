import { Link } from 'react-router-dom';
import useProject from '../../data/project';
import useProjects from '../../data/projects';
import useProjectContext from '../../hooks/projectContext';
import { DownArrow, Plus } from '../../icons';
import styles from './ProjectDropdown.module.css';

export default function ProjectDropdown() {
  const { project: projectId, setProject } = useProjectContext();
  const project = useProject(projectId);
  const projects = useProjects();

  const { name: projectName } = project || {};

  return (
    <div className={styles.container}>
      <Link to="/project" className={styles.current}>
        <span>{projectName}</span>
        <DownArrow className={styles.plus} />
      </Link>
      <div className={styles.wrapDropdown}>
        <ul className={styles.dropdown}>
          {projects
            .filter(({ name }) => name !== projectName)
            .map(({ id, name }, i) => (
              <li key={i} onClick={() => setProject(id)}>
                {name}
              </li>
            ))}
          <hr />
          <li>
            <Link to="/project/create" className={styles.newProject}>
              Create New Project <Plus className={styles.plus} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
