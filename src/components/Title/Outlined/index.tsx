import React from 'react'
import { TitleProps } from '../interface'
import { Title, OutlinedText } from './styled'

const OutlinedTitle: React.FC<TitleProps> = ({ children, ...rest }) => {
  return (
    <Title
      height="60%"
      width="500px"
      version="1.1"
      xmlns="//www.w3.org/2000/svg"
      xmlnsXlink="//www.w3.org/1999/xlink"
      {...rest}
    >
      <OutlinedText x="10%" y="95%">
        {children}
      </OutlinedText>
    </Title>
  )
}

export default OutlinedTitle
