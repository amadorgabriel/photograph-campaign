import styled from 'styled-components'
import { StyledTitleProps } from '../interface'

function convertPxtoRem(pixelValue: string) {
  const regexPixel = /\s*px\s*/
  const value = pixelValue.split(regexPixel)[0]
  const rem = (parseFloat(value) / 16).toString()

  return rem + 'rem'
}

export const OutlinedText = styled.text<StyledTitleProps>`
  font-family: Archivo;
  font-style: italic;
  font-weight: 700;
  font-size: ${({ fontSize }) => {
    switch (fontSize) {
      case 'small':
        return convertPxtoRem('100px')

      case 'medium':
        return convertPxtoRem('176px')

      case 'large':
        return convertPxtoRem('192px')

      default:
        return convertPxtoRem('100px')
    }
  }};

  text-anchor: center;
  stroke-width: 3px;
  fill: none;
  stroke: ${({theme, strokeColor}) => theme.colors.title[strokeColor] || theme.colors.title.primary };
  text-transform: uppercase;
`
