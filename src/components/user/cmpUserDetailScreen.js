import { Button, Image, Layout } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { useParams, useHistory } from "react-router";
import { userList } from "../../reducer/rdcUser";

function CmpUserDetailScreen() {
  const { id } = useParams();
  const history = useHistory();
  const userListData = useSelector(userList);

  const userdetail = userListData?.find((x) => x.id === parseInt(id));

  return id ? (
    <Layout>
      <Button onClick={() => history.goBack()}>Back</Button>
      <h1>{userdetail?.title}</h1>
      <p>{userdetail?.description}</p>
      <Image width={200} src={userdetail?.image} />
    </Layout>
  ) : (
    <Layout>
      <h1>User Id Bilgisi Yok</h1>
    </Layout>
  );
}

export default CmpUserDetailScreen;
