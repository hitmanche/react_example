import React, { useEffect } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import CmpUsers from "./components/user/cmpUsers";
import CmpHome from "./components/cmpHome";
import CmpAbout from "./components/cmpAbout";
import { Layout } from "antd";

import CmpUserDetailScreen from "./components/user/cmpUserDetailScreen";
import { useDispatch } from "react-redux";
import * as functions from "./functions";
import CmpTodoDetailScreen from "./components/todo/cmpTodoDetailScreen";
import CmpTodos from "./components/todo/cmpTodos";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    functions.loadDataUser(dispatch);
    functions.loadDataTodo(dispatch);
  }, []);

  return (
    <Layout>
      <Layout style={{ padding: "24px" }}>
        <Switch>
          <Route path="/about">
            <CmpAbout />
          </Route>
          <Route path="/users">
            <CmpUsers />
          </Route>
          <Route path="/userdetail/:id">
            <CmpUserDetailScreen />
          </Route>
          <Route path="/todos">
            <CmpTodos />
          </Route>
          <Route path="/tododetail/:id">
            <CmpTodoDetailScreen />
          </Route>
          <Route path="/">
            <CmpHome />
          </Route>
        </Switch>
      </Layout>
    </Layout>
  );
}

export default App;
