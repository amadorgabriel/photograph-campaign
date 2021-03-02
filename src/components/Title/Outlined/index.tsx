import React from 'react'
import { TitleProps } from '../interface'
import { OutlinedText } from './styled'

const OutlinedTitle: React.FC<TitleProps> = ({
  children,
  height,
  width,
  fontSize,
  strokeColor,
  x,
  y,
  ...rest
}) => {
  return (
    <svg
      height={height}
      width={width}
      version="1.1"
      xmlns="//www.w3.org/2000/svg"
      xmlnsXlink="//www.w3.org/1999/xlink"
    >
      <linearGradient id="MyGradient">
          <stop offset="5%" stop-color="#ED0140"></stop>
          <stop offset="95%" stop-color="#BA01EA"></stop>
        </linearGradient>

      <OutlinedText
        x={x}
        y={y}
        strokeColor={strokeColor}
        display="inline"
        fontSize={fontSize}
        {...rest}
      >
        {children}
      </OutlinedText>
    </svg>
  )
}

export default OutlinedTitle
