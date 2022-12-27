import { Link } from 'react-router-dom';
import useUser from '../../data/user';
import styles from './Avatar.module.css';

function Avatar(props) {
  // return (<img className={styles.container} alt="avatar" {...props} />);
  const user = useUser(1);
  const { id, first_name: first } = user || {};
  return (
    <Link to="/profile" className={styles.container}>
      <img
        src={`https://avatar.tobi.sh/${id}-${first}`}
        alt="avatar"
        {...props}
      />
      <span>DL</span>
    </Link>
  );
}

export default Avatar;
