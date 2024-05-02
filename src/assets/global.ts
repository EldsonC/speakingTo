import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;

        outline: none;
        list-style: none;
        text-decoration: none;
        border: none;
    }

    :root {
        --primary-color: #4953D8;
        --secundary-color: #FEFEFE;
    }

    body, html {
        font-family: "Poppins", sans-serif;
        background-color: var(--secundary-color);
    }
`;