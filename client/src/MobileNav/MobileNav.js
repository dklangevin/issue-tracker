import { Link } from 'react-router-dom';
import Avatar from '../components/Avatar/Avatar';
// import ProjectDropdown from '../components/ProjectDropdown/ProjectDropdown';
// import { Logo } from '../icons';
// import Button from '../components/Button/Button';
// import useProjects from '../data/projects';
import { Menu, Plus } from '../icons';
import { Logo2 } from '../logo';
import styles from './MobileNav.module.css';

export default function MobileNav() {
  // const projects = useProjects();

  return (
    <nav className={styles.container}>
      <Menu class={styles.menu} />
      <Link to="/" className={styles.logo}>
        <Logo2 />
      </Link>
      {/* {projects.length ? (
        <ProjectDropdown
          current="PROJECT-A"
          className={styles.projectDropdown}
        />
      ) : (
        <Button to="/project/create" className={styles.createNewProject}>
          Create New Project <Plus className={styles.plus} />
        </Button>
      )} */}
      <Avatar size={48} />
    </nav>
  );
}
