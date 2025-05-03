import React from "react";

import { Link } from "react-router-dom";
import { StyledMain } from "./TripsPage.styled";

const TripsPage = ({ trips }) => {
  return (
    <StyledMain>
      <h2 className="heading">Chapters</h2>
      {Object.entries(trips).map(([year]) => {
        return (
          <p>
            <Link key={year} to={`/trips/${year}`}>
              {year}
            </Link>
          </p>
        );
      })}
    </StyledMain>
  );
};

export default TripsPage;
