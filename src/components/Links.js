import styles from "./Main.module.css";
import Home from "../Home";
function Links({ setTest }) {
  return (
    <div className={styles.links}>
      <button
        onClick={() => {
          setTest(true);
        }}
        className={styles.x}
      >
        x
      </button>
      <a href="https://naver.com">
        <img src="../images/naver.jpg" />
      </a>
      <a href="https://google.com">
        <img src="../images/google.jpg" />
      </a>
      <a href="https://github.com">
        <img src="../images/github.jpg" />
      </a>
      <a href="https://netflix.com">
        <img src="../images/netflix.jpg" />
      </a>
    </div>
  );
}
export default Links;
