import React, { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 15px;
`;

const Captcha = (props) => {
  const captchaRef = useRef(null);
  const handleSubmit = async (e) => {
    const token = captchaRef.current.getValue();
    try {
      const response = await axios.post(
        "https://urchin-app-zxtvj.ondigitalocean.app/captcha",
        { token }
      );
      if (response.status === 200) {
        props.valid(true);
      }
    } catch (err) {
      props.valid(false);
    }
  };
  return (
    <Wrapper>
      <ReCAPTCHA
        sitekey="6LeerQYkAAAAAOWfhpVQGW2qGT4MUJb-tLGAo6Aa"
        onChange={handleSubmit}
        ref={captchaRef}
        theme="dark"
      />
    </Wrapper>
  );
};

export default Captcha;
