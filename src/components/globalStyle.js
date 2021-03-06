import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
  --color-dark-cyan: #0e8784;
  --color-dark-grey-blue: #333d4b;
  --color-pale-orange: #fdd6ba;
  --color-light-cream: #fefcf7;
  --color-grey: #83888f;
}

html {
  box-sizing: border-box;
  font-size: 62.5%;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

body {
  font-family: 'Barlow', sans-serif;
  font-weight: 400;
  font-size: 1.5rem;
  background: var(--color-light-cream);
}

h1,
h2,
h3,
h4,
h5 {
  font-family: 'Fraunces', serif;
  font-weight: 900;
  margin: 0;
}

p {
  margin: 0;
}

button {
  font-family: 'Fraunces', serif;
  font-weight: 900;
}

a {
  text-decoration: none;
  color: inherit;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

img {
  width: 100%;
}

.wrapper {
  width: 95%;
  margin: 0 auto;
  position: relative;
}

@media (min-width: 576px) {
}

@media (min-width: 768px) {
  .wrapper {
    width: 90%;
  }
}

@media (min-width: 992px) {
  /* .wrapper {
    max-width: 110rem;
  } */
  body {
    font-size: 1.6rem;
  }
}

@media (min-width: 1200px) {
}

`;

export default GlobalStyle;
