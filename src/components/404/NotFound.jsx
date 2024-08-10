import React from "react";

import { Link } from "react-router-dom";
import { StyledNotFound } from "./NotFound.styled";

const NotFound = () => {
  return (
    <StyledNotFound>
      <h2 className="title">404</h2>
      <p>Here there be dragons</p>
    </StyledNotFound>
  );
};

export default NotFound;