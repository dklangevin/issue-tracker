import { Link } from 'react-router-dom';
import { DownArrow } from '../../icons';
import styles from './NavDropdown.module.css';

export default function NavDropdown({ item, items }) {
  return (
    <div className={styles.container}>
      <Link to={item.link} className={styles.current}>
        <span>{item.name}</span>
        <DownArrow className={styles.plus} />
      </Link>
      <div className={styles.wrapDropdown}>
        <ul className={styles.dropdown}>
          {items.map(({ name, link }, i) => (
            <li key={i}>
              <Link to={link}>{name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
