import styles from './Pill.module.css';
import classNames from 'classnames';

export default function Pill({ children, priority, selected, ...props }) {
  return (
    <div
      className={classNames([styles.container, priority])}
      style={{
        background: selected ? null : 'none',
        boxShadow: selected && '0 0 2px 2px #CCCCCC55',
      }}
      {...props}
    >
      {children}
    </div>
  );
}
