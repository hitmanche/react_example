import { useState } from "react";
import { Button, Table, Image } from "antd";
import { useHistory } from "react-router";
import CmpUserDetail from "./cmpUserDetailModal";
import { useDispatch, useSelector } from "react-redux";
import { setMS, userList, whichMS } from "../../reducer/rdcUser";

function CmpUsers() {
  const dispatch = useDispatch();
  const userListData = useSelector(userList);

  const rdWhichMS = useSelector(whichMS);
  const functionSetMS = () => {
    if (rdWhichMS === "M") {
      dispatch(setMS("S"));
    } else if (rdWhichMS === "S") {
      dispatch(setMS("M"));
    }
  };

  const history = useHistory();
  const [rowData, setRowData] = useState(null);

  const [loading, setLoading] = useState(false);
  const triggerLoading = () => setLoading((old) => !old);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      render: (id) => (
        <Button
          onClick={() => {
            if (rdWhichMS === "M") {
              const row = userListData.find((x) => x.id === id);
              setRowData(row);
            } else if (rdWhichMS === "S") {
              history.push("/userdetail/" + id);
            }
          }}
        >
          {id}
        </Button>
      ),
    },
    {
      title: "Resim",
      dataIndex: "image",
      render: (image) => <Image width={75} src={image} />,
    },
    {
      title: "Başlık",
      dataIndex: "title",
    },
    {
      title: "Fiyat",
      dataIndex: "price",
    },
  ];

  return (
    <div className="App">
      <Button
        loading={loading}
        onClick={() => functionSetMS()}
        type="primary"
        danger
      >
        {rdWhichMS === "M" && "Ekranla Çalıştır"}
        {rdWhichMS === "S" && "Modalla Çalıştır"}
      </Button>
      <Table
        style={{ paddingTop: 10 }}
        columns={columns}
        dataSource={userListData}
      />
      <CmpUserDetail rowData={rowData} setRowData={setRowData} />
    </div>
  );
}

export default CmpUsers;
