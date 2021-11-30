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
        background-color: ;
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

.menu ul{
        list-style: none;
        position: relative;
        background-color: #3D3D94;
        }

        .menu ul li{
          width: 150px;
          float: left;
          padding: 5px;

          }
        
        .menu ul ul li{
          margin-left: 5px;
          font-weight: bold;
        
            }


          .menu{
            width: 100%;
            max-height: 70px;
            background-color: #3D3D94;
            font-family: Arial, Helvetica, sans-serif;
            margin-top: 5px;
            display: flex;
            flex-shrink: 9;
            align-items: center;
  
          
          }
          .menu a{
            font-size: 15px;
            padding: 0px;
            margin: 0px;
            text-decoration: none;
            
            background-color: #3D3D94;
            color: white;
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
            text-shadow: 2px 2px 2px black;
            }
      
     
        
        .menu ul ul{
        
        position: absolute;
        visibility: hidden;
        }
        .menu ul li:hover ul{ 
        visibility: visible;
        
        }
        .menu ul ul li{
          float: none;
         
        }
        
        .menu a:hover {
        color: #FA7E0D;
        }
        /*  modificacao do dropdown*/
        .dropdown{
          color: white;
          background-color:  #21316B;

        }
        .dropdown:hover{
          color: #FA7E0D;
          cursor: pointer;
        }
        
        nav a {
          text-transform: uppercase;
          color: #000000;
          font-weight: bold;
          font-size: 22px;
          text-decoration: none;
        }


`