import styles from "./ThumbGroup.module.scss";
import ImageThumb from "../../assets/img_thumb.jpg";

function ThumbGroup() {
  return (
    <div className={styles.container}>
      {[...Array(10)].map((item, index) => (
        <img
          key={index}
          className={styles.imgItem}
          src={ImageThumb}
          alt="avatar"
        />
      ))}
    </div>
  );
}

export default ThumbGroup;
