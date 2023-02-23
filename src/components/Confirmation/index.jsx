import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import Captcha from "../Captcha";
import * as S from "./index.styles";
const Confirmation = (props) => {
    const [textValue, setTextValue] = useState('');
    const handleText = e => {
        setTextValue(e.target.value)
    }
    const onKeyUp = e => {
        if(e.key === "Enter")
        {
            props.handleClick(e);
        }
    }

    return (
        <div style={{display: "flex", justifyContent: "center"}}>
        <S.Wrapper>
            <i className="cancel icon" onClick={() => props.setSeen(false)} style={{position: "sticky", float: "right"}}/>
            {!props.success ? (
            <>
            <div>
                Czy na pewno chcesz skorzystać z tej usługi?
            </div>
            <S.TextArea type="textarea" placeholder="Komentarz do zamówienia" maxLength="254" onChange={(e) => props.readSubmit(e.target.value)} onKeyPress={onKeyUp}/>
            <br/>
            <div style={{display: "flex", justifyContent: "center"}}>
                <Captcha valid={props.valid}/>    
            </div>
            <S.Button onClick={props.handleClick} style={{margin: "5px"}}>Potwierdzam</S.Button>
            </> 
            ) : (
                <div style={{padding: "50px 0", fontSize: "1.5rem"}}>
                    Zamówienie zostało złożone!
                    <br/>
                    Dziękujemy!
                </div>
            )}
        </S.Wrapper>
        </div>
    )
}

export default Confirmation;