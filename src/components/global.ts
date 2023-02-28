import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font: 10px "Inter", sans-serif;

    /* primary colors */
    --color-primary: #FF577F;
    --color-primary-focus: #FF427F;
    --color-primary-negative: #59323F;

    /* grey colors */
    --grey0: #F8F9FA;
    --grey1: #868E96;
    --grey2: #343B41;
    --grey3: #212529;
    --grey4: #121214;

    /* feedback colors */
    --sucess: #3FE864;
    --negative: #E83F5B;


    /* text sizes */
    --font-title: 16px;
    --headline: 12px

    /* gaps */
    --small-gap: 0.5rem;
    --normal-gap: 1rem;
    --large-gap: 2rem;
    --largest-gap: 3rem;

    /* margin */
    --m0: 0.25rem --m1: 0.5rem;
    --m2: 1rem;
    --m3: 1.5rem;
    --m4: 2rem;
    --m5: 2.5rem;
    --m6: 3rem;

    /* size elements */
    --container-mw1200: 1200px;
    --container-percent-mw85: 85%;
    --w100: 100%;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-size: var(--font-title);
    color: var(--grey0);
  }

  a {
    text-decoration: none;
    color: var(--grey0);  
  }

  button {
    cursor: pointer;
    border: 0;
    background-color: none;
    color: #fff;
    transition: all .3s;
    
    :hover {
    transition: all .3s;
  }
  }

  input {
    border-radius: 8px;
    outline: 0;
    border: 0;
  }

  label {
    cursor: pointer;
  }

  ul, ol, li {
    list-style: none;
  }

  .w100 {
    width: var(--w100);
  }

  .c-mw1200 {
    max-width: var(--container-mw1200);
    margin: 0 auto;
  }

  .cp-mw85 {
    max-width: var(--container-percent-mw85);
    margin: 0 auto;
  }

  .hidden {
    display: none !important;
  }
`;

export default GlobalStyle;
