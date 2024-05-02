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

        --primary-100: #DBDEFD;
        --primary-200: #B8BEFB;

        --text-color-600: #090B2A;
        --text-color-100: #B9B9B9;


    }

    body, html {
        font-family: "Poppins", sans-serif;
        background-color: var(--secundary-color);
    }
`;