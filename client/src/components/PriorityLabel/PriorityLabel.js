import classNames from "classnames";

import "./PriorityLabel.css";

const classes = {
  LOW: "low-priority",
  MEDIUM: "medium-priority",
  HIGH: "high-priority",
  CRITICAL: "critical-priority",
};

function getClass(priority) {
  return classes[priority] || classes["LOW"];
}

function PriorityLabel(props) {
  return (
    <div className={classNames("priority-label", getClass(props.priority))}>
      {props.priority}
    </div>
  );
}

PriorityLabel.defaultProps = {
  priority: "LOW",
};

export default PriorityLabel;
