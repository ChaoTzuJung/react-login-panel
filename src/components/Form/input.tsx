import classNames from "classnames";
import styles from "../../App.module.scss";
import { InputProps } from "../../types";

function Input({
  fluid,
  label,
  name,
  placeholder,
  icon,
  value,
  onChange,
}: InputProps) {
  return (
    <div
      className={classNames(styles.input, {
        [styles.fluid]: fluid,
      })}
    >
      {icon && <span>{icon}</span>}
      <input
        type={name === "password" ? "password" : "text"}
        id={label}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
