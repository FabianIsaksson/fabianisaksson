import { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
// import { NameLogo } from './components/NameLogo'
import { ThemePicker } from './components/ThemePicker'
import './fonts.css'
import GlobalStyle from './theme/GlobalStyle'
import { lightTheme, darkTheme, THEME } from './theme/theme'

const MainHeading = styled.h1`
  animation: enter 500ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
  will-change: transform;

  @keyframes enter {
    0% {
      opacity: 0;
      transform: translateY(50px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`

const SecondHeading = styled.h2`
  animation: enter 700ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
  will-change: transform;

  @keyframes enter {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
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
        <h3>SELECTED FREELANCE PROJECTS</h3>
        <ul>
          <li>
            <a
              href="https://hommage.beckmans.college/"
              target="_blank"
              rel="noreferrer"
            >
              HOMMAGE – Beckmans College of Design at Stockholm Fashion Week
              2022
            </a>
          </li>
          <li>
            <a
              href="https://intotheweb.online/"
              target="_blank"
              rel="noreferrer"
            >
              Into the web – Folkteatern göteborg 2021
            </a>
          </li>
          <li>
            <a
              href="https://github.com/FabianIsaksson/fabianisaksson"
              target="_blank"
              rel="noreferrer"
            >
              Portfolio – 2020 (Github)
            </a>
          </li>
        </ul>
        <h3>SELECTED CONSULTANT PROJECTS</h3>
        <ul>
          <li>
            Dustin home
            <ul>
              <li>Q1-Q3 2021</li>
              <li>Product: Webshop & E-Commerce</li>
              <li>Role: Frontend developer & UX consultant</li>
            </ul>
          </li>
          <li>
            Momang
            <ul>
              <li>2020 Q3-Q4</li>
              <li>Product: SaaS Web based CV editor</li>
              <li>Role: Fullstack developer & designer</li>
            </ul>
          </li>
          <li>
            TV4 / Telia
            <ul>
              <li>2020 Q1-Q3</li>
              <li>Product: Cmore streaming service</li>
              <li>Role: Fullstack developer</li>
            </ul>
          </li>
          <li>
            3 (Tre)
            <ul>
              <li>2019</li>
              <li>Product: Mitt3 self service platform</li>
              <li>Role: Fullstack developer</li>
            </ul>
          </li>
        </ul>
        <p>More info about me coming soon...</p>
      </>
    </ThemeProvider>
  )
}
export default App
