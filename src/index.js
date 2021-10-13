import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "antd/dist/antd.css";
import { Provider } from "react-redux";
import { Store } from "./reducer/store";
import { BrowserRouter as Router, Link } from "react-router-dom";
import {
  HomeOutlined,
  AppstoreFilled,
  AccountBookOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={Store}>
        <Menu mode="horizontal">
          <Menu.Item key="home" icon={<HomeOutlined />}>
            <Link to="/">Homeeeee</Link>
          </Menu.Item>
          <Menu.Item key="about" icon={<AppstoreFilled />}>
            <Link to="/about">About</Link>
          </Menu.Item>
          <Menu.Item key="users" icon={<AccountBookOutlined />}>
            <Link to="/users">Users</Link>
          </Menu.Item>
          <Menu.Item key="todos" icon={<AccountBookOutlined />}>
            <Link to="/todos">Todos</Link>
          </Menu.Item>
        </Menu>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
