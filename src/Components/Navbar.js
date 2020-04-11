import React from "react";
import { Menu, Container, Image } from "semantic-ui-react";
import { withRouter, Link } from "react-router-dom";
import axios from "../utils/axios";
import "./Navbar.css";

const onClickLogOut = async () => {
  const res = await axios.post("/users/logout");
  if (res.status === 200) {
    alert("You have successfully logged out!");
  }
  return res.data;
};

const Navbar = () => (
  <Container>
    <Menu size="large" inverted color="orange" className="flex" fixed="top">
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

      <Menu.Item name="Logout" onClick={onClickLogOut}></Menu.Item>
    </Menu>
  </Container>
);

export default withRouter(Navbar);
