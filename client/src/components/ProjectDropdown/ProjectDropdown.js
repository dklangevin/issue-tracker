import { Link } from 'react-router-dom';
import useProject from '../../data/project';
import useProjects from '../../data/projects';
import useProjectContext from '../../hooks/projectContext';
import { DownArrow, Plus } from '../../icons';
import styles from './ProjectDropdown.module.css';
import Button from '../Button/Button';
import classNames from 'classnames';

export default function ProjectDropdown(props) {
  const { project: projectId, setProject } = useProjectContext();
  const project = useProject(projectId);
  const projects = useProjects();

  const { name: projectName } = project || {};
  return (
    <div
      className={classNames(
        styles.container,
        ...(props.className ? [props.className] : [])
      )}
    >
      <Link to="/project" className={styles.current}>
        <span>{projectName}</span>
        <DownArrow className={styles.plus} />
      </Link>
      <div className={styles.wrapDropdown}>
        <ul className={styles.dropdown}>
          {projects
            .slice(0, 10)
            // .filter(({ name }) => name !== projectName)
            .map(({ id, name }, i) => (
              <li
                key={i}
                onClick={() => setProject(id)}
                className={id === projectId ? styles.active : null}
              >
                <Link to="/project">{name}</Link>
              </li>
            ))}
          {/* <hr /> */}
          {projects.length > 10 && (
            <li className={styles.button}>
              <Button to="/projects" appearance="secondary">
                {`View ${projects.length - 10} More Projects...`}{' '}
              </Button>
            </li>
          )}
          <li className={styles.button}>
            <Button to="/project/create">
              Create New Project <Plus className={styles.plus} />
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
}
