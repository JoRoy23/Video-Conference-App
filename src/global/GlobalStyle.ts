import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        --light-black: #ffffff08;
        --medium-black: #242736;
        --dark-black: #1c1f2e;
        --light-grey: #dcdcdf;
        --medium-grey: #adaeb4;
        --dark-grey: #585a65;
        --white: #ffffff;
        --light-white: #ffffffd9;
        --blue-accent: #0e78f9;
        --orange-accent: #ff742e;

        --grey-border: 0.05rem solid #ffffff1a;
        --dark-grey-border: 0.05rem solid #2b2d3b;

        --button-light-color: #c6c7cb;
        --button-medium-color: #6c6e78;

        --scrollbar-color: #2b2d3b;

        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-family: "Gilroy";

        h1 {
            font-size: 3rem;
            font-weight: 400;
        }

        h2 {
            font-size: 2rem;
            font-weight: 400;
        }

        h3 {
            font-size: 1.8rem;
            font-weight: 400;
        }

        h4 {
            font-size: 1.6rem;
            font-weight: 400;
        }

        h5 {
          font-size: 1.5rem;
          font-weight: 400;
        }

        h6 {
          font-size: 1.4rem;
          font-weight: 400;
        }

        p {
            font-size: 1.4rem;
            font-weight: 400;
            line-height: 2.4rem;
        }

        span {
            font-weight: 400;
        }

        button {
            font-size: 1.4rem;
            font-weight: 400;
        }

        a {
            font-size: 1.4rem;
            font-weight: 400;
        }
    }
`;


export default GlobalStyle;