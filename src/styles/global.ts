import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  
  * {
    outline: 0;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style-type: none;
    text-decoration: none;
  }

  html {
    scroll-behavior: smooth !important;
    scroll-snap-points-y: repeat(300px);
    overflow-x: hidden;
  }

  #__next {
    width: 100%;
    min-height: 100vh;
  }
  
  /* TEXT SELECTION */
  ::selection, text::selection {
    color: ${(themeColors) => themeColors.theme.colors.white};
    background: ${(themeColors) => themeColors.theme.colors.primary};
  }

  /* SROLLBAR */
  &::-webkit-scrollbar {
    width: 0.625rem;
    height: 0.625rem;
    border-radius: 16px;
  }
  &::-webkit-scrollbar-track-piece {
    background-color: ${(themeColors) => themeColors.theme.colors.black};
    border-radius: 3px;
  }
  &::-webkit-scrollbar-thumb:vertical {
    height: 5px;
    background-color: #c4c4c4;
    border-radius: 3px;
  }
  &::-webkit-scrollbar-thumb:horizontal {
    width: 5px;
    background-color: #666;
    border-radius: 3px;
  }

`
