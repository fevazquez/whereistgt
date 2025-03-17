import React from "react";

import { Link } from "react-router-dom";
import { StyledMain } from "./TripsPage.styled";

const TripsPage = () => {
  return (
    <StyledMain id="Incoming">
      <Link to="/trips/2024">2024</Link>
    </StyledMain>
  );
};

export default TripsPage;
