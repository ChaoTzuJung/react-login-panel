import classNames from "classnames";
import styles from "../../App.module.scss";
import { ButtonProps } from "../../types";

function Button({
  variant = "contain",
  backgroundColor,
  size = "small",
  label,
  style,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={classNames(styles.button, className, {
        [styles.small]: size === "small",
        [styles.medium]: size === "medium",
        [styles.large]: size === "large",
        [styles.primary]: (variant = "contain"),
        [styles.secondary]: (variant = "outlined"),
      })}
      style={{ ...style, backgroundColor }}
      type="button"
      {...props}
    >
      {label}
    </button>
  );
}

export default Button;
