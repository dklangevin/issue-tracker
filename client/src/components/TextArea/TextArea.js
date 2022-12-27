import styles from './TextArea.module.css';

export default function TextArea(props) {
  return <textarea className={styles.container} {...props} />;
}
