import classNames from 'classnames';
import Avatar from '../Avatar/Avatar';
import CategoryLabel from '../CategoryLabel/CategoryLabel';
import PriorityLabel from '../PriorityLabel/PriorityLabel';
import styles from './Issue.module.css';

function Issue({ issue, isDragging, ...props }) {
  const { id, title, project, priority, category } = issue;
  return (
    <div
      className={classNames(
        styles.container,
        ...(props.selected ? [styles.active] : []),
        ...(isDragging ? [styles.dragging] : [])
      )}
      style={props.style}
    >
      <PriorityLabel priority={priority} />
      <a
        href={`${project}-${id}`}
        className={styles.link}
      >{`${project}-${id}`}</a>
      <span>{title}</span>
      <CategoryLabel name={category} color={props.color} />
      <Avatar />
    </div>
  );
}

export default Issue;
