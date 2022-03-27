import Button from "../Button";
import imgLogo from "../../assets/img_logo.png";
import styles from "../../App.module.scss";

function Header() {
  return (
    <header className={styles.header}>
      <img src={imgLogo} alt="logo" width={100} height={30} />
      <Button label="SIGN IN" variant="outlined" />
    </header>
  );
}

export default Header;
