import './Input.css';

function Input({ title, required, ...restProps }) {
  return (
    <div className="input">
      <label>
        {title}
        {!required ? <span> - Optional</span> : null}
      </label>
      <input type="text" required={required} {...restProps} />
    </div>
  );
}

export default Input;
