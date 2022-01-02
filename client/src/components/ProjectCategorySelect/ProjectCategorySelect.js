import "./ProjectCategorySelect.css";

import Select from "../Select/Select";

function ProjectCategorySelect(props) {
  return (
    <div className="project-category">
      <Select
        title="Project"
        value={props.projectValue}
        onChange={props.onChangeProject}
        data={props.projects}
        defaultOption="None"
      />
      <Select
        title="Category"
        name="category"
        id="category"
        value={props.categoryValue}
        onChange={props.onChangeCategory}
        disabled={props.categories.length === 0 ? true : false}
        data={props.categories}
        defaultOption="None"
      />
    </div>
  );
}

export default ProjectCategorySelect;
