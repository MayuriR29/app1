import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Menu, Layout,Button } from "antd";
import './NavHeader.css'

const { Header } = Layout;
class NavHeader extends Component {
  render() {
    return (
      <div className="header-wrapper">
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            style={{ lineHeight: "64px" }}
          >
            <Menu.Item key="1">
              <NavLink to="/"> Home</NavLink>
            </Menu.Item>
            <Menu.Item key="2">
              <NavLink to="/about"> About</NavLink>
            </Menu.Item>
            <Menu.Item key="3">
              <NavLink to="/user/username"> User</NavLink>
            </Menu.Item>
          </Menu>
          <Button type="primary" className="sign-up-button" onClick={this.showModal} >
          Sign Up
        </Button>
        </Header>
      </div>
    );
  }
}

export default NavHeader;
