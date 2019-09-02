import { createGlobalStyle } from 'styled-components';

import BrandingFont from '../assets/fonts/Branding-Medium.otf';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  @font-face {
        font-family: 'Branding';
        font-style: normal;
        font-stretch: normal;
        src: local("Branding Medium"), local("Branding-Medium"), url(${BrandingFont}) format("otf");
    }

    @font-face {
        font-family: 'Open Sans';
        font-stretch: normal;
        src: local("OpenSans Regular"), local("OpenSans-Regular"), url("../assets/fonts/OpenSans-Regular.ttf") format("ttf");
    }

  html, body, #root {
    min-height: 100%;
  }

  body {
    background: #EEE;
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Branding';
  }
`;
