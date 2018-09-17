import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Menu, Layout, Button } from "antd";
import "./NavHeader.css";
import SignInSignUpModal from "../SignInSignUpModal/SignInSignUpModal";

const { Header } = Layout;
class NavHeader extends Component {
  constructor() {
    super();
    this.state = {
      isModalVisible: false
    };
  }

  showModal = () => {
    this.setState({
      isModalVisible: true
    });
  };

  handleCancel = () => {
    this.setState({ isModalVisible: false });
  };

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
          <Button
            type="primary"
            className="sign-up-button"
            onClick={this.showModal}
          >
            Sign Up/Sign In
          </Button>
          <SignInSignUpModal
            showModal={this.state.isModalVisible}
            closeModal={this.handleCancel}
          />
        </Header>
      </div>
    );
  }
}

export default NavHeader;
