import { Dispatch, SetStateAction } from 'react'
import styled, { css } from 'styled-components'
import sun from '../assets/png/sun.png'
import moon from '../assets/png/moon.png'
import { THEME } from '../theme/theme'

const Background = styled.div<{ mode: THEME }>`
  position: absolute;
  bottom: 12px;
  right: 12px;
  width: 36px;
  height: 36px;
  padding: 12px;
  border-radius: 4px;

  box-shadow: 2px 2px 2px #00000068;

  overflow: hidden;

  transition: background 1s ease-in;
  background: ${({ mode }) => (mode === THEME.LIGHT ? '#529ae7' : '#2e5988')};
`

const ModeImage = styled.img<{ mode: THEME; show: boolean }>`
  position: absolute;
  width: 36px;
  height: 36px;
  cursor: pointer;
  user-select: none;
  ${({ show, mode }) =>
    show
      ? css`
          transform: rotate(0deg);
          transform-origin: 24px -23px;
          transition: all 1s ease;
          opacity: 1;
        `
      : css`
          transform: rotate(${mode === THEME.LIGHT ? '-180deg' : '180deg'});
          transform-origin: 24px -23px;
          transition: all 1s ease;
          opacity: 0;
        `}
`

export const ThemePicker = ({
  theme,
  setTheme,
}: {
  theme: THEME
  setTheme: Dispatch<SetStateAction<THEME>>
}) => {
  return (
    <Background mode={theme}>
      <ModeImage
        mode={THEME.LIGHT}
        show={theme === THEME.LIGHT}
        onClick={() => setTheme(THEME.DARK)}
        src={sun}
        alt="sun"
      />
      <ModeImage
        mode={THEME.DARK}
        show={theme === THEME.DARK}
        onClick={() => setTheme(THEME.LIGHT)}
        src={moon}
        alt="moon"
      />
    </Background>
  )
}
