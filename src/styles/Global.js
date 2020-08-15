import { createGlobalStyle } from "styled-components"
import FG from "../fonts/FG-medium.woff"

export default createGlobalStyle`
	@font-face {
		font-family: FG;
		src: url(${FG}) format('woff');
		font-weight: normal;
		font-style: normal;
	}

	html {
		font-family: FG, sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
	}
	
  body {
    margin: 50px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
