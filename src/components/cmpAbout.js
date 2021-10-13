import { Button } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";

function CmpAbout() {
  const history = useHistory();
  return (
    <div>
      <h1>Hakkımızda</h1>
      <Button onClick={() => history.push("/userdetail/15")} type="primary">
        Geri
      </Button>
    </div>
  );
}

export default CmpAbout;
