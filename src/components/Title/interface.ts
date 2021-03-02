type DisplayType = 'inline' | 'block'
type TitleSizeType = 'small' | 'medium' | 'large'
type ColorType = 'primary' | 'secondary' | 'white'
type StrokeColor = 'primary' | 'secondary' | 'white'

type TitleVariantType = 'filled' | 'stroked'

export interface StyledTitleProps {
    height?: string
    width?: string
    x: string
    y: string

    fontSize?: TitleSizeType
    strokeColor?: StrokeColor
    color?: ColorType
    
    display?: DisplayType
    textAlign?: 'left' | 'center' 
    variant?: TitleVariantType
    
}

export interface TitleProps extends StyledTitleProps {
    children: React.ReactNode
}
