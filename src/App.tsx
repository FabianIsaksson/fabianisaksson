import { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
// import { NameLogo } from './components/NameLogo'
import { ThemePicker } from './components/ThemePicker'
import './fonts.css'
import GlobalStyle from './theme/GlobalStyle'
import { lightTheme, darkTheme, THEME } from './theme/theme'

const MainHeading = styled.h1`
  animation: enter 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  will-change: transform;

  @keyframes enter {
    0% {
      opacity: 0;
      transform: translateX(-50%);
    }
    100% {
      opacity: 1;
      transform: translateX(0%);
    }
  }
`

const SecondHeading = styled.h2`
  animation: enter 1.2s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  will-change: transform;

  @keyframes enter {
    0% {
      opacity: 0;
      transform: translateX(-50%);
    }
    100% {
      opacity: 1;
      transform: translateX(0%);
    }
  }
`

const App = () => {
  const [theme, setTheme] = useState(THEME.LIGHT)

  return (
    <ThemeProvider theme={theme === THEME.LIGHT ? lightTheme : darkTheme}>
      <>
        <GlobalStyle />
        <ThemePicker theme={theme} setTheme={setTheme} />
        <div className="App">
          <header className="App-header">
            <MainHeading>Fabian Isaksson</MainHeading>
            <SecondHeading>Web Designer & Developer</SecondHeading>
          </header>
        </div>
        <a href="mailto:fabi.isak@gmail.com" rel="noreferrer" target="_blank">
          Send me an email
        </a>
        <p>More coming soon...</p>
      </>
    </ThemeProvider>
  )
}
export default App
