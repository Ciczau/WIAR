import axios from "axios";
import React, { useState } from "react";
import Captcha from "../../components/Captcha";
import * as S from './index.styles';


const ContactSection = ({windowWidth}) => {
    const [message, setMessage] = useState({
        name: 'Imię',
        email: 'Adres e-mail',
        text: 'Twoja wiadomość'
    })
    const [sent, setSent] = useState(false);
    const REGEX = new RegExp('^[A-z]{3,23}$');
    const MAIL_REGEX = new RegExp('.+@.+..+');
    const [error, setError] = useState('');
    const [captcha, setCaptcha] = useState(false);

    const valid = (data) => {
        setCaptcha(data);
    }

    const handleChange = e => {
        setMessage((prev) => ({...prev, [e.target.name]: e.target.value}));
    }
    const handleClick = async e => {
        if(!captcha){
            return;
        }
        const nameCheck = REGEX.test(message.name);
        const mailCheck = MAIL_REGEX.test(message.email);
        if(!nameCheck || !mailCheck){
            setError("Podane dane są niepoprawne");
            return;
        }
        try{
            await axios.post("https://urchin-app-zxtvj.ondigitalocean.app/questions", message);
            setSent(true);
        }catch(err){
            console.log("Captcha error");
        }
    }

    return (
        <>
        {windowWidth > 800 ? (
        <S.Wrapper>
               <div style={{width: "25%", position: "sticky", float: "left"}}>
            <div style={{fontSize: "1.2rem", marginTop: "20px"}}>Artur Ziółkowski</div>
            <br/>
            <div>
                <i className="large instagram icon"/>_zielskoo_
                <br/><br/>
                <i className="large envelope outline icon"/>zielsko911@gmail.com
                <br/><br/>
                <i className="large phone icon"/>790550614
            </div>
            </div>
            <span style={{backgroundColor: "white", width: "1px", height: "270px", marginTop: "15px"}}/>
            
            <div style={{width: "50%",  position: "sticky"}}>
                {!sent && (
                    <>
                    <div style={{marginTop: "10px", fontWeight: "bold"}}>{error}</div>
                {!error && (<div style={{padding: "10px"}}>Zadaj nam pytanie!</div>)}
                <S.Input type="text" name="name" onChange={handleChange} placeholder="Imię" style={{width: "28%"}}/>
                <S.Input type="text" name="email" onChange={handleChange} placeholder="Adres e-mail" style={{width: "38%", marginLeft: "1%"}}/><br/>
                <S.TextArea type="text" name="text" maxLength={254} onChange={handleChange} placeholder="Twoja wiadomość" style={{width: "67%", height: "100px", marginTop: "10px"}}/>
                <div style={{display: "flex", justifyContent: "center"}}>
                <Captcha valid={valid}/>
                </div>
                
                <S.Button onClick={handleClick}>Wyślij</S.Button> 
                </>
                )}
                {sent && (
                    <div style={{marginTop: "50px"}}>
                        Wiadomość została wysłana!
                        <br/>
                        Postaramy się odpowiedzieć jak najszybciej.
                    </div>
                )}
            </div>
           
            <span style={{backgroundColor: "white", width: "1px", height: "270px", marginTop: "15px"}}/>
            <div style={{width: "25%", position: "sticky", float: "right", textAlign: "center"}}>
            <div style={{fontSize: "1.2rem", marginTop: "20px"}}>Wiktor Michalski</div>
            <br/>
            <div>
                <i className="large instagram icon"/>_wvktor_
                <br/><br/>
                <i className="large envelope outline icon"/>ciczau@outlook.com
                <br/><br/>
                <i className="large discord icon"/>Ciczau#9529
            </div>
            </div> 
                
        </S.Wrapper>
        ) : (
        <>
            <div style={{textAlign: "center", color: "white", backgroundColor: "black", position: "relative"}}>
            
            {!sent && (
                    <>
                    <div style={{fontWeight: "bold"}}>{error}</div>
                {!error && (<div style={{padding: "15px"}}>Zadaj nam pytanie!
                </div>)}
                <S.Input type="text" name="name" onChange={handleChange} placeholder="Imię" style={{width: "35%"}}/>
                <S.Input type="text" name="email" onChange={handleChange} placeholder="Adres e-mail" style={{width: "55%", marginLeft: "1%"}}/><br/>
                <S.TextArea type="text" name="text" maxLength={254} onChange={handleChange} placeholder="Twoja wiadomość" style={{width: "91%", height: "100px", marginTop: "10px"}}/>
                <div style={{display: "flex", justifyContent: "center"}}>
                <Captcha valid={valid}/>
                </div>
                
                <S.Button onClick={handleClick}>Wyślij</S.Button> 
                </>
                )}
                {sent && (
                    <div style={{marginTop: "50px"}}>
                        Wiadomość została wysłana!
                        <br/>
                        Postaramy się odpowiedzieć jak najszybciej.
                    </div>
                )}
            </div>
            
        
            <div style={{padding: "15px 5px", backgroundColor: "black", color: "white", height: "auto", position: "absolute", width: "100vw"}}>
                <span style={{backgroundColor: "white", width: "90%",marginLeft: "5%", height: "1px", position: "absolute"}}/>
                <br/>
                <div style={{position: 'sticky', width: "50%", float: "left", textAlign: "left", fontSize: "0.8rem"}}>
                <div style={{fontSize: "1.1rem", textAlign: "center"}}>Artur Ziółkowski</div>
                <br/>
                <i className="large instagram icon"/>_zielsko_
                <br/><br/>
                <i className="large envelope outline icon"/>zielsko911@gmail.com
                <br/><br/>
                <i className="large phone icon"/>790550614
                </div>
                <div style={{position: 'sticky', width: "50%", float: "right", textAlign: "left", fontSize: "0.8rem"}}>
                <div style={{fontSize: "1.1rem", textAlign: "center"}}>Wiktor Michalski</div>
                <br/>
                <i className="large instagram icon"/>_wvktor_ 
                <br/><br/>
                <i className="large envelope outline icon"/>ciczau@outlook.com 
                <br/><br/>
                 <i className="large discord icon"/>Ciczau#9529
                </div>
            </div>
            </>
        )}
        </>
    )
}

export default ContactSection;
