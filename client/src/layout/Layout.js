import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import useProjects from '../data/projects';
import { ProjectContext } from '../hooks/projectContext';
import Nav from '../Nav/Nav';
import styles from './Layout.module.css';
import MobileNav from '../MobileNav/MobileNav';
import { Link } from 'react-router-dom';
import { CategoriesIcon, IssuesIcon, LeftArrowIcon, TeamIcon } from '../icons';

const Layout = () => {
  const projects = useProjects();
  const [project, setProject] = useState();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => setProject(projects?.[0]?.id), [projects]);

  return (
    <ProjectContext.Provider value={{ project, setProject }}>
      <div className={styles.container}>
        <div>
          {sidebarOpen && (
            <div className={styles.sidebar}>
              <LeftArrowIcon onClick={() => setSidebarOpen(false)} />
              <ul>
                <li>
                  <IssuesIcon />
                  <Link to="/issues">Issues</Link>
                </li>
                <li>
                  <CategoriesIcon />
                  <Link to="/categories">Categories</Link>
                </li>
                <li>
                  <TeamIcon />
                  <Link to="/team">Team</Link>
                </li>
              </ul>
            </div>
          )}
          <div className={styles.main}>
            <Nav />
            <MobileNav setSidebarOpen={setSidebarOpen} />
            <div className={styles.content}>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </ProjectContext.Provider>
  );
};

export default Layout;
