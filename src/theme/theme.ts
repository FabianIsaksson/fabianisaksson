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
    main: '#FFFFFF',
    contrast: '#B09489',
    constrastLight: '#C2EEF2',
    accent: '#B3AAF2',
    accentLight: '#746CA6',
  },
}

export const darkTheme = {
  type: THEME.DARK,
  color: {
    main: '#071124',
    contrast: '#FFFFFF',
    constrastLight: '#F2DEB6',
    accent: '#B3AAF2',
    accentLight: '#746CA6',
  },
}
