import styled, { keyframes } from 'styled-components'

export const Main = styled.main`
  display: 'flex';
  justify-content: 'center';
  align-items: 'center';
  flex-direction: 'column';
  background-color: #212121;
  width: '100%';
  height: '100vh';
`

const move = keyframes`
    0% { position: absolute; top: 30%; left: 5% ;}
    25% { position: absolute; top: 60%; left: 30% ;}
    50% { position: absolute; top: 40%; left: 60% ;}
    75% { position: absolute; top: 10%; left: 40% ;}
    100% { position: absolute; top: 30%; left: 5% ;}
`

export const MainText = styled.div`
  .main-text {
    animation: ${move} 10s infinite;
    position: absolute;
  }
`

const textBase = styled.text`
  font-family: Archivo;
  font-style: italic;
  font-weight: bold;
  font-size: 11rem;
  text-anchor: start;
  stroke-width: 2px;
`

export const FillStrokeText = styled(textBase)`
  stroke: var(--purple-primary);
  fill: var(--purple-primary);
`

export const StrokeText = styled(textBase)`
  fill: none;
  stroke: var(--purple-primary);
`

export const FillStrokeTextWhite = styled(FillStrokeText)`
  stroke: var(--font-primary);
  fill: var(--font-primary);
`

export const StrokeTextWhite = styled(StrokeText)`
  stroke: var(--font-primary);
`
