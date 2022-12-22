import { useState } from 'react';
import useIssues from '../../data/issues';
import { Plus } from '../../icons';
import Button from '../../components/Button/Button';
import DragAndDropList from '../../components/DragAndDropList/DragAndDropList';
import styles from './Backlog.module.css';

function Backlog() {
  const [hidden, setHidden] = useState(true);

  const issues = useIssues();

  async function handleAdd() {
    setHidden(true);
  }

  return (
    <div className={styles.container}>
      <h3 className="title">Backlog</h3>
      <DragAndDropList items={issues}></DragAndDropList>
      <Button onClick={() => setHidden(false)}>
        Create Issue <Plus className={styles.plus} />
      </Button>
      {/* <AddIssue
        hidden={hidden}
        handleAdd={handleAdd}
        handleCancel={() => setHidden(true)}
      /> */}
    </div>
  );
}

export default Backlog;
