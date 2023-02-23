import styled from "styled-components";

export const Header = styled.div`
    display: flex;
    position: relative;
    z-index: 9998;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    height: 55px;
    box-shadow: 0px 0px 5px 2px #00000099;
    color: black;
    background-color: #ffffffba;
    @media (max-width: 800px){
        font-size: 80%;
        height: 50px;
        justify-content: space-around;
    }
`
export const HomeIcon = styled.div`
    color: black;
    font-weight: bold;
    font-size: 125%;
    justify-content: flex-start;
    transition: 0.5s ease;
    padding: 0 4vw;
    &:hover {
        transition: 0.4s ease;
        transform: scale(1.2);
    }
`
export const HeaderItem = styled.div`
    font-family: "Exo 2";
    font-weight: bold;
    cursor: pointer;
    float: center;
    color: black;  
    padding: 0 4vw;
    font-size: 125%;
    &:hover {
        color: #494949;
    }
`
export const HeaderFlags = styled.div`
    font-family: "Exo 2";
    font-weight: bold;
    position: absolute;
    cursor: pointer;
    color: black;  
    display: flex;
    right: 2vw;
    font-size: 125%;
    &:hover {
        color: #494949;
    }
`
export const UserIcon = styled.div`
    transform: scale(1);
    transition: 0.6s ease;
    &:active {
        transition: 0.6s ease;
        transform: scale(1.05);
    }
`