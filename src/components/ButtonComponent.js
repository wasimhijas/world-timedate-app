import { Button } from "antd";
import React from "react";

const ButtonComponent = ({ onClick }) => {
  return (
    <Button className="buttoncomponent-style" onClick={onClick}>
      Submit
    </Button>
  );
};

export default ButtonComponent;
