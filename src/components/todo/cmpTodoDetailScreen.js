import { Button, Checkbox, Layout } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { useParams, useHistory } from "react-router";
import { todoList } from "../../reducer/rdcTodo";

function CmpTodoDetailScreen() {
  const { id } = useParams();
  const history = useHistory();
  const todoListData = useSelector(todoList);

  const tododetail = todoListData?.find((x) => x.id === parseInt(id));

  return id ? (
    <Layout>
      <Button onClick={() => history.goBack()}>Back</Button>
      <h1>{tododetail?.title}</h1>
      <Checkbox checked={tododetail?.completed} disabled />
    </Layout>
  ) : (
    <Layout>
      <h1>Todo Id Bilgisi Yok</h1>
    </Layout>
  );
}

export default CmpTodoDetailScreen;
