import styled from 'styled-components'
import { StyledTitleProps } from '../interface'

export const Title = styled.svg`
  
`

export const OutlinedText = styled.text<StyledTitleProps>`
  font-family: Archivo;
  font-style: italic;
  font-weight: 700;
  font-size: 100px;
  text-anchor: center;
  stroke-width: 3px;
  fill: none;
  /* stroke: url(#MyGradient); */
`
