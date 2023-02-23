import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
    position: relative;
    font-family: 'Exo 2';
    box-sizing: content-box;
    margin-top: 0%;
    z-index: 999;
    display: flex;
    padding: 50px 50px;
    font-size: 1rem;
    box-shadow: 0px 0px 5px 3px #000000a7;
    text-align: center;
    background: linear-gradient(270deg,#000000ce 0%, #000000f9 50%, #ffffffe2 50%, #ffffffc7 100%);
    width: 100%;
    height: auto;
`

export const ConfirmationBackground = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    background-color: #000000c3;
`
export const OfferWrapper = styled.button`
    border-radius: 5px;
    font-family: "Exo 2";
    font-weight: bold;
    font-size: 1.2rem;
    border: 0;
    box-shadow: 0px 0px 5px 2px #00000044;
    margin-top: 5px;
    margin-bottom: 5px;
    width: 100%;
    color: #000000;
    background-color: white;
    height: auto;
    transition: 0.6s ease;
    transform: scale(1);
    padding: 25px 0;
    &:hover { 
        transition: 0.6s ease;
        transform: scale(0.97);
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 10px 17px 50px 1px rgba(0,0,0,0.19);
    }
    &:active {
        transform: translateY(4px);
    }
`
export const ShortDescWrapper = styled(motion.div)`
    font-size: 1rem;
    width: 90%;
    border-radius: 5px;
    color: #000000;
    background-color: white;
    height: auto;
`