import styled from "styled-components";

export const Wrapper = styled.div`
    position: absolute;
    margin-left: 50%;
    padding: 5px 15px;
    border-radius: 3px;
    background-color: #ffffff6c;
    box-shadow: 0px 0px 5px 2px #8d8d8da9;
    top: -6px;
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