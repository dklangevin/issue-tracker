import { Link, Outlet } from 'react-router-dom';
import ProjectDropdown from '../components/ProjectDropdown/ProjectDropdown';
import { ProjectContext } from '../hooks/projectContext';
import { Logo } from '../icons';
import styles from './Layout.module.css';
import { useEffect, useState } from 'react';
import useProjects from '../data/projects';

const Layout = () => {
  const projects = useProjects();
  const [project, setProject] = useState();
  useEffect(() => setProject(projects?.[0]?.title), [projects]);
  return (
    <ProjectContext.Provider value={{ project, setProject }}>
      <nav className={styles.layout}>
        <Logo width={30} height={30} />
        <ul>
          <li>
            <ProjectDropdown current="PROJECT-A" />
          </li>
          <li>
            <Link style={{ padding: 8 }} to="/issues">
              Issues
            </Link>
          </li>
          <li>
            <Link to="/backlog">Backlog</Link>
          </li>
          <li>
            <Link to="/categories">Categories</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </ProjectContext.Provider>

    // </ProjectContext.Provider>
  );
};

export default Layout;
