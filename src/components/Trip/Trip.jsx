import React from "react";

import { StyledTrip } from "./Trip.styled";

const Trip = ({ details }) => {
  return (
    <StyledTrip id="Incoming">
      {Object.entries(details).map(([type, content]) => {
        if (type === "title") {
          return <h2 key={type}>{content}</h2>;
        } else if (type === "summary") {
          return Object.entries(content).map(([p, text]) => {
            return <p key={p}>{text}</p>;
          });
        }
      })}
    </StyledTrip>
  );
};

export default Trip;
