import styles from './Input.module.css';

function Input({ title, optional, error, ...props }) {
  return (
    <div className={styles.container}>
      <label>
        {title}
        {optional ? <span> - Optional</span> : null}
      </label>
      <input type="text" {...props} />
      {error && <span className="error">{error}</span>}
    </div>
  );
}

export default Input;
