import React from 'react'
import { TitleProps } from '../interface'

const StrokedTitle: React.FC<TitleProps> = ({ ...rest }) => {
  return (
    <svg
      height="60%"
      width="500px"
      version="1.1"
      xmlns="//www.w3.org/2000/svg"
      xmlnsXlink="//www.w3.org/1999/xlink"
      {...rest}
    >
      <text className="stroke-text" x="10%" y="95%"></text>
    </svg>
  )
}

export default StrokedTitle
