import { DownArrow } from '../../icons';
import styles from './Select.module.css';

function Select({ title, data, defaultOption, ...props }) {
  return (
    <div className={styles.container}>
      <label>{title}</label>
      <div className={styles.select}>
        <select {...props}>
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
        <DownArrow className={styles.arrow} />
      </div>
    </div>
  );
}

export default Select;
