import classNames from "classnames";
import styles from "../../App.module.scss";
import { SelectProps, SelectOption } from "../../types";

function Select({ label, fluid, options, placeholder }: SelectProps) {
  return (
    <div
      className={classNames(styles.select, {
        [styles.fluid]: fluid,
      })}
    >
      <select name={label} id={label} defaultValue="">
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option: SelectOption) => (
          <option key={option.key} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
