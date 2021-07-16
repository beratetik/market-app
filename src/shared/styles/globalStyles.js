import { createGlobalStyle } from "styled-components";

import { palette } from './'

const GlobalStyle = createGlobalStyle`
* {
   box-sizing: border-box;
   font-family: 'Open Sans';

   &::-webkit-scrollbar {
      width: 4px;
  }

   &::-webkit-scrollbar-track {
      border-radius: 4px;
   }
   
   &::-webkit-scrollbar-thumb {
      box-shadow: inset 0 0 6px #E0E0E0;
      border-radius: 4px;
      cursor: pointer;
    }
}

body {
   margin: 0;
   background-color: ${palette.background};
   font-family: 'Open Sans';
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
}
`

export default GlobalStyle
