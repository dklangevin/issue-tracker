import styles from './AddIssue.module.css';
import classNames from 'classnames';
import { useState, useEffect } from 'react';
import Input from '../Input/Input';
import Select from '../Select/Select';
import listProjects from '../../data/projects';
import { createIssue } from '../../data/issues';
import listProjectCategories from '../../data/projects/categories';
import { PRIORITIES } from '../../constants';
import listUsers from '../../data/users';
import { Modal } from '../Modal/Modal';
import Button from '../Button/Button';
import Pill from '../Pill/Pill';
import useUsers from '../../data/users';

function AddIssue({ projectId, hidden, setHidden, ...props }) {
  const [issue, setIssue] = useState({
    project: 'None',
    title: '',
    description: '',
    assignee: 'None',
    category: 'None',
  });

  const [projects, setProjects] = useState([]);
  const [categories, setCategories] = useState([]);
  const users = useUsers();

  const [priority, setPriority] = useState('low');

  async function onAddIssue(e) {
    e.preventDefault();
    try {
      const newIssue = {
        ...issue,
        project: projectId,
        category: getCategoryId(issue.category),
      };
      const body = {
        issue: newIssue,
      };
      await createIssue(body);
    } catch (err) {
      console.error(err.message);
    }
    props.handleAdd();
  }

  function getCategoryId(categoryName) {
    return categories.filter(
      (category) => category['name'] === categoryName
    )?.[0]?.['id'];
  }

  // useEffect(() => {
  //   listProjects().then((res) => setProjects(res));
  //   listProjectCategories(projectId).then((res) => setCategories(res));
  //   listUsers().then((res) => setUsers(res));
  // }, [projectId]);

  // console.log(projects);

  return (
    <Modal
      hidden={hidden}
      setHidden={setHidden}
      className={classNames('add-issue')}
    >
      <section className={styles.container}>
        <h1 className="title">Add Issue</h1>
        <form onSubmit={onAddIssue}>
          <Input
            title="Title"
            placeholder="Issue title"
            required={true}
            value={issue.title}
            onChange={(e) => {
              setIssue({ ...issue, title: e.target.value });
            }}
          />
          <Input
            title="Description"
            id="description"
            placeholder="Issue description"
            value={issue.description}
            onChange={(e) => {
              setIssue({ ...issue, description: e.target.value });
            }}
          />
          <Select
            title="Category"
            value={issue.category}
            onChange={(e) => setIssue({ ...issue, category: e.target.value })}
            data={categories}
            defaultOption="None"
          />
          <Select
            title="Assignee"
            value={issue.assignee}
            onChange={(e) => {
              setIssue({ ...issue, assignee: e.target.value });
            }}
            data={users.map(
              ({ first_name, last_name }) => `${first_name} ${last_name}`
            )}
            defaultOption="None"
          />
          {/* <Select
            title="Priority"
            value={issue.priority}
            onChange={(e) => {
              setIssue({ ...issue, priority: e.target.value });
            }}
            data={PRIORITIES}
          /> */}
          <div className={styles.priorities}>
            <label>Priority</label>
            <div>
              {PRIORITIES.map(({ name, color }) => (
                <Pill
                  key={name}
                  priority={name}
                  color={color}
                  selected={name === priority}
                  onClick={() => setPriority(name)}
                >
                  {name}
                </Pill>
              ))}
            </div>
          </div>

          <div id="buttons" className={styles.buttons}>
            <Button onClick={props.handleCancel} appearance="secondary">
              Cancel
            </Button>
            <Button onClick={props.handleAdd}>Add</Button>
          </div>
        </form>
      </section>
    </Modal>
  );
}

export default AddIssue;
