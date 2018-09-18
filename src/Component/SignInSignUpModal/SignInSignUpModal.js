import React, { Component } from "react";
import { Modal, Tabs } from "antd";
import SignInForm from "../SignInForm/SignInForm";
import SignUpForm from '../SignUpForm/SignUpForm';

const TabPane = Tabs.TabPane;

class SignInSignUpModal extends Component {
  constructor() {
    super();
    this.state = {
      loading: false
    };
  }
  render() {
    const { loading } = this.state;
    return (
      <div>
        <Modal
          visible={this.props.showModal}
          title="Welcome to Recipe Finder"
          onCancel={this.props.closeModal}
          footer={[]}
        >
          <Tabs defaultActiveKey="1">
            <TabPane tab="Sign In" key="1">
              <SignInForm />
            </TabPane>
            <TabPane tab="Sign Up" key="2">
              <SignUpForm />
            </TabPane>
          </Tabs>
        </Modal>
      </div>
    );
  }
}

export default SignInSignUpModal;
