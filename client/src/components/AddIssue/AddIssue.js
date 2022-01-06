import './AddIssue.css';
import classNames from 'classnames';
import { useState, useEffect } from 'react';
import Input from '../Input/Input';
import ProjectCategorySelect from '../ProjectCategorySelect/ProjectCategorySelect';
import Select from '../Select/Select';

function AddIssue(props) {
  const [issue, setIssue] = useState({
    project: 'None',
    title: '',
    description: '',
    assignee: 'None',
    category: 'None',
  });

  const [projects, setProjects] = useState([]);
  const [categories, setCategories] = useState([]);
  const [priorities, setPriorities] = useState([]);
  const [users, setUsers] = useState([]);

  const endpoints = {
    createIssue: '/api/issues',
    getProjects: '/api/projects',
    getCategories: '/api/categories/project/',
    getPriorities: '/api/priorities',
    getUsers: '/api/users',
  };

  async function onAddIssue(e) {
    e.preventDefault();
    try {
      const newIssue = {
        ...issue,
        project: getProjectId(issue.project),
        category: getCategoryId(issue.category),
      };
      const body = {
        issue: newIssue,
      };
      await fetch(endpoints.createIssue, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
    } catch (err) {
      console.error(err.message);
    }
    props.handleAdd();
  }

  function getProjectId(projectName) {
    return projects.filter((project) => project['name'] === projectName)?.[0]?.[
      'id'
    ];
  }

  function getCategoryId(categoryName) {
    return categories.filter(
      (category) => category['name'] === categoryName
    )?.[0]?.['id'];
  }

  async function getProjects() {
    const res = await fetch(endpoints.getProjects);
    const projectsArray = await res.json();
    setProjects(projectsArray);
  }

  async function getCategories(project_id) {
    let categoriesArray;
    if (project_id !== undefined) {
      const res = await fetch(`${endpoints.getCategories}${project_id}`);
      categoriesArray = await res.json();
    } else {
      categoriesArray = [];
    }
    setCategories(categoriesArray);
  }

  async function getPriorities() {
    const res = await fetch(endpoints.getPriorities);
    const prioritiesArray = await res.json();
    setPriorities(prioritiesArray);
  }

  async function getUsers() {
    const res = await fetch(endpoints.getUsers);
    const usersArray = await res.json();
    setUsers(usersArray);
  }

  useEffect(() => {
    getProjects();
    getCategories();
    getPriorities();
    getUsers();
  }, []);

  return (
    <div
      className={classNames(
        'add-issue',
        'modal',
        props.hidden ? 'display-none' : 'display-block'
      )}
    >
      <section className='modal-main'>
        <h1 className='title'>Add Issue</h1>
        <hr />
        <form onSubmit={onAddIssue}>
          <Input
            title='Title'
            placeholder='Issue title'
            required={true}
            value={issue.title}
            onChange={(e) => {
              setIssue({ ...issue, title: e.target.value });
            }}
          />
          <Input
            title='Description'
            id='description'
            placeholder='Issue description'
            value={issue.description}
            onChange={(e) => {
              setIssue({ ...issue, description: e.target.value });
            }}
          />
          <ProjectCategorySelect
            projects={projects.map((project) => project.name)}
            categories={categories.map((category) => category.name)}
            projectValue={issue.project}
            categoryValue={issue.category}
            onChangeProject={(e) => {
              setIssue({ ...issue, project: e.target.value, category: null });
              getCategories(getProjectId(e.target.value));
            }}
            onChangeCategory={(e) => {
              setIssue({ ...issue, category: e.target.value });
            }}
          />
          <Select
            title='Assignee'
            value={issue.assignee}
            onChange={(e) => {
              setIssue({ ...issue, assignee: e.target.value });
            }}
            data={users.map((user) => user.display_name)}
            defaultOption='None'
          />
          <Select
            title='Priority'
            value={issue.priority}
            onChange={(e) => {
              setIssue({ ...issue, priority: e.target.value });
            }}
            data={priorities.map((priority) => priority.name)}
          />
          <div id='buttons' className='buttons'>
            <input
              className='add'
              type='submit'
              value='Add'
              onClick={props.handleAdd}
            />
            <input
              className='cancel'
              type='button'
              value='Cancel'
              onClick={props.handleCancel}
            />
          </div>
        </form>
      </section>
    </div>
  );
}

export default AddIssue;
