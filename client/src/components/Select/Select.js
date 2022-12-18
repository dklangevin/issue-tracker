import './Select.css';

function Select(props) {
  const { title, data, defaultOption, ...other } = props;
  return (
    <div>
      <label>{title}</label>
      <select className="capitalize" {...other}>
        {defaultOption ? (
          <option value={defaultOption}>{defaultOption}</option>
        ) : null}
        {data
          ? data.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))
          : null}
      </select>
    </div>
  );
}

export default Select;
