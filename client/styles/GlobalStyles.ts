import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export default createGlobalStyle`
  :root {
    --black: #000000;    
    --white: #FFFFFF; 
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;     
  }
  html, body, #root {  
    max-height: 100vh;
    max-width: 100%;
    margin: 0 auto;
    width: 100vw;
    height: 100vh;        
    background: var(--white);
  }  
  body { 
    background: var(--white);
    color: var(--black);    
  }
  body, input, textarea, select, button {
    font: 400 1rem Roboto, sans-serif;
  }
  button {
    cursor: pointer;
  }
  a { 
    color: inherit;
    text-decoration: none;
  }
  @media(max-width:1080px) {
    html { 
      font-size: 93.75%
    }
  }
  @media(max-width:720px) {
    html { 
      font-size: 87.5%
    }
  }
`;
