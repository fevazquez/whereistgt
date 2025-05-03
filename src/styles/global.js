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

  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: var(--transition);
    &:hover,
    &:focus {
      color: ${({ theme }) => theme.main};
    }

    &.inline-link {
      ${({ theme }) => theme.inlineLink};
    }
  }
`;

export default GlobalStyles;
