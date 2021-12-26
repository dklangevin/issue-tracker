import "./Avatar.css";
import portrait from "../../assets/img/portrait.png";

function Avatar(props) {
  return <img className="avatar" alt="Assignee avatar" src={portrait}></img>;
}

export default Avatar;
