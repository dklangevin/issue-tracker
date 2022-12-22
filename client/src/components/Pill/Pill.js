import styles from './Pill.module.css';

export default function Pill({ children, color, selected, ...props }) {
  return (
    <div
      className={styles.container}
      style={{
        background: selected ? color : 'none',
        border: `1px solid ${color}`,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
