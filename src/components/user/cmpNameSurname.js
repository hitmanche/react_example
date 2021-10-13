import { Typography } from "antd";
import React, { useEffect } from "react";

const NameSurname = ({ name, surname, setBool }) => {
  useEffect(() => {
    console.log("component yüklendi");

    return () => {
      console.log("component silindi");
    };
  }, []);

  return (
    <div onClick={() => setBool((old) => !old)}>
      <Typography.Text mark>Adı : {name}</Typography.Text>
      <Typography.Text mark>Soyadı: {surname}</Typography.Text>
    </div>
  );
};

export default NameSurname;
