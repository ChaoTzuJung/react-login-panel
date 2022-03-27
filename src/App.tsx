import React from "react";
import styles from "../src/App.module.scss";
import LoginForm from "./components/LoginForm";
import UserTable, { MobileTable } from "./components/UserTable";
import ThumbGroup from "./components/ThumbGroup";

function App() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        <LoginForm />
      </div>
      <div className={styles.right}>
        <UserTable />
        <MobileTable />
        <ThumbGroup />
      </div>
    </div>
  );
}

export default App;
