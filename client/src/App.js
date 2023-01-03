import "./App.css";
import Home from "./components/Home";
import Login from "./components/LogIn";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Login />
    </div>
  );
}

export default App;
