import './Backlog.css';
import Issue from '../Issue/Issue';
import { ReactComponent as PlusIcon } from '../../assets/icons/add_black_24dp.svg';

import { useState, useEffect } from 'react';

import AddIssue from '../AddIssue/AddIssue';
import DragAndDropList from '../DragAndDropList/DragAndDropList';

function Backlog(props) {
  const [hidden, setHidden] = useState(true);

  const [issues, setIssues] = useState([]);

  const issuesEndpoint = '/api/issues';

  async function getIssues() {
    const res = await fetch(issuesEndpoint);
    const issueArray = await res.json();
    setIssues(issueArray);
  }

  async function handleAdd() {
    setHidden(true);
    await getIssues();
  }

  useEffect(() => {
    getIssues();
  }, []);

  return (
    <div className='backlog'>
      <div className='backlog-title'>Backlog</div>
      <DragAndDropList items={issues}></DragAndDropList>
      <button className='create-issue' onClick={() => setHidden(false)}>
        <PlusIcon fill='white' />
        Create Issue
      </button>
      <AddIssue
        hidden={hidden}
        handleAdd={handleAdd}
        handleCancel={() => setHidden(true)}
      />
    </div>
  );
}

export default Backlog;
