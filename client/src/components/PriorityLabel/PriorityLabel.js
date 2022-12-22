import classNames from 'classnames';
import styles from './PriorityLabel.module.css';

function PriorityLabel({ priority }) {
  return (
    <div
      className={classNames(styles.container, styles[priority] || styles.low)}
    >
      {priority}
    </div>
  );
}

export default PriorityLabel;
