import './Input.css';

function Input(props) {
  const { title, required, ...other } = props;
  return (
    <div>
      <label>
        {title}
        {!required ? <span> - Optional</span> : null}
      </label>
      <input type='text' required={required} {...other} />
    </div>
  );
}

export default Input;
