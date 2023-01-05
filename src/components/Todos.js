import styles from "./Main.module.css";
import { useEffect, useState } from "react";

function Todos() {
  const savedTodoList = localStorage.getItem("todos");
  const [newTodo, setNewTodo] = useState({
    todo: "",
    id: "",
  });
  let [todoList, setTodoList] = useState([]);

  useEffect(() => {
    if (savedTodoList !== null) {
      setTodoList(JSON.parse(localStorage.getItem("todos")));
    } else {
      localStorage.setItem("todos", JSON.stringify([]));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);
  return (
    <div className={styles.todos}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setTodoList((current) => [...current, newTodo]);
          setNewTodo({
            todo: "",
            id: "",
          });
        }}
      >
        <input
          value={newTodo.todo}
          onChange={(event) => {
            setNewTodo({
              todo: event.target.value,
              id: Date.now(),
            });
          }}
          type="text"
          placeholder="Write your to-do"
          autoFocus
        />
        <button className={styles.addButton}>Add</button>
      </form>
      <ul>
        {todoList.map((todo, index) => (
          <li className={styles.todoList} key={index}>
            <span className={styles.todoName}>{todo.todo}</span>
            <button
              className={styles.removeBtn}
              onClick={(event) => {
                setTodoList((prev) =>
                  prev.filter((filterTodo) => filterTodo.id !== todo.id)
                );
              }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Todos;
