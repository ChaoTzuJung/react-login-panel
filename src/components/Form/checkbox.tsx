import styles from "../../App.module.scss";
import { CheckboxProps } from "../../types";

function Checkbox({ label, checked, value, onChange }: CheckboxProps) {
  return (
    <div className={styles.checkbox}>
      <input
        type="checkbox"
        id={label}
        name={label}
        checked={checked}
        value={value}
        onChange={onChange}
      />
      <label htmlFor={label}>{label}</label>
    </div>
  );
}

export default Checkbox;
