import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    body {
        background: ${({theme}) => theme.background};
        background-color: ${({theme}) => theme.backgroundColor};
        color: ${({theme}) => theme.text};
        transition: all 0.50s linear;
    }
    
    form input, ul, .bottomStats {
        background-color: ${({theme}) => theme.inputListColor}
    }

    form input {
        color: ${({theme}) => theme.text};
    }

    .task {
        border-bottom: ${({theme})=> theme.borderBottom}
    }

    .task input {
        border: ${({theme})=> theme.borderBottom}
    }

    .crossout {
        color: ${({theme}) => theme.crossoutColor};
    }

    button:focus {
        color: ${({theme}) => theme.text};
    }
    `