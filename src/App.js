import React from "react";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MotivGallery from "./Container/MotivGallery";
import MotivDashboard from "./Container/MotivDashboard";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import RegisterUser from "./Components/Register";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={MotivGallery} />
          <Route exact path="/dashboard" component={MotivDashboard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/newuser" component={RegisterUser} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
