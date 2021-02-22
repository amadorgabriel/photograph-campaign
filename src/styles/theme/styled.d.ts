import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    default: {
      black: string
      white: string
    }
    purple: {
      primary: string
      secondary: string
    }
    pink: {
      primary: string
      secondary: string
    }
  }
}
