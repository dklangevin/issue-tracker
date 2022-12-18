import styles from './Button.module.css';
import classNames from 'classnames';

function Button({ children, appearance, ...props }) {
  return (
    <button
      className={classNames(
        styles.button,
        appearance === 'secondary' ? styles.secondary : styles.primary
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
