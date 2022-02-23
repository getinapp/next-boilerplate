import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`${css`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    ::selection {
      background: ${({ theme }) => theme?.backgroundColor};
      color: ${({ theme }) => theme?.primaryColor};
    }
  }

  html,
  html:focus-within,
  :root {
    scroll-behavior: smooth;

    font-size: 62.5%; // 10px based

    @media (max-width: 1280px) {
      font-size: 56.25%; // 9px based
    }
  }

  html,
  body {
    height: 100%;
    background: ${({ theme }) => theme?.backgroundColor};
    color: ${({ theme }) => theme?.primaryColor};
  }

  body {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    line-height: 1.4rem;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;
  }

  button {
    border: 0;
    cursor: pointer;
  }

  img {
    max-width: 100%;
    display: block;
  }
`}`;
