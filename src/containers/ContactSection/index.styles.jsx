import styled from "styled-components";

export const Wrapper = styled.footer`
    font-family: "Exo 2";
    text-align: center;
    background-color: black;
    color: white;
    width: 100%;
    height: auto;
    padding: 15px;
    position: relative;
    display: flex;
    justify-content: center;

`
export const Links = styled.a`
    color: white;
    &:hover {
        color: grey;
    }
`

export const Input = styled.input`
    height: 30px;
    padding: 7px;
    font-size: 1.1rem;
    border: 0;
    outline: 0;
    border-radius: 5px;
  
`
export const TextArea = styled.textarea`
    height: 40px;
    outline: 0;
    padding: 7px;
    font-size: 1.1rem;
    border: 0;
    border-radius: 5px;
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