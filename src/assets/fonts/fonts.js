import { createGlobalStyle } from "styled-components"
import OpenSansWoff from "./OpenSansRegular.woff"
import OpenSansWoff2 from "./OpenSansRegular.woff2"
import InterWoff from "./InterRegular.woff"
import InterWoff2 from "./InterRegular.woff2"

const FontStyles = createGlobalStyle`
  @font-face {
    font-display: swap;
    font-family: 'Open Sans';
    src: local('Open Sans'), local('OpenSans'),
    url(${OpenSansWoff2}) format('woff2'),
    url(${OpenSansWoff}) format('woff');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-display: swap;
    font-family: 'Inter';
    src: local('Inter'), local('Inter'),
    url(${InterWoff2}) format('woff2'),
    url(${InterWoff}) format('woff');
    font-weight: 400;
    font-style: normal;
  }
`;

export default FontStyles;
