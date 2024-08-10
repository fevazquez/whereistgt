import { createGlobalStyle } from "styled-components";

const colors = {
  background: `#1b1b1b`,
  text: `#fff`,
};

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    width: 100%;
    scroll-behavior: smooth;
  }
  body {
    font-family: Corbel, "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", "DejaVu Sans", "Bitstream Vera Sans", "Liberation Sans", Verdana, "Verdana Ref", sans-serif;
    background: ${colors.background};
    margin: 0;
    height: 100%;
    overflow-x: hidden;
    color: ${colors.text};
    text-rendering: optimizeLegibility;
  }
`

export default GlobalStyles;