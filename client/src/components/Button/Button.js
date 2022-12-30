import styles from './Button.module.css';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

function Button({ children, to, appearance, loading, className, ...props }) {
  return to ? (
    <Link
      to={to}
      className={classNames(styles.link, ...(className ? [className] : []))}
    >
      <button
        className={classNames(
          styles.container,
          appearance === 'secondary'
            ? styles.secondary
            : appearance === 'tertiary'
            ? styles.tertiary
            : styles.primary,
          ...(loading ? [styles.loading] : []),
          ...(className ? [className] : [])
        )}
        {...props}
      >
        {children}
      </button>
    </Link>
  ) : (
    <button
      className={classNames(
        styles.container,
        appearance === 'secondary'
          ? styles.secondary
          : appearance === 'tertiary'
          ? styles.tertiary
          : styles.primary,
        ...(loading ? [styles.loading] : []),
        ...(className ? [className] : [])
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
