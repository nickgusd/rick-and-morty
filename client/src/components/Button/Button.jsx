/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import React from "react";
import { Button } from "semantic-ui-react";

const ButtonComponent = ({
  content = "Search",
  onClick,
  primary = false,
  secondary = false
}) => (
  <div>
    <Button
      content={content}
      primary={primary}
      secondary={secondary}
      onClick={onClick}
    />
  </div>
);

export default ButtonComponent;
