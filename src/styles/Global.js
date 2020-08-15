import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
	html {
    font-family: sans-serif;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
	}
	
  body {
    margin: 50px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`
