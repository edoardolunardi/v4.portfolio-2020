import styled from "styled-components"

export const VideoContainer = styled.div`
  padding: 5vw;
  background-color: ${props => props.theme.colors.grey};
  margin-top: 5vw;
`

export const VideoWrapper = styled.div`
  width: 100%;
  position: relative;
  padding-top: 51.53%;

  > video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
`

export const ContentReveal = styled.div`
  opacity: 0;
  transform: translate3d(0, 100px, 0);
`

export const Title = styled.h1`
  user-select: none;
  margin-left: -0.5vw;
  padding-top: 22vw;
  line-height: 0.8;
  margin-bottom: 4vw;
  font-size: ${props => props.theme.fontSizes.big};

  span {
    opacity: 0;
  }

  @media screen and (max-width: ${props => props.theme.breakpoints.md}px) {
    padding-top: 30vh;
  }
`
