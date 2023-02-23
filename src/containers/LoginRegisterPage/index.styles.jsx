import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

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
export const animateBackground = keyframes`
    0%{ background-position: 0 50%;}
    50%{ background-position: 100% 50%;}
    100%{ background-position: 0 50%;}
`
export const Hider = styled(motion.div)`
    width: 50%;
    height: 100%;
    position: absolute;
    background: linear-gradient(
    45deg, #000000,
     #313131
    );
    background-size: 400% 400%;
    animation: ${animateBackground} 4s infinite ease;
    color: white;
    z-index: 999;
`

export const SwapButton = styled.button`
    width: 50%;
    margin-top: 20%;
    font-family: "Exo 2";
    border-radius: 15px;
    padding: 20px;
    font-weight: bold;
    color: white;
    border: 0;
    background-color: #ffffff16;
    box-shadow: 0 0px 5px 0px #ffffffa4;
    @media screen and (max-width: 800px) {
        padding: 10px;
        margin-top: 2%;
        background-color: #1a1a1aa4;
        box-shadow: 0px 0px 5px 3px #00000094;
    }
`
export const Button = styled.button`
    width: 50%;
    font-family: "Exo 2";
    border-radius: 15px;
    padding: 20px;
    font-weight: bold;
    cursor: pointer;
    color: white;
    border: 0;
    background: rgb(0,0,0);
background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 0%, #222222d5 69%);
    box-shadow: 0 0px 5px 0px #000000a4;
    padding: 25px 0;
    transition: 0.6s ease;
    transform: scale(1);

    &:active {
        transition: 0.3s ease;
        transform: scale(1.2);
    }
`
export const Input = styled.input`
    height: 50px;
    font-family: 'Exo 2';
    margin-top: 7px;
    font-size: 1.2rem; 
    color: #000000;

    width: 48%;
    background-color: #979696;
    border: 0;
    border-radius: 4px;
    &:focus{
        outline: 0;
        box-shadow: 0px 0px 5px 2px #000000a9;
    }
`
export const Label = styled.label`
    position: absolute;
    font-size: 1.3rem;
    margin-left: -47%;
    margin-top: 20px;
    color: #d3d3d3;
    transition: 0.6s ease;
    ${Input}:focus ~ & {
        margin-top: -15px;
        font-size: 1.1rem;
        color: black;
    }
    ${Input}:valid ~ & {
        margin-top: -15px;
        font-size: 1.1rem;
        color: black;
    }
`