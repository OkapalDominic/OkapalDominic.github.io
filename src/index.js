import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Main from './App/Main';

const GlobalStyle = createGlobalStyle`
    html,
    body,
    #app,
    .wrapper {
        min-height: 100vh;
        height: 100%;
        padding: 0;
        margin: 0;
    }

    html {
        box-sizing: border-box;
        font-size: 100%;
        padding: 0;
        margin: 0;
    }

    * {
        &,
        &::after,
        &::before {
            box-sizing: inherit;
            padding: 0;
            margin: 0;
        }
    }

    body {
        padding: 0;
        margin: 0;
        font: 1rem / 1.414 arial, sans-serif;
        background-color: #000;
    }
`

const wrapper = document.getElementById('app');

const App = () => (
    <BrowserRouter>
        <GlobalStyle />
        <Main />
    </BrowserRouter>
);

ReactDOM.render(<App />, wrapper);