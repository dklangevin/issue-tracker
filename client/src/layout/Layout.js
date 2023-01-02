import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import useProjects from '../data/projects';
import { ProjectContext } from '../hooks/projectContext';
import Nav from '../Nav/Nav';
import styles from './Layout.module.css';
// import MobileNav from '../MobileNav/MobileNav';
// import { Link } from 'react-router-dom';
// import { CategoriesIcon, IssuesIcon, LeftArrowIcon, TeamIcon } from '../icons';
// import MobileMenu from '../components/MobileMenu/MobileMenu';
import BottomNav from '../BottomNav/BottomNav';

const Layout = () => {
  const projects = useProjects();
  const [project, setProject] = useState();

  useEffect(() => setProject(projects?.[0]?.id), [projects]);

  return (
    <ProjectContext.Provider value={{ project, setProject }}>
      <div className={styles.container}>
        {/* {sidebarOpen && (
          <div className={styles.sidebar}>
            <LeftArrowIcon onClick={() => setSidebarOpen(false)} />
            <ul>
              <li onClick={() => setSidebarOpen(false)}>
                <IssuesIcon />
                <Link to="/issues">Issues</Link>
              </li>
              <li onClick={() => setSidebarOpen(false)}>
                <CategoriesIcon />
                <Link to="/categories">Categories</Link>
              </li>
              <li onClick={() => setSidebarOpen(false)}>
                <TeamIcon />
                <Link to="/team">Team</Link>
              </li>
            </ul>
          </div>
          <MobileMenu setSidebarOpen={setSidebarOpen} />
        )} */}
        {/* <div className={styles.main}> */}
        <Nav />
        {/* <MobileNav setSidebarOpen={setSidebarOpen} /> */}
        <div className={styles.content}>
          <Outlet />
        </div>
        {/* </div> */}
        <BottomNav />
      </div>
    </ProjectContext.Provider>
  );
};

export default Layout;
