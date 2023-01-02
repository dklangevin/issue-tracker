import { Link } from 'react-router-dom';
import {
  CategoriesIcon,
  IssuesIcon,
  LeftArrowIcon,
  TeamIcon,
} from '../../icons';
import styles from './MobileMenu.module.css';

export default function MobileMenu({ setSidebarOpen }) {
  return (
    <div className={styles.container}>
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
  );
}
