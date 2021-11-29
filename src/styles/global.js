import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }

    body {
        -webkit-font-smoothing: antialiased;
        background-color: #21316B;
    }

    body, input, button {
        font-size: 16px;
    }

    #root {
        max-width: 1080px;
        margin: 0 auto;
        padding: 40px 20px;
        background-color: grey;
    }

    button {
        cursor: pointer;
    }


    #footer{
color: red;
background-color: #21316B;

    }
#produto{



}

`