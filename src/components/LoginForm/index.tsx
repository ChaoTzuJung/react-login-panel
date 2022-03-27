import React, { useState } from "react";

import Form from "../Form";
import Button from "../Button";
import Header from "../Header";
import styles from "../../App.module.scss";
import IconSocialMediaFb from "../../assets/fb.png";
import { ReactComponent as IconSocialMediaLine } from "../../assets/line.svg";
import { ReactComponent as IconSocialMediaGoogle } from "../../assets/google.svg";
import { ReactComponent as IconLock } from "../../assets/lock_outline.svg";
import { ReactComponent as IconMail } from "../../assets/mail_outline.svg";
import { ReactComponent as IconPerson } from "../../assets/person_outline.svg";

const options = [
  { key: "tw", label: "Taiwan", value: "taiwan" },
  { key: "aud", label: "Australia", value: "australia" },
];

function LoginForm() {
  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
    location: "",
    checked: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
      checked: event.target.checked,
    }));
  };
  return (
    <div className={styles.container}>
      <Header />
      <main>
        <h1 className={styles.title}>Create Account</h1>
        <div className={styles.iconGroup}>
          <img
            className={styles.iconButton}
            src={IconSocialMediaFb}
            alt="fb-icon"
          />
          <IconSocialMediaLine className={styles.iconButton} />
          <IconSocialMediaGoogle className={styles.iconButton} />
        </div>
        <p className="paragraph" style={{ marginBottom: "20px" }}>
          or use your email for registration：
        </p>
        <Form>
          <Form.Input
            fluid
            name="name"
            placeholder="Name"
            value={value.name}
            icon={<IconPerson />}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            name="email"
            placeholder="Email"
            icon={<IconMail />}
            value={value.email}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            name="password"
            placeholder="Password"
            icon={<IconLock />}
            value={value.password}
            onChange={handleChange}
          />
          <Form.Select
            fluid
            options={options}
            placeholder="Where are you from?"
          />
          <Form.Checkbox
            label="I am not a robot"
            name="checked"
            checked={value.checked}
            onChange={handleChange}
          />
          <Button
            className={styles.custom}
            label="SIGN UP"
            variant="contain"
            size="large"
          />
        </Form>
      </main>
    </div>
  );
}

export default LoginForm;
