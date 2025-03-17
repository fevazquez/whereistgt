import React, { useState, useRef, useEffect } from "react";
import { useOnClickOutside } from "./hooks";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "./styles";
import { HomePage, TripsPage, Trip, NotFound } from "./components";
import trips from "./trips/trips.json";

const App = () => {
  // Used for mobile detection
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Verify the screen size
  const handleResize = () => {
    if (window.innerWidth < 760) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  });

  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/trips" element={<TripsPage />} />
        {Object.entries(trips).map((trip) => {
          return <Route path={`/trips/${trip}`} element={<Trip />} />;
        })}
        <Route path="*" element={<NotFound />} status={404} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
