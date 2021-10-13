import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import { Typography } from "antd";

const { Title, Text } = Typography;

const CmpUserDetail = (props) => {
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
        title="Kullanıcı Detayı"
        visible={isModalVisible}
        onOk={triggerModal}
        onCancel={triggerModal}

      > 
        <Title level={3}>{props.rowData?.title}</Title>
        <Text strong>{props.rowData?.description}</Text>
      </Modal>
    </>
  );
};

export default CmpUserDetail;
