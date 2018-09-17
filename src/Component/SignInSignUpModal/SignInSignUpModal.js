import React, { Component } from "react";
import { Modal, Button } from "antd";

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
          footer={[
            <Button key="back" onClick={this.props.closeModal}>
              Return
            </Button>,
            <Button
              key="submit"
              type="primary"
              loading={loading}
              onClick={this.handleOk}
            >
              Submit
            </Button>
          ]}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    );
  }
}

export default SignInSignUpModal;
