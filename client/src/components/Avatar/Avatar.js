import { Link } from 'react-router-dom';
import useUser from '../../data/user';
import styles from './Avatar.module.css';
import { generateLinearGradientBackground } from '../../util';
import classNames from 'classnames';

function Avatar({ size, ...props }) {
  // return (<img className={styles.container} alt="avatar" {...props} />);
  const user = useUser(1);
  const { id, first_name: first, last_name: last, avatar } = user || {};

  const initials = first && last ? `${first[0]}${last[0]}` : '';

  return (
    <Link
      to="/profile"
      style={{ '--size': `${size || 32}px` }}
      className={classNames(
        styles.container,
        ...(props.className ? [props.className] : [])
      )}
    >
      {/* <img
        src={`https://avatar.tobi.sh/${id}-${first}`}
        alt="avatar"
        {...props}
      /> */}
      {/* <div
        style={{
          background: generateLinearGradientBackground(`${id}-${first}`),
        }}
        {...props}
      />
      <span>DL</span> */}
      {avatar ? (
        <img src={avatar} alt="avatar" />
      ) : (
        <>
          <div
            style={{
              background: generateLinearGradientBackground(`${id}-${first}`),
            }}
          />
          <span className={styles.initials}>{initials}</span>
        </>
      )}
    </Link>
  );
}

export default Avatar;
