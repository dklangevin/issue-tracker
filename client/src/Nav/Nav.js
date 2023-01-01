import { Link } from 'react-router-dom';
import Avatar from '../components/Avatar/Avatar';
import NavDropdown from '../components/NavDropdown/NavDropdown';
import ProjectDropdown from '../components/ProjectDropdown/ProjectDropdown';
// import { Logo } from '../icons';
import Button from '../components/Button/Button';
import useProjects from '../data/projects';
import { Plus } from '../icons';
import { Logo2 } from '../logo';
import styles from './Nav.module.css';

export default function Nav() {
  const projects = useProjects();

  return (
    <nav className={styles.container}>
      <Link to="/" className={styles.logo}>
        <Logo2 />
      </Link>
      <ul>
        <li>
          <NavDropdown
            item={{ name: 'Issues', link: '/issues' }}
            items={[
              { name: 'Active', link: '/issues' },
              { name: 'Backlog', link: '/backlog' },
            ]}
          />
        </li>
        <li>
          <Link to="/categories">Categories</Link>
        </li>
        <li>
          <Link to="/team">Team</Link>
        </li>
      </ul>
      {projects.length ? (
        <ProjectDropdown
          current="PROJECT-A"
          className={styles.projectDropdown}
        />
      ) : (
        <Button to="/project/create" className={styles.createNewProject}>
          Create New Project <Plus className={styles.plus} />
        </Button>
      )}
      <Avatar size={48} />
    </nav>
  );
}
