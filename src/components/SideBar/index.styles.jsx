import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)`
    position: absolute;
    margin-top: 2%;
    font-family: 'Exo 2';
    margin-left: 1%;
    overflow-y: scroll;
    border-radius: 1px;
   
    font-size: 1.15rem;
    border-radius: 6px;

    box-shadow: 0px 0px 5px 3px #00000088;
    z-index: 9997;
    width: 15%;
    background-color: #0a0a1b;
    height: 600px;
    &::-webkit-scrollbar {
     width: 0px;
     background-color: #a9a9b8;
    }

`