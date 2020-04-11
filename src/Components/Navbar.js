import React from "react";
import { Menu, Container } from "semantic-ui-react";
import { Route, Link } from "react-router-dom";
import axios from "../utils/axios";
import "./Navbar.css";

const onClickLogOut = async () => {
  const res = await axios.post("/users/logout");
  return res.data;
};

const Navbar = () => (
  <Container>
    <Menu size="large" inverted color="black" className="flex" fixed="top">
      <Menu.Item name="Dashboard">
        <Link to="/dashboard">Dashboard</Link>
      </Menu.Item>

      <Menu.Item name="Gallery">
        <Link to="/"> Motiv Gallery</Link>
      </Menu.Item>

      <Menu.Item name="Login">
        <Link to="/login"> Login? </Link>
      </Menu.Item>

      <Menu.Item name="Register">
        <Link to="/newuser">Register</Link>
      </Menu.Item>

      <Menu.Item name="CreateMotiv">
        <Link to="/createmotiv">Create Motiv</Link>
      </Menu.Item>

      <Menu.Item name="Logout" onClick={onClickLogOut}>
      {/* <Route render={({history}) => history.push("/login")} /> */}
      </Menu.Item>
      </Menu>
      </Container>
);

export default Navbar;
