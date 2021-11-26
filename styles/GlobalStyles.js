import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.colors.body};
        color: ${({ theme }) => theme.colors.text};
        transition: all 0.5s linear;
    }

    a {
        color: ${({ theme }) => theme.colors.text};
        cursor: pointer;
    }

    h2 {
        color: ${({ theme }) => theme.colors.text};
    }

    .navbar {
        background: ${({ theme }) => theme.colors.navigation.background};
        color: ${({ theme }) => theme.colors.text};
    }
    .column {
        background: ${({ theme }) => theme.colors.body};
    }
`;

export default GlobalStyles;
