import 'styled-components'

type CustomTheme = typeof lightTheme & typeof darkTheme
declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {}
}

export enum THEME {
  LIGHT = 'LIGHT',
  DARK = 'DARK',
}

export const lightTheme = {
  type: THEME.LIGHT,
  color: {
    main: '#f9f9f9',
    contrast: '#353535',
    constrastLight: '#585858',
    accent: '#ffb7b7',
    accentLight: '#746CA6',
  },
}

export const darkTheme = {
  type: THEME.DARK,
  color: {
    main: '#353535',
    contrast: '#f9f9f9',
    constrastLight: '#f1f1f1',
    accent: '#ffb7b7',
    accentLight: '#746CA6',
  },
}
