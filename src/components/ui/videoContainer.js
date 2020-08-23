import styled from "styled-components"

export const VideoContainer = styled.div`
  padding: 5vw;
  background-color: white;
  margin-top: 5vw;
`

export const VideoWrapper = styled.div`
  width: 100%;
  position: relative;
  padding-top: 56.25%;

  > video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
`
