import "./CategoryLabel.css";
import classNames from "classnames";

function CategoryLabel(props) {
  return (
    <div className={classNames("category-label", props.color)}>
      {props.name}
    </div>
  );
}

export default CategoryLabel;
