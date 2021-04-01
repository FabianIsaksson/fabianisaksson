import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { NameLogo } from './components/NameLogo'
import { ThemePicker } from './components/ThemePicker'
import './fonts.css'
import GlobalStyle from './theme/GlobalStyle'
import { lightTheme, darkTheme, THEME } from './theme/theme'

const App = () => {
  const [theme, setTheme] = useState(THEME.LIGHT)

  return (
    <ThemeProvider theme={theme === THEME.LIGHT ? lightTheme : darkTheme}>
      <>
        <GlobalStyle />
        <ThemePicker theme={theme} setTheme={setTheme} />
        <div className="App">
          <header className="App-header">
            <NameLogo />
            <h1>Hello world!</h1>
          </header>
        </div>
      </>
    </ThemeProvider>
  )
}
export default App
