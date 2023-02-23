import styled, {keyframes} from "styled-components"
import bg from '../../images/slide3.JPG'

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`

export const Video = styled.video`
    z-index: -1;
    opacity: 1;
    position: fixed;
    min-width: 100%;
    min-height: 100%;
`
export const AnimateBackground = keyframes`
    0%{ background-position: 0 50%;}
    50%{ background-position: 100% 50%;}
    100%{ background-position: 0 50%;}
`
export const AnimatedBackground = styled.div`
    background: url(${bg});
    background-position: center;
    background-size: cover;
    min-width: 100%;
    min-height: 100%;
    opacity: 1;
    z-index: -1;
    position: fixed;

`
export const StyledBackground = styled.div`
  background: linear-gradient(to right, #0c011f 0%, #04101b 100%);
  height: 100vh;
  width: 100vw;
  background-size: 400% 400%;
  animation: ${AnimateBackground} 10s ease infinite;
  z-index: -1;
  position: fixed;
`;