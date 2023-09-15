import styled from "styled-components";

export const Wrapper = styled.div`
  width: 500px;
  padding: 15px;
  height: auto;
  top: 30%;
  max-width: 95%;
  display: flex;
  justify-content: center;
  font-family: "Exo 2";
  box-shadow: 0px 0px 5px 3px #0000009e;
  font-weight: bold;
  text-align: center;
  color: white;
  border-radius: 5px;
  z-index: 10000;
  position: fixed;
  background-color: #414141;
`;

export const Icon = styled.i`
  position: sticky;
  float: right;
`;

export const CaptchaWraper = styled.div`
  display: flex;
  justify-content: center;
`;
export const TextArea = styled.textarea`
  width: 75%;
  box-sizing: border-box;
  margin-top: 15px;
  margin-bottom: 5px;
  height: 150px;
  border-radius: 5px;
  resize: none;
  background-color: #c4c4c4fd;
  font-size: 1.3rem;
  border: 0;
  transition: 0.3s ease;
  transform: scale(1);
  outline: 0;
  box-shadow: 0px 0px 5px 3px #00000050;
  &:focus {
    transition: 0.3s ease;
    transform: scale(1.1);
  }
`;
export const Button = styled.button`
  padding: 2px 5px;
  font-family: "Exo 2";
  border-radius: 3px;
  border: 0;
  margin: 5px;
  font-weight: bold;
  background-color: white;
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    10px 17px 50px 1px rgba(0, 0, 0, 0.19);
  &:hover {
    transition: 0.6s ease;
    transform: scale(0.97);
    cursor: pointer;
  }
  &:active {
    background-color: #7a7a7a;
    transform: scale(1.05);
  }
`;
export const Summary = styled.div`
  padding: 50px 0;
  font-size: 1.5rem;
`;
