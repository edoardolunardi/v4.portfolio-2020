import styled from "styled-components"

const Title = styled.h1`
  user-select: none;
  margin-left: -0.5vw;
  padding-top: 22vw;
  line-height: 0.8;
  margin-bottom: 4vw;
  font-size: ${props => props.theme.fontSizes.big};

  @media screen and (max-width: ${props => props.theme.breakpoints.md}px) {
    padding-top: 30vh;
  }
`

export default Title
