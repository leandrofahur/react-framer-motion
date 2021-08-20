import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --black: #000;
    --white: #FFF;
    --dark-gray:#333;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
    color: var(--black);    
  }
  html, body, #root {  
    max-height: 100vh;
    max-width: 100vw;
    width: 100%;
    height: 100%;    
    background-color: var(--white);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
`;
