import styles from './Search.module.css';

function Search({ title, data, value, setValue, onSelect, ...props }) {
  const filtered = data.filter((item) =>
    item.value.toLowerCase().includes(value)
  );

  const handleSelect = (val) => {
    onSelect?.(val);
    setValue?.('');
  };

  return (
    <div className={styles.container}>
      <label>{title}</label>
      <input type="text" value={value} {...props} />
      {value !== '' && (
        <ul className={styles.results}>
          {filtered.map((item) => (
            <li key={item.id} onClick={() => handleSelect(item)}>
              {item.value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Search;
