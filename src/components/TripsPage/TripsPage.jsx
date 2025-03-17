import React from "react";

import { Link } from "react-router-dom";
import { StyledMain } from "./TripsPage.styled";

const TripsPage = ({ trips }) => {
  return (
    <StyledMain>
      {Object.entries(trips).map(([year]) => {
        return (
          <Link key={year} to={`/trips/${year}`}>
            {year}
          </Link>
        );
      })}
    </StyledMain>
  );
};

export default TripsPage;
