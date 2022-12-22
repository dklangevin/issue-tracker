import { Close } from '../../icons';
import styles from './Modal.module.css';

export function Modal({ hidden, setHidden, children }) {
  return hidden ? (
    <></>
  ) : (
    <div className={styles.modal} onClick={() => setHidden(true)}>
      <div className={styles.container} onClick={(e) => e.stopPropagation()}>
        <div className={styles.close}>
          <Close onClick={() => setHidden(true)} />
        </div>
        {children}
      </div>
    </div>
  );
}
