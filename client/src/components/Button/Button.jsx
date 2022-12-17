/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react/prop-types */
import React from "react";
import { Button } from "semantic-ui-react";

import { Wrapper } from "./Button.js";

const ButtonComponent = ({
  content = "Search",
  onClick,
  primary = false,
  secondary = false,
  search
}) => (
  <Wrapper search={search}>
    <Button
      content={content}
      primary={primary}
      secondary={secondary}
      onClick={onClick}
    />
  </Wrapper>
);

export default ButtonComponent;
