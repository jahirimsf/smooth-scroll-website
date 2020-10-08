import React from "react";
import "./App.css";
import Home from "./pages";
import SigninPage from "./pages/signin";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signin" component={SigninPage} />
      </Switch>
    </Router>
  );
}

export default App;
