import styled from "styled-components";

export const Button = styled.button`
    background-color: blue;
    color: white;
    height: 40px;
    width: 150px;
    border-radius: 15px;
    margin: 15px 0px 15px 80px;

    &:hover{
        background-color: orange;
        color: blue;
        font-weight: bolder;
        font-size: large;
        border-radius: 15px;
        border-style: solid;
        border-color: blue;
        border-bottom: 10px;
    }
`;

export const Card = styled.div`
    width: 300px;
    height: 300px;
    background-color: white;
    color: white;
    border: solid;
    border-color: black;
    box-sizing: border-box;
    margin: 15px;
    align-content: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const ImgProd = styled.img`
   width: 99%;
    height:96%;
    background-image: url("https://serrablocks.netlify.app/Assets/Esporte/img/E_Gabriel.jpg");
    background-repeat: no-repeat;
    background-size:100%;
    position: relative;
    margin: 2px;

`;

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    h2{
        margin-left: 50px;
        display: block ;
    }

a{
text-decoration: none;
color: #eee;

}


`;