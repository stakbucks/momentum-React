import styles from "./Login.module.css";
function Login() {
  const handleSubmit = (event) => {
    const input = document.querySelector("input");
    localStorage.setItem("username", input.value);
  };

  return (
    <div className={styles.login}>
      <h1 className={styles.hello}>Hello. Who are you?</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <input type="text" required autoFocus />
        <button>Log In</button>
      </form>
    </div>
  );
}

export default Login;
