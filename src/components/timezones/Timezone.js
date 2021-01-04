import React from "react";
import { Button } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const Timezone = () => {
  return (
    <div className={`timezone`}>
      <span className="titleTimezone">
        Titulo de la Timezone que estoy buscando{" "}
      </span>
      <Button
        type="primary"
        className="optionButton"
        onClick={() => console.log("on click")}
      >
        <DeleteOutlined />
        Options
      </Button>
    </div>
  );

  //   return (
  //     <Card
  //       title="Default size card"
  //       actions={[<DeleteOutlined key="delete" />]}
  //       style={{ width: 300 }}
  //     >
  //       <p>Card content</p>
  //       <p>Card content</p>
  //       <p>Card content</p>
  //     </Card>
  //   );
};

export default Timezone;
