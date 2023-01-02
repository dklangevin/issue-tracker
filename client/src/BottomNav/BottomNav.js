import { Link } from 'react-router-dom';
import { IssuesIcon, CategoriesIcon, TeamIcon } from '../icons';
import styles from './BottomNav.module.css';
import { useBottomNavHidden } from '../hooks/scroll';

export default function BottomNav(props) {
  const hidden = useBottomNavHidden();

  return (
    <ul
      className={styles.container}
      style={{
        bottom: hidden ? -72 : 0,
      }}
      {...props}
    >
      <li>
        <Link to="/issues">
          <IssuesIcon />
          Issues
        </Link>
      </li>
      <li>
        <Link to="/categories">
          <CategoriesIcon />
          Categories
        </Link>
      </li>
      <li>
        <Link to="/team">
          <TeamIcon />
          Team
        </Link>
      </li>
    </ul>
  );
}
