import React from "react";

import { StyledTrip } from "./Trip.styled";

const Trip = ({ details }) => {
  return (
    <StyledTrip id="Incoming">
      {details.map((type, content) => () => {
        if (type === "Title") {
          return <h2>{content}</h2>;
        } else if (type === "Summary") {
          return <></>;
        }
      })}
    </StyledTrip>
  );
};

export default Trip;
