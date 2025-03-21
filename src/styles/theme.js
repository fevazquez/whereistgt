import { css } from "styled-components";

export const theme = {
  main_blue: "#0a192f",
  light_blue: "#112240",
  lightest_blue: "#233554",
  white: "#fff",
  darker_black: "#141414",
  lighter_black: "#313131",
  blue: "#00fffb",
  grey: "#8892b0",
  main: "#8776de",
  lightest_grey: "#ccd6f6",
  light_grey: "#a8b2d1",

  mobile: "576px",

  link: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: var(--transition);
    &:hover,
    &:active,
    &:focus {
      color: var(--main);
      outline: 0;
    }
  `,

  inlineLink: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    position: relative;
    transition: var(--transition);
    color: var(--main);
    &:hover,
    &:focus,
    &:active {
      color: var(--main);
      outline: 0;
      &:after {
        width: 100%;
      }
      & > * {
        color: var(--main) !important;
        transition: var(--transition);
      }
    }
    &:after {
      content: "";
      display: block;
      width: 0;
      height: 1px;
      position: relative;
      bottom: 0.2em;
      background-color: var(--main);
      transition: var(--transition);
      opacity: 0.6;
    }
  `,

  smallButton: css`
    color: var(--main);
    background-color: transparent;
    border: 1px solid var(--main);
    border-radius: 5px;
    padding: 0.75rem 1rem;
    font-size: var(--fz-xs);
    font-family: var(--font-mono);
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
    &:hover,
    &:focus,
    &:active {
      background-color: var(--main-tint);
      outline: none;
    }
    &:after {
      display: none !important;
    }
  `,

  bigButton: css`
    color: var(--main);
    background-color: transparent;
    border: 1px solid var(--main);
    border-radius: 4px;
    padding: 1.25rem 1.75rem;
    font-size: var(--fz-sm);
    line-height: 1;
    text-decoration: none;
    cursor: pointer;
    transition: var(--transition);
    &:hover,
    &:focus,
    &:active {
      background-color: var(--main-tint);
      outline: none;
    }
    &:after {
      display: none !important;
    }
  `,

  boxShadow: css`
    box-shadow: 0 10px 30px -15px var(--blue-shadow);
    transition: var(--transition);
    &:hover,
    &:focus {
      box-shadow: 0 20px 30px -15px var(--blue-shadow);
    }
  `,

  fancyList: css`
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: var(--fz-lg);
    li {
      position: relative;
      padding-left: 30px;
      margin-bottom: 10px;
      &:before {
        content: "▹";
        position: absolute;
        left: 0;
        color: var(--main);
      }
    }
  `,
  resetList: css`
    list-style: none;
    padding: 0;
    margin: 0;
  `,
};

export default theme;
