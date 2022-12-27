import { Link, Outlet } from 'react-router-dom';
import ProjectDropdown from '../components/ProjectDropdown/ProjectDropdown';
import { ProjectContext } from '../hooks/projectContext';
import { Logo } from '../icons';
import styles from './Layout.module.css';
import { useEffect, useState } from 'react';
import useProjects from '../data/projects';
import NavDropdown from '../components/NavDropdown/NavDropdown';
import Avatar from '../components/Avatar/Avatar';

const Layout = () => {
  const projects = useProjects();
  const [project, setProject] = useState();
  useEffect(() => setProject(projects?.[0]?.id), [projects]);
  return (
    <ProjectContext.Provider value={{ project, setProject }}>
      <nav className={styles.layout}>
        <Link to="/" className={styles.logo}>
          <Logo />
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
            <Link to="/backlog">Backlog</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
        </ul>
        <ProjectDropdown
          current="PROJECT-A"
          className={styles.projectDropdown}
        />
        <Avatar />
      </nav>
      <Outlet />
    </ProjectContext.Provider>

    // </ProjectContext.Provider>
  );
};

export default Layout;
