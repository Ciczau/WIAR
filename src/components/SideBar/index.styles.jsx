import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)`
    position: fixed;
    margin-top: 100px;
    font-family: 'Exo 2';
    margin-left: 1%;
    overflow-y: scroll;
    border-radius: 1px;
    font-size: 1.15rem;
    border-radius: 6px;
    box-shadow: -1px 2px 5px 3px #00000099;
    z-index: 9997;
    width: 15%;
    background-color: #0d0d22;
    height: 600px;
    &::-webkit-scrollbar {
     width: 0px;
     background-color: #a9a9b8;
    }

`