type DisplayType = 'inline' | 'block'
type FontSizeType = 'medium' | 'large'
type ColorType = 'primary' | 'secondary' | 'white'

type TitleVariantType = 'filled' | 'stroked'

export interface StyledTitleProps {
    display?: DisplayType
    fontSize?: FontSizeType
    color?: ColorType

    hexInitial?: string
    hexFinal?: string
    textAlign?: 'left' | 'center' 
    variant?: TitleVariantType
}

export interface TitleProps {
    children: React.ReactNode
}
