import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
    ${reset}
    *{
        box-sizing:border-box;
    }
    body{
        font-family: 'Noto Sans KR', sans-serif;
        line-height: 1.8;
        font-size:14px;

    }
    a{
        color: #000;
        text-decoration: none;
    }
    button{
        border:none;
        cursor:pointer;
        background-color: inherit;
    }
   
`;

export const GlobalContainer = styled.div`
  max-width: 768px;
  margin: 0 auto;
  /* padding: 2% 5%; */
`;

export default GlobalStyles;
