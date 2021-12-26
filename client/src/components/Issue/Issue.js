import "./Issue.css";
import Avatar from "../Avatar/Avatar";
import PriorityLabel from "../PriorityLabel/PriorityLabel";
import CategoryLabel from "../CategoryLabel/CategoryLabel";
import classNames from "classnames";

function Issue(props) {
  return (
    <div className={classNames("issue", props.selected ? "active" : undefined)}>
      <PriorityLabel priority={props.priority} />
      <a href={props.link}>{props.id}</a>
      <div className="issue-title">{props.title}</div>
      <CategoryLabel name={props.category} color={props.color}/>
      <Avatar></Avatar>
    </div>
  );
}

export default Issue;
