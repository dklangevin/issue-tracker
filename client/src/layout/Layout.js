import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import useProjects from '../data/projects';
import { ProjectContext } from '../hooks/projectContext';
import Nav from '../Nav/Nav';
import styles from './Layout.module.css';
import MobileNav from '../MobileNav/MobileNav';

const Layout = () => {
  const projects = useProjects();
  const [project, setProject] = useState();
  useEffect(() => setProject(projects?.[0]?.id), [projects]);
  return (
    <ProjectContext.Provider value={{ project, setProject }}>
      <Nav />
      <MobileNav />
      <div className={styles.content}>
        <Outlet />
      </div>
    </ProjectContext.Provider>
  );
};

export default Layout;
