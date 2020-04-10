import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <div>
    <Menu size="large" inverted color="black" widths="10">
      <Menu.Item name="Dashboard">
        <Link to="/dashboard">Dashboard</Link>
      </Menu.Item>

      <Menu.Item name="Profile">
        <Link to="/profile">Profile</Link>
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
    </Menu>
  </div>
);

export default Navbar;
