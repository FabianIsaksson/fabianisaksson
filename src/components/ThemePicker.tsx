import { Dispatch, SetStateAction } from 'react'
import styled from 'styled-components'

import { THEME } from '../theme/theme'

const Background = styled.div<{ mode: THEME }>`
  position: absolute;
  cursor: pointer;
  bottom: 12px;
  right: 12px;
  width: 12px;
  height: 48px;
  padding: 4px;
  border-radius: 1px;
  overflow: hidden;

  transition: background 200ms ease-in-out;
  background: ${({ theme }) => theme.color.contrast};
`

const ModeImage = styled.div`
  position: absolute;
  width: 12px;
  height: 48px;
  cursor: pointer;
  user-select: none;
  background: ${({ theme }) => theme.color.main}; ;
`

const ModeSwitch = styled.div`
  position: absolute;
  width: 12px;
  height: 24px;
  cursor: pointer;
  user-select: none;
  transition: background 200ms ease-in-out;
  background: ${({ theme }) => theme.color.contrast}; ;
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
        onClick={() =>
          theme === THEME.DARK ? setTheme(THEME.LIGHT) : setTheme(THEME.DARK)
        }
      />
      <ModeSwitch
        onClick={() =>
          theme === THEME.DARK ? setTheme(THEME.LIGHT) : setTheme(THEME.DARK)
        }
      />
    </Background>
  )
}
