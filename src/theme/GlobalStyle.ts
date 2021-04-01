import { createGlobalStyle } from 'styled-components/macro'

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.color.main};
    font-family: 'Helvetica Neue';
    transition: background 500ms ease;
    
    padding: 0;
    margin: 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${({ theme }) => theme.color.contrast};
    transition: all 500ms ease;
  }
`
export default GlobalStyle
