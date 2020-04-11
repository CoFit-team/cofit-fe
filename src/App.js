import React from "react";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MotivGallery from "./Container/MotivGallery";
import MotivDashboard from "./Container/MotivDashboard";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import RegisterUser from "./Components/Register";
import CreateMotiv from "./Components/CreateMotiv";
import { Container, Divider } from "semantic-ui-react";
import "./App.css";

const isMobile = window.innerWidth <= 500;

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Container>
          {isMobile ? (
            <div>
              <Divider hidden section />
              <Divider hidden section />
              <Divider hidden section />
            </div>
          ) : (
            <div>
              <Divider hidden section />
            </div>
          )}
          <Navbar />
        </Container>
        <Switch>
          <Route exact path="/" component={MotivGallery} />
          <Route exact path="/dashboard" component={MotivDashboard} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/newuser" component={RegisterUser} />
          <Route exact path="/createmotiv" component={CreateMotiv} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
