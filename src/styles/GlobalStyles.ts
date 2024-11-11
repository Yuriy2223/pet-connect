import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: "Manrope";
  src: url("../assets/fonts/Manrope-Medium.woff2") format("woff2");
  font-weight: 500; /* Medium */
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Manrope";
  src: url("../assets/fonts/Manrope-SemiBold.woff2") format("woff2");
  font-weight: 600; /* Semi Bold */
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Manrope";
  src: url("../assets/fonts/Manrope-Bold.woff2") format("woff2");
  font-weight: 700; /* Bold */
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: "Manrope";
  src: url("../assets/fonts/Manrope-ExtraBold.woff2") format("woff2");
  font-weight: 800; /* Extra Bold */
  font-style: normal;
  font-display: swap;
}
:root {
  --font-family: "Manrope", sans-serif;

  --white-color: #FFFFFF;
  --white-opacity: rgba(255, 255, 255, 0.15);
  --white-tr: rgba(255, 255, 255, 0.4);
  --light-yellow: #fff4df;
  
  --dark-gray: #262626;
  --ligh-gray: rgba(38, 38, 38, 0.4);
  --ligh-gray-opacity: rgba(38, 38, 38, 0.15);
  --ligh-gray-tr: rgba(38, 38, 38, 0.5);

  --bright-red: #f43f5e;
  --light-red: rgba(244, 63, 94, 0.1);

  --bright-blue: #54adff;
  --light-blue: rgba(84, 173, 255, 0.1);

  --yellow: #FFD700;
  --bright-green: #08AA83;
  --background-body: #f9f9f9; 
  
  /*  Theme 1 */
  --golden: #F6B83D;
  /* --golden-light: #FFF4DF; */
  --golden-light: #f0c678;
  /*  Theme 2 */
  --soft-teal: #9fbaae;       
  --mint-green: #cbded3;      
    /*  Theme 3 */ 
  --powder-blue: #9fb7ce;    
  --sky-blue: #bfd6ea;        
    /*  Theme 4 */ 
  --peach: #e0a39a;          
  --soft-rose: #f2c0bd;       
  /*  Theme 5 */
  --coral: #f0aa8d;          
  --blush-pink: #f4c8ba;     
}

* {
  box-sizing: border-box;
  padding: 0; 
  margin: 0; 
  outline: red;
 }

 body {
  font-family: var(--font-family); 
  background-color: var(--background-body);
 }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: normal;
  }

  ul,
  ol {
    list-style: none;
  }

  a {
    font-family: inherit;
    text-decoration: none;
    transition: all 300ms ease; 
  }

  img {
    display: block;
    width: 100%;
    height: auto;
  }

  button {
    font-family: inherit;
    transition: all 300ms ease; 
    cursor: pointer;
  }
  
  input,
  textarea {
    font-family: inherit;
    outline: none; 
    transition: all 300ms ease;
  }
`;
