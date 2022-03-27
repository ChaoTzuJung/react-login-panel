import styles from "../../App.module.scss";
import Input from "./input";
import Select from "./select";
import Checkbox from "./checkbox";
import { FormProps } from "../../types";

function Form({ children }: FormProps) {
  return <form className={styles.form}>{children}</form>;
}

Form.Input = Input;
Form.Select = Select;
Form.Checkbox = Checkbox;

export default Form;
