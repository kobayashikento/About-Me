import { animated } from 'react-spring'
import styled, { createGlobalStyle } from 'styled-components'

const StyledContainer = styled(animated.div)`
  position: fixed;
  display: grid;
  grid-template-columns: repeat(2, minmax(100px, 1fr));
  grid-gap: 25px;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0px 10px 10px -5px rgba(0, 0, 0, 0.05);
  will-change: width, height;
`
export { StyledContainer }