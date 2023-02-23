import styled from "styled-components";

export const Image = styled.img`
    margin: 0 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 5px 3px #0000008d;
    transition: 0.3s ease-in-out;
        transform: scale(1.0);
    &:hover {
        transition: 0.2s ease-in-out;
        transform: scale(1.05);
    }
`