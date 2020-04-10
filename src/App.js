import React from "react";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MotivGallery from "./Container/MotivGallery";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/" component={MotivGallery} />
          <h1>Hello World</h1>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
