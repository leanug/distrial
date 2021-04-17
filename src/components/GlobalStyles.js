import { createGlobalStyle } from 'styled-components'
import { 
    setColor, 
    setFont, 
    setBreakpoint, 
    setTransition } from '../styles'

const Globals = createGlobalStyle`
    *,
    ::after,
    ::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html {
        box-sizing: border-box;
        font-size: 62.5%;
    }

    body {
        background:  ${ setColor.sigma };
        color:       ${ setColor.delta_1 };
        font-family: ${ setFont.secondaryFont };
        font-size: 1.8em;
        font-weight: 400;
        line-height: 2;
    }

    ul {
        list-style-type: none;
    }
    
    a {
        color: ${ setColor.delta_1 };
        text-decoration: none;
        ${ setTransition() };
    }

    a:hover {
        color: ${ setColor.alpha };
        text-decoration: none;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: ${ setFont.primaryFont };
        font-weight: 600;
        line-height: 1.25;
    }

    h1, .h1 { font-size: 2em; }
    h2, .h2 { font-size: 1.8em; }
    h3, .h3 { font-size: 1.3em; }
    h4, .h4 { font-size: 1.1em; }
    h5, .h5 { font-size: 1em; }
    h6, .h6 { font-size: 0.875em; }

    .d-1,
    .d-2,
    .d-3 { 
        font-weight: 300;
        line-height: 1;
    }

    .d-1 { font-size: 3em; }
    .d-2 { font-size: 2em; }
    .d-3 { font-size: 1.5em; }

    @media screen and ( min-width: ${ setBreakpoint.medium } ) {
        h1, .h1 { font-size: 2.4em; }
        h2, .h2 { font-size: 2em; }
        h3, .h3 { font-size: 1.6em; }
        h4, .h4 { font-size: 1.3em; }
        h5, .h5 { font-size: 1em; }
        h6, .h6 { font-size: 0.875em; }

        .d-1 { font-size: 5em; }
        .d-2 { font-size: 3.5em; }
        .d-3 { font-size: 2.5em; }
    }

    p {
        line-height: 1.8;
        margin: 0 0 1.25rem 0;
    }

    .btn {
        border: none;
        cursor: pointer;
        display: inline-block;
        font-size: 1.6rem;
        font-weight: 500;
        padding: 0.8rem 2rem;
    }

    button {
        border: none;
    }

    .center {
        text-align: center;
    }

    .mx-center {
        margin: 0 auto;
    }

    .max-width-1 {
      max-width: 60rem;
    }
    
    .max-width-2 {
      max-width: 72rem;
    }

    .container {
        max-width: ${ setBreakpoint.xLarge };
        margin: 0 auto;
        width: 90vw;
    }

    .p-y {
        padding: 10rem 0;
    }

    .small {
        font-size: 1.2rem;
    }

    .vh-100 {
        min-height: 100vh;
    }

    .medium {
        font-weight: 500;
    }

    .line {
        background-color: ${setColor.gamma};
        height: 1px;
        margin: 2rem 0;
        width: 7rem;

        &.light {
            background-color: ${setColor.light};
        }
    }

    .overflow-hidden {
        overflow: hidden;
    }
`

export default Globals