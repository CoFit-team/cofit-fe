import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <div>
    <Menu size="large" inverted color="black">
      <Menu.Item name="Dashboard">
        <Link to="/dashboard">Dashboard</Link>
      </Menu.Item>

      <Menu.Item name="Profile">
        <Link to="/profile">Profile</Link>
      </Menu.Item>

      <Menu.Item name="Gallery">
        <Link to="/"> Motiv Gallery</Link>
      </Menu.Item>
    </Menu>
  </div>
);

export default Navbar;
