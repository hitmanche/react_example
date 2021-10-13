import React, { useEffect, useState } from "react";
import { Checkbox, Modal } from "antd";
import { Typography } from "antd";

const { Title } = Typography;

const CmpTodoDetail = (props) => {
  const [isModalVisible, setIsModalVisible] = useState(
    props.rowData ? true : false
  );

  useEffect(() => {
    setIsModalVisible(props.rowData ? true : false);
  }, [props]);

  const triggerModal = () => {
    setIsModalVisible((old) => !old);
    props.setRowData(null);
  };

  return (
    <>
      <Modal
        title="Todo Detayı"
        visible={isModalVisible}
        onOk={triggerModal}
        onCancel={triggerModal}

      > 
        <Title level={3}>{props.rowData?.title}</Title>
        <Checkbox checked={props.rowData?.completed} disabled />
      </Modal>
    </>
  );
};

export default CmpTodoDetail;
