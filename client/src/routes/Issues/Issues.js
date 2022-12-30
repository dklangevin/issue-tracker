import { useState } from 'react';
import AddIssue from '../../components/AddIssue/AddIssue';
import Button from '../../components/Button/Button';
import DragAndDropList from '../../components/DragAndDropList/DragAndDropList';
import useIssues from '../../data/issues';
import { Plus } from '../../icons';
import styles from './Issues.module.css';

function Issues() {
  const [hidden, setHidden] = useState(true);
  const issues = useIssues();

  async function handleAdd() {
    setHidden(true);
  }

  return (
    <div className={styles.container}>
      <h3 className="title">Active Issues</h3>
      <DragAndDropList items={issues}></DragAndDropList>
      <Button onClick={() => setHidden(false)}>
        Create Issue <Plus className={styles.plus} />
      </Button>
      <AddIssue
        hidden={hidden}
        setHidden={setHidden}
        handleAdd={handleAdd}
        handleCancel={() => setHidden(true)}
      />
    </div>
  );
}

export default Issues;
