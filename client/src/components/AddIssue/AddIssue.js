import "./AddIssue.css";
import classNames from "classnames";

function AddIssue(props) {
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
        <form>
          <label>Title</label>
          <input id="title" type="text" placeholder="Issue title" required />
          <label>
            Description <span>- Optional</span>
          </label>
          <input id="description" type="text" placeholder="Issue description" />
          <label>Assignee</label>
          <select name="assignee" id="assignee">
            <option value="Danny">Danny</option>
            <option value="Noa">Noa</option>
            <option value="John">John</option>
            <option value="Mary">Mary</option>
          </select>
          <label>Priority</label>
          <select name="priority" id="priority">
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
            <option value="Critical">Critical</option>
          </select>
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
