import React from "react";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MotivGallery from "./Container/MotivGallery";
import MotivDashboard from "./Container/MotivDashboard";
import Navbar from "./Components/Navbar";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={MotivGallery} />
          <Route exact path="/dashboard" component={MotivDashboard} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
