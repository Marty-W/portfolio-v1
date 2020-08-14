import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html,
body,
p,
ol,
ul,
li,
dl,
dt,
dd,
blockquote,
figure,
fieldset,
legend,
textarea,
pre,
iframe,
hr,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
  font-weight: normal;
}

ul {
  list-style: none;
}

button,
input,
select,
textarea {
  margin: 0;
} 

html {
  box-sizing: border-box;
  scroll-snap-type: y mandatory;
  height: 100%;
}

*, *::before, *::after {
  box-sizing: inherit;
}

img,
video {
  height: auto;
  max-width: 100%;
}

a {
  text-decoration: none;
  color: inherit;
}

 body {
     font-family: 'Raleway', sans-serif;
     scroll-snap-type: y mandatory;
     background-color: ${(props) => props.theme.colors.primary};
     overflow-x: hidden;
     overflow-y: scroll;
     height:100%;
 }
`;
