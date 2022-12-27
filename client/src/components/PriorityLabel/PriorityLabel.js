import classNames from 'classnames';
import styles from './PriorityLabel.module.css';

function PriorityLabel({ priority }) {
  return (
    <div className={classNames(styles.container, priority)}>{priority}</div>
  );
}

export default PriorityLabel;
