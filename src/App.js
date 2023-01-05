import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login.js";
import Home from "./Home.js";
function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const name = localStorage.getItem("username");
    if (name !== null) {
      setLoggedIn(true);
      setUsername(name);
    }
  }, []);

  return <div>{loggedIn ? <Home name={username} /> : <Login />}</div>;
}
export default App;
