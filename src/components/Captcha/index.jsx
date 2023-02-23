import React, { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";

const Captcha = (props) => {
    
    const captchaRef = useRef(null);
    const handleSubmit = async (e) => {
    const token = captchaRef.current.getValue();
    try{
        await axios.post("https://urchin-app-zxtvj.ondigitalocean.app/captcha", {token});
        props.valid(true);
    }catch(err){
        props.valid(false);
    }
    }
    return (
        <div style={{margin: "15px"}}>
            <ReCAPTCHA
                sitekey="6LeerQYkAAAAAOWfhpVQGW2qGT4MUJb-tLGAo6Aa"
                onChange={handleSubmit}
                ref={captchaRef}
                theme="dark"
            />
        </div>
    )
}

export default Captcha;
