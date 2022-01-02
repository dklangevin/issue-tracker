import "./AddIssue.css";
import classNames from "classnames";
import { useState, useEffect } from "react";
import Input from "../Input/Input";
import ProjectCategorySelect from "../ProjectCategorySelect/ProjectCategorySelect";
import Select from "../Select/Select";

function AddIssue(props) {

  const [issue, setIssue] = useState({
    project: "None",
    assignee: "None",
    category: "None",
  });

  const [projects, setProjects] = useState([]);
  const [categories, setCategories] = useState([]);
  const [priorities, setPriorities] = useState([]);
  const [users, setUsers] = useState([]);

  const addIssueEndpoint = "http://localhost:5000/issues";
  const projectsEndpoint = "http://localhost:5000/projects";
  const categoriesEndpoint = "http://localhost:5000/categories/";
  const prioritiesEndpoint = "http://localhost:5000/priorities";
  const usersEndpoint = "http://localhost:5000/users";

  async function onAddIssue(e) {
    e.preventDefault();
    try {
      const body = {
        ...issue,
        project: getProjectId(issue.project),
        category: getCategoryId(issue.category),
      };
      await fetch(addIssueEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch (err) {
      console.error(err.message);
    }
    props.handleAdd();
  }

  function getProjectId(projectName) {
    return projects.filter((project) => project["name"] === projectName)?.[0]?.[
      "id"
    ];
  }

  function getCategoryId(categoryName) {
    return categories.filter(
      (category) => category["name"] === categoryName
    )?.[0]?.["id"];
  }

  async function getProjects() {
    const res = await fetch(projectsEndpoint);
    const projectsArray = await res.json();
    setProjects(projectsArray);
  }

  async function getCategories(project_id) {
    let categoriesArray;
    if (project_id !== undefined) {
      const res = await fetch(`${categoriesEndpoint}${project_id}`);
      categoriesArray = await res.json();
    } else {
      categoriesArray = [];
    }
    setCategories(categoriesArray);
  }

  async function getPriorities() {
    const res = await fetch(prioritiesEndpoint);
    const prioritiesArray = await res.json();
    setPriorities(prioritiesArray);
  }

  async function getUsers() {
    const res = await fetch(usersEndpoint);
    const usersArray = await res.json();
    setUsers(usersArray);
  }

  useEffect(() => {
    getProjects();
    getCategories();
    getPriorities();
    getUsers();
  }, []);

  console.log(issue);

  return (
    <div
      className={classNames(
        "add-issue",
        "modal",
        props.hidden ? "display-none" : "display-block"
      )}
    >
      <section className="modal-main">
        <h1 className="title">Add Issue</h1>
        <hr />
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
            title="Assignee"
            value={issue.assignee}
            onChange={(e) => {
              setIssue({ ...issue, assignee: e.target.value });
            }}
            data={users.map((user) => user.display_name)}
            defaultOption="None"
          />
          <Select
            title="Priority"
            value={issue.priority}
            onChange={(e) => {
              setIssue({ ...issue, priority: e.target.value });
            }}
            data={priorities.map((priority) => priority.name)}
          />
          <div id="buttons" className="buttons">
            <input
              className="add"
              type="submit"
              value="Add"
              onClick={props.handleAdd}
            />
            <input
              className="cancel"
              type="button"
              value="Cancel"
              onClick={props.handleCancel}
            />
          </div>
        </form>
      </section>
    </div>
  );
}

export default AddIssue;
