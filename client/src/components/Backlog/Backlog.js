import "./Backlog.css";
import Issue from "../Issue/Issue";
import { ReactComponent as PlusIcon } from "../../assets/icons/add_black_24dp.svg";

import { useState } from "react";

import AddIssue from "../AddIssue/AddIssue";

function Backlog(props) {
  const [hidden, setHidden] = useState(true);

  return (
    <div className="backlog">
      <div className="backlog-title">Backlog</div>
      <Issue
        title="This is an example issue used for testing"
        priority="LOW"
        id="ISSUE-42"
        link="ISSUE-42"
        category="User Interface"
        selected
      ></Issue>
      <Issue
        title="This is an example issue used for testing"
        priority="MEDIUM"
        id="ISSUE-43"
        link="ISSUE-43"
        category="Database"
        color="green"
      ></Issue>
      <Issue
        title="This is an example issue used for testing"
        priority="HIGH"
        id="ISSUE-44"
        link="ISSUE-44"
        category="Database"
        color="green"
      ></Issue>
      <Issue
        title="This is an example issue used for testing"
        priority="CRITICAL"
        id="ISSUE-45"
        link="ISSUE-45"
        category="Algorithm"
        color="grey"
      ></Issue>
      <Issue
        title="This is an example issue used for testing"
        priority="CRITICAL"
        id="ISSUE-46"
        link="ISSUE-46"
        category="Algorithm"
        color="grey"
      ></Issue>
      <Issue
        title="This is an example issue used for testing"
        priority="CRITICAL"
        id="ISSUE-47"
        link="ISSUE-47"
        category="Design"
        color="purple"
      ></Issue>
      <button className="create-issue" onClick={() => setHidden(false)}>
        <PlusIcon fill="white" />
        Create Issue
      </button>
      <AddIssue
        hidden={hidden}
        handleAdd={() => setHidden(true)}
        handleCancel={() => setHidden(true)}
      />
    </div>
  );
}

export default Backlog;
