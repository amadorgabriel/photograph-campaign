import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    outline: 0;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    overflow-y: hidden;
    overflow-x: hidden;
  }

  :root {
  --background-black: #212121;
  --font-primary: #fff;
  --purple-primary: #8153f1;
  --purple-secondary: #a88bf0;
  --pink-primary: #ed0140;
  --pink-secondary: #ba01ea;
}

.fill-stroke-text {
  font-family: Archivo;
  font-style: italic;
  font-weight: bold;
  font-size: 11rem;

  text-anchor: start;
  stroke-width: 2px;
  stroke: var(--purple-primary);
  fill: var(--purple-primary);
}

 .fill-stroke-text-white {
  stroke: var(--font-primary);
  fill: var(--font-primary);
}

.stroke-text {
  font-family: Archivo;
  font-style: italic;
  font-weight: bold;
  font-size: 11rem;

  text-anchor: start;
  stroke-width: 2px;
  fill: none;
  stroke: var(--purple-primary);
}

 .stroke-text-white {
  stroke: var(--font-primary);
}

.main-text{
  animation: move 10s infinite;
  position: absolute;
}

@keyframes move{
    0% { position: absolute; top: 30%; left: 5% ;}
    25% { position: absolute; top: 60%; left: 30% ;}
    50% { position: absolute; top: 40%; left: 60% ;}
    75% { position: absolute; top: 10%; left: 40% ;}
    100% { position: absolute; top: 30%; left: 5% ;}
}

  #__next {
    width: 100%;
    min-height: 100vh;
  }
`
