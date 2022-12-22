import useProject from '../../data/project';
import useProjectContext from '../../hooks/projectContext';
import styles from './Project.module.css';

export default function Project() {
  const { project: id } = useProjectContext();
  const project = useProject(id);

  const { name, description } = project || {};

  return (
    <div className={styles.container}>
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  );
}
