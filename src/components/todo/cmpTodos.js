import { useState } from "react";
import { Button, Table, Checkbox } from "antd";
import { useHistory } from "react-router";
import CmpTodoDetail from "./cmpTodoDetailModal";
import { useDispatch, useSelector } from "react-redux";
import { setMSTodo, todoList, whichMSTodo } from "../../reducer/rdcTodo";

function CmpTodos() {
  const dispatch = useDispatch();
  const todoListData = useSelector(todoList);

  const rdWhichMS = useSelector(whichMSTodo);
  const functionSetMS = () => {
    if (rdWhichMS === "M") {
      dispatch(setMSTodo("S"));
    } else if (rdWhichMS === "S") {
      dispatch(setMSTodo("M"));
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
              const row = todoListData.find((x) => x.id === id);
              setRowData(row);
            } else if (rdWhichMS === "S") {
              history.push("/tododetail/" + id);
            }
          }}
        >
          {id}
        </Button>
      ),
    },
    {
      title: "Başlık",
      dataIndex: "title",
    },
    {
      title: "Completed",
      dataIndex: "completed",
      render: (completed) => <Checkbox checked={completed} disabled />,
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
        dataSource={todoListData}
      />
      <CmpTodoDetail rowData={rowData} setRowData={setRowData} />
    </div>
  );
}

export default CmpTodos;
