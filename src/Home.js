import styles from "./Home.module.css";
import Main from "./components/Main";
import App from "./App";
import Weather from "./Weather";

function Home({ name }) {
  return (
    <div className={styles.home}>
      <Main />
      <Weather />
      <button
        onClick={() => {
          localStorage.removeItem("username");
        }}
        className={styles.logout}
      >
        Logout
      </button>
    </div>
  );
}
export default Home;
