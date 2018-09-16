import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Layout } from "antd";
import ContentRoutes from "./Component/ContentRoutes";
import NavHeader from "./Component/NavHeader/NavHeader";
import "./App.css";

const { Content, Footer } = Layout;

class App extends Component {
  render() {
    return (
      <div>
        <Layout className="layout">
          <Router>
            <div>
              <NavHeader />
              <Content style={{ padding: "0 50px" }}>
                <ContentRoutes />
              </Content>
              <Footer style={{ textAlign: "center" }}>
                Ant Design ©2018 Created by Ant UED
              </Footer>
            </div>
          </Router>
        </Layout>
      </div>
    );
  }
}

export default App;
