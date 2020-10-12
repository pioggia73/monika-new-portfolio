import React from "react"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`

/* 
===============================
fonts
===============================
*/
@import url('https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:ital,wght@0,300;0,700;1,300&display=swap');

/* 
===============================
variables
===============================
*/

:root {
    /*      colors     */
    --clr-main-white: #f5f5f5;
     --clr-main-grey: #ececec;
    --clr-primary: #af9a7d;
    --clr-primary-5: #2caeba;
    --clr-primary-9: hsl(185, 94%, 87%);
    --clr-grey-5: hsl(210, 22%, 49%);
     --clr-grey-10: hsl(210, 36%, 96%);
    --clr-red-dark: hsl(360, 67%, 44%);

    --ff-primary: "Open Sans", sans-serif;
    --transition: all 0.5s linear;
    --spacing: 0.2rem;
    --radius: 0.25rem;
    --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    --max-width: 1170px;
    --fixed-width: 700px;
};

/*
===============================
global styles
===============================
*/

*,
::after,
::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
};

body { 
    /* background: var(--clr-main-white); */
    font-family: var(--ff-primary);
    };

html { font-size: 62.5% };

h1,
h2,
h3,
h4 {
    letter-spacing: var(--spacing);
    text-transform: capitalize;
    line-height: 1.25;
    margin-bottom: 0.75rem;
};

h1 { font-size: 2.5rem; };
h2 { font-size: 1.6rem; };
h3 { font-size: 1rem; }
h4 { font-size: 0.875rem; };

ul { list-style-type: none; }

a { 
    text-decoration: none; 
    color: inherit;
    cursor: pointer;
}

@media screen and (min-width: 800px) {

    h1 { font-size: 4rem; }
    h2 { font-size: 2rem; }
    h3 { font-size: 1.75rem; }
    h4 { font-size: 1rem; }

    /* body { font-size: 1rem; } */
    h1,
    h2,
    h3,
    h4 {
        line-height: 1;
    }
    };

img {
    width: 100%;
    display: block;
};

.social-links {
    margin-top: 2rem;
    width: 15rem;
    display: flex;
    justify-content: space-between;
};

.social-link {
    font-size: 1.75rem;
    color: var(--clr-grey-1);
    transition: var(--transition);
};

.social-link:hover { color: var(--clr-primary-5); };

/*
===============================
global classes
===============================
*/

.section { padding: 5rem .5rem; };

.section-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
};

.underline {
    width: 5rem;
    height: 0.25rem;
    margin-bottom: 1.25rem;
    background: var(--clr-primary-5);
    margin-left: auto;
    margin-right: auto;
};

.section-title {
    margin-bottom: 4rem;
    text-align: center;
};

.btn {
    text-transform: uppercase;
    background: var(--clr-primary-5);
    color: var(--clr-primary-9);
    padding: .5rem 1rem;
    letter-spacing: var(--spacing);
    display: inline-block;
    font-weight: 700;
    -webkit-transition: var(--transition);
    transition: var(--transition);
    font-size: 1.2rem;
    border: 2px solid transparent;
    cursor: pointer;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
    border-radius: var(--radius);
};

.btn:hover {
    color: var(--clr-main-black);
    background: transparent;
    border: 2px solid var(--clr-primary-5);
};

.center-btn {
    display: block;
    width: 15rem;
    text-align: center;
    margin: 0 auto;
    margin-top: 3rem;
};

/*
===============================
global pages
===============================*/

    .projects-page,
    .error-page,
    .about-page,
    .contact-page {
        background: var(--clr-grey-10);
        min-height: calc(100vh - 5rem - 9rem);
};
`

export const wrapRootElement = ({ element }) => {
    return (
        <>
            <GlobalStyle />
            {element}
        </>
    )
};

