import styles from './Button.module.css';
import classNames from 'classnames';

function Button({ children, appearance, loading, ...props }) {
  return (
    <button
      className={classNames(
        styles.button,
        appearance === 'secondary' ? styles.secondary : styles.primary,
        ...(loading ? [styles.loading] : [])
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
