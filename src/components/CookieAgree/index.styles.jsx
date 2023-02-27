import styled from "styled-components";

export const Footer = styled.footer`
    position: fixed;
    width: 100%;
    z-index: 9999;
    bottom: 0px;
    align-items: center;
    background-color: #111111;

    height: 50px;
    color: white;
    font-size: 1.5vw;
    display: flex;
    font-family: 'Exo 2';
    box-shadow: 0px 0px 5px 3px #7a7a7a3b;
    justify-content: center;
    @media screen and (max-width: 800px) {
        font-size: 2.2vw;
    }
`

export const Button = styled.button`
    font-family: 'Exo 2';
    padding: 3px 15px;
    cursor: pointer;
    border: 0;
    margin: 3vw;
    border-radius: 4px;
    background-color: #4b0000;
    color: white;
`
export const ReadMore = styled.u`
    font-size: 1.3vw;
    margin: 1vw;
`
export const MoreWrapper = styled.div`
    position: absolute;
    margin-left: 220px;
    font-size: 0.8rem;
    padding: 5px;
    margin-bottom: 80px;
    border-radius: 5px;
    color: black;
    background-color: white;
    box-shadow: 0px 0px 5px 3px #00000094;
    @media screen and (max-width: 800px){
        margin-left: 0;
    }
`