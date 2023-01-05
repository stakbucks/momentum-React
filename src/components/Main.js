import { useEffect, useState } from "react";
import styles from "./Main.module.css";
import Links from "./Links";
import Todos from "./Todos";
function Main(props) {
  const [time, setTime] = useState("");

  function ClockTick() {
    const date = new Date();
    const hour = String(date.getHours()).padStart(2, "0");
    const min = String(date.getMinutes()).padStart(2, "0");
    const sec = String(date.getSeconds()).padStart(2, "0");
    setTime(`${hour}:${min}:${sec}`);
  }
  setInterval(ClockTick, 1000);

  //구현 예정
  // const [choice, setChoice] = useState("");

  // function handleChoice(choice) {
  //   if (choice === "links") {
  //     return <Links />;
  //   } else return <Todos />;
  // }

  return (
    <main className={styles.main}>
      <div className={styles.clock}>{time}</div>
      <div className={styles.container}>
        {/* {choice === "" ? (
          <div className={styles.btns}>
            <button onClick={() => setChoice("links")}>Links</button>
            <button onClick={() => setChoice("todos")}>Todos</button>
          </div>
        ) : (
          handleChoice(choice)
        )} */}
        <Todos />
      </div>
    </main>
  );
}

export default Main;
