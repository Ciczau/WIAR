import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
`
export const Content = styled.div`
    width: 300px;
    height: 100px;
    top: 40%;
    font-family: "Exo 2";
    text-align: center;
    font-weight: bold;
    border-radius: 5px;
    box-shadow: 0px 0px 5px 3px #0000004c;
    z-index: 99999;
    position: fixed;
    background-color: #ffffff;
`
export const Button = styled.button`
    padding: 2px 5px;
    margin-left: 5px;
    font-family: "Exo 2";
    border-radius: 3px;
    border: 0;
    font-weight: bold;
    background-color: white;
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 10px 17px 50px 1px rgba(0,0,0,0.19);
    &:hover { 
        transition: 0.6s ease;
        transform: scale(0.97);
        cursor: pointer;
        
    }
    &:active {
        background-color: #7a7a7a;
        transform: scale(1.05);
    }
`