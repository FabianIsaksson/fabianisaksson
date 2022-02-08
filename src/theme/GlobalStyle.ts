import { createGlobalStyle } from 'styled-components/macro'

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 16px;
  }

  body {
    background-color: ${({ theme }) => theme.color.main};
    font-family: 'TiemposHeadline';
    transition: background 200ms ease;
    
    padding: 2rem;
    margin: 0;
  }

  a {
    text-decoration: underline;
    color: ${({ theme }) => theme.color.contrast};
    font-size: 1.2rem;
  }


  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    ::selection {
      background: #ffb7b7; 
    }
    color: ${({ theme }) => theme.color.contrast};
    transition: color 200ms ease;
  }

  h1 {
    font-family: 'TiemposHeadline';
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 1rem;
    margin-top: 1.5rem;
    
    @media screen and (min-width: 600px) {
      margin-top: auto;
      font-size: 5rem;

    }
  }
  
  h2 {
    font-family: 'Helvetica Neue';
    font-size: 1.5rem;
    font-weight: 400;
    margin-top: 1rem;
    margin-bottom: 1rem;
    @media screen and (min-width: 600px) {
      font-size: 2rem;

    }
  }
  
  h3 {
    font-family: 'Helvetica Neue';
    font-size: 1.2rem;
    font-weight: 800;
    margin-bottom: 1rem;
    margin-top: 1.5rem;
    
    @media screen and (min-width: 600px) {
      font-size: 1.5rem;
    }

  }
  li {
    color: ${({ theme }) => theme.color.contrast};
    margin-top: 1rem;
    font-size: 1.2rem;
  }


  p {
    margin-top: 66px;
    color: #585858;
    font-family: 'Helvetica Neue';
    color: ${({ theme }) => theme.color.constrastLight};
  }


`
export default GlobalStyle
