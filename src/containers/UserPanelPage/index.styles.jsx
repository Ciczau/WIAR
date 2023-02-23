import styled from "styled-components";

export const Wrapper = styled.div`
    position: absolute;
    font-family: 'Exo 2';
    top: 18%;
    padding: 0 0 15px 0;
    background-color: #e2e1e1;
    min-width: 80vw;
    min-height: 70vh;
    height: auto;
    box-shadow: 0px 0px 5px 3px #00000090;
`
export const LogoutButton = styled.button`
    font-weight: bold;
    transition: 0.6s ease;
    border: 0;
    font-family: 'Exo 2';
    border-radius: 5px;
    padding: 3px 10px;
    width: auto;
    transform: scale(1);
    &:hover {
        transition: 0.6s ease;
        transform: scale(0.95);
        cursor: pointer;
    }
    &:active {
        transition: 0.2s ease;
        transform: scale(1.1);
    }
`
export const Input = styled.input`
    height: 50px;
    font-size: 1.2rem; 
    width: 48%;
    border: 0;
    box-shadow: 0px 0px 5px 3px #0000002b;
    border-radius: 4px;
    &:focus{
        outline: 1px solid grey;
    }
`
export const Header = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    font-size: 1.2rem;
    position: fixed;
    bottom: 0;
    padding: 15px;
    box-shadow: 0px 0px 10px 0px #000000a9;
    background-color: #d3d2d0;
`