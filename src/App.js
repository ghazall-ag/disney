import './App.css';
import { Router, Switch, Route } from "react-router-dom"
import Login from "./components/Login"
import Blogs from "./components/Blogs"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/blogs" component={Blogs} />
        <Route path="/" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
