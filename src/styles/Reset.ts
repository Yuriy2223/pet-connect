import { css } from 'styled-components';

export const Reset = css`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    font-family: var(--font-family);
    background-color: var(--background-body);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: normal;
  }

  ul,
  ol {
    list-style: none;
  }

  a {
    font-family: inherit;
    text-decoration: none;
    transition: all 300ms ease;
  }

  img {
    display: block;
    width: 100%;
    height: auto;
  }

  button {
    font-family: inherit;
    transition: all 300ms ease;
    cursor: pointer;
  }

  input,
  textarea {
    font-family: inherit;
    outline: none;
    transition: all 300ms ease;
  }
`;
