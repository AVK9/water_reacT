import { css } from '@emotion/react';
import RobotoBold from '../fonts/roboto.bold.ttf';
import RobotoMedium from '../fonts/roboto.medium.ttf';
import RobotoRegular from '../fonts/roboto.regular.ttf';

const GlobalStyles = () => {
  return css`
    :root {
      --primery-color-white: #fff;
      --primery-color-black: #2f2f2f;
      --primery-color-blue: #407bff;
      --secondary-color-2: #ecf2ff;
      --secondary-color-3: #ef5050;
      --secondary-color-4: #9ebbff;
      --secondary-color-5: #ff9d43;
      --secondary-color---5: #d7e3ff;
      --color: #fff;
      --color-2: #2f2f2f;
      --color-3: #407bff;
      --color-4: #ecf2ff;
      --color-5: #ef5050;
      --color-6: #9ebbff;
      --color-7: #ff9d43;
      --color-8: #d7e3ff;
      --font-family: 'Roboto', sans-serif;
    }
    html,
    body {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-style: normal;
      width: 100%;
      height: 100vh;
      margin: 0;
      line-height: 1;
      scroll-behavior: smooth;
      transition: all 0.5s linear;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
      margin: 0;
    }
    a {
      color: currentColor;
      text-decoration: none;
    }
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    img {
      display: block;
      max-width: 100%;
      height: auto;
    }
    button {
      cursor: pointer;
      border: none;
      padding: 0;
    }

    @font-face {
      font-family: 'Roboto';
      font-weight: 700;
      src: url(${RobotoBold}) format('truetype');
    }
    @font-face {
      font-family: 'Roboto';
      font-weight: 500;
      src: url(${RobotoMedium}) format('truetype');
    }

    @font-face {
      font-family: 'Roboto';
      font-weight: 400;
      src: url(${RobotoRegular}) format('truetype');
    }

    * {
      box-sizing: border-box;
    }

    ::-webkit-scrollbar {
      width: 4px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #9ebbff;
      border-radius: 8px;
    }

    ::-webkit-scrollbar-track {
      background-color: rgba(239, 237, 232, 0.1);
    }

    * {
      scrollbar-color: #9ebbff rgba(239, 237, 232, 0.1);
    }
  `;
};

export default GlobalStyles;
