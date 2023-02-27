import React, {useState, useMemo} from "react";
import * as S from './index.styles';
import axios from "axios";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Captcha from "../../components/Captcha";
import { useCookies } from 'react-cookie'

const LoginRegisterPage = ({readData, windowWidth}) => {
    const [user, addUser] = useState({
        name: "",
        email: "",
        password: "",
        role: "U",
        token: "",
        remember: false,
    });

    const [error, setError] = useState('');
    const [vsbPwd, setVsbPwd] = useState(false);
    const [validName, setValidName] = useState(false);
    const [validMail, setValidMail] = useState(false);
    const [validPwd, setValidPwd] = useState(false);
    const [loginFocus, setLoginFocus] = useState(false);
    const [mailFocus, setMailFocus] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);
    const [success, setSuccess] = useState(false);
    const [logged, setLogged] = useState(false);
    const [loginError, setLoginError] = useState('');
    const [showOther, setShowOther] = useState(false);
    const [checkOther, setCheckOther] = useState(false);
    const [captcha, setCaptcha] = useState(false);
    const [cookies, setCookie] = useCookies(['refreshToken']);
    const USER_REGEX =  useMemo(() => new RegExp('^[A-z][A-z0-9-_]{3,23}$'), []);
    const MAIL_REGEX = useMemo(() => new RegExp('.+@.+..+'), []);
    const PWD_REGEX = useMemo(() => new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,35}$'),[]);

    const handleChange = e => {
        addUser((prev) => ({...prev, [e.target.name]: e.target.value}));
    };

    useEffect(() => {
        setValidName(USER_REGEX.test(user.name));
        setValidMail(MAIL_REGEX.test(user.email));
        setValidPwd(PWD_REGEX.test(user.password));
    }, [user.name, user.email, user.password, user.remember, USER_REGEX, MAIL_REGEX, PWD_REGEX]);
    const boxChange = e => {
        setVsbPwd(current => !current);
    }
    const valid = (data) => {
        setCaptcha(data);
    }
    const handleClick = async e => {
        e.preventDefault();
        const checkuser = USER_REGEX.test(user.name);
        const checkmail = MAIL_REGEX.test(user.email);
        const checkpwd = PWD_REGEX.test(user.password);
        if(!checkuser){ 
            setLoginFocus(true); 
        }
        if(!checkmail){ 
            setMailFocus(true); 
        }
        if(!checkpwd){ 
            setPwdFocus(true); 
        }
        if(!checkuser || !checkmail || !checkpwd || !captcha) return;
        setError("");
        try{
            await axios.post("https://urchin-app-zxtvj.ondigitalocean.app/users", user);
            setSuccess(true);
            setTimeout(() => {
                setSuccess(false);
                window.location.reload(false);
            }, 1500);
        }catch(err){
            if(err?.response.status === 400) {
                setError("Taki użytkownik już istnieje");
            }else if(err?.response.status === 401) {
                setError("Email jest już zajęty");
            }else{
                setError("Rejestracja nie powiodła się");
            }
        }
    }
    const handleLogin = async e => {
        e.preventDefault();
        setLoginError("");
        
        try{
            const response = await axios.post("https://urchin-app-zxtvj.ondigitalocean.app/login", user);
            let expire = new Date();
            expire.setTime(expire.getTime() + response.data.expire);
            setCookie('refreshToken', response.data.refreshToken, {path: '/', expires: expire});
            setLogged(true);
            setTimeout(() => {
                setLogged(false);
                window.location.reload(false);
            }, 1000);
        }catch(err){
            if(err?.response.status === 400){
                setLoginError("Nieprawidłowe hasło");
            }else if(err?.response.status === 404){
                setLoginError("Podany użytkownik nie istnieje");
            }else{
                setLoginError("Błąd serwera");
            }
        }
    }
    const handleHider = () => {
        setCheckOther(current => !current);
        setLoginFocus(false);
        setPwdFocus(false);
        setMailFocus(false);
        setError("");
        setLoginError("");
        setTimeout(() => {
            setShowOther(current => !current);
        }, 100)
        
    }
    const handleMobile = () => {
        setCheckOther(current => !current);
        setTimeout(() => {
            setShowOther(current => !current);
        }, 450)
    }
    const onKeyUp = (event) => {
        if (event.key === 'Enter') { 
            handleLogin(event);
        }
    } 
    const onKeyReg = (event) => {
        if(event.key === "Enter"){
            handleClick(event);
        }
    }
    return (
        <div>
            <i className="large reply icon" style={{marginLeft: "5px", marginTop: "5px", zIndex: "99999", position: "absolute"}} onClick={() => readData(false)}/>
        {windowWidth > 800 ? (
        <>
        <div style={{display: "flex", justifyContent: "center" }}>
            <S.Wrapper>
                <S.Hider animate={{x: checkOther ? "100%" : "0"}} transition={{ type: 'keyframes'}}>
                    {showOther && (
                    <div onClick={handleHider} style={{display: "flex", justifyContent: 'center', marginTop: "40%"}}>
                        <div style={{position: "absolute", fontSize: "2.5vw", fontWeight: "bold"}}>
                            Masz już konto?
                        </div>
                        <S.SwapButton>
                            ZALOGUJ SIĘ
                        </S.SwapButton>
                    </div>
                    )}
                    {!showOther && (
                        <div onClick={handleHider} style={{display: "flex", justifyContent: 'center', marginTop: "40%"}}>
                        <div style={{position: "absolute", fontSize: "2.5vw", fontWeight: "bold"}}>
                            Nie masz jeszcze konta?
                        </div>
                        <S.SwapButton>
                            ZAREJESTRUJ SIĘ
                        </S.SwapButton>
                    </div>
                    )}
                </S.Hider>
                {showOther && (
                    <div style={{display: "flex", justifyContent: "center"}}>
                <motion.div  animate={{x: checkOther ? "-50%" : "50%"}} transition={{ type: 'keyframes'}} style={{ width: "50%", position: "sticky", textAlign: 'center', height: "100%", color: "black"}}>
                    <div style={{position: "absolute", marginLeft: "20%", textAlign: "center", width: "60%"}}>
                        {error}
                        {success && (
                            <div>
                            ZAREJESTROWANO POMYŚLNIE
                            <br/>
                            TERAZ ZALOGUJ SIĘ
                            </div>
                        )}
                    </div>
                <p style={{marginTop: "13%", fontSize: "2rem", color: "black"}}>
                        REJESTRACJA
                        
                    </p>
                
                    <p>
                        <S.Input  onChange={handleChange} id="name" name="name" style={{border: !validName && loginFocus && user.name.length > 0 && "1px solid red" }} required onFocus={() => setLoginFocus(true)} onBlur={() => setLoginFocus(false)} onKeyPress={onKeyReg}/>
                        <S.Label htmlFor="name">Login</S.Label>
                    </p>
                    <p>
                        <S.Input  onChange={handleChange} id="email" name="email" style={{border: !validMail && mailFocus && user.email.length > 0 && "1px solid red" }} required onFocus={() => setMailFocus(true)} onBlur={() => setMailFocus(false)} onKeyPress={onKeyReg}/>
                        <S.Label htmlFor="email">Adres e-mail</S.Label>
                    </p>
                    <p>
                        <S.Input type={vsbPwd ? "text" : "password"} id="password" style={{border: !validPwd && pwdFocus && user.password.length > 0 && "1px solid red" }} required onChange={handleChange} name="password" onFocus={() => setPwdFocus(true)} onBlur={() => setPwdFocus(false)} onKeyPress={onKeyReg}/>
                        <S.Label htmlFor="password">Hasło</S.Label>
                        <div style={{fontSize: "0.7rem"}}>Hasło musi zawierać conajmniej 8 znaków - duża litera - mała litera - cyfra </div>
                        <div className="ui checked checkbox">
                        <input type="checkbox" onChange={boxChange}/>
                        <label>Pokaż hasło</label>
                        </div>
                    </p>
                    <div style={{display: "flex", justifyContent: "center"}}>
                    <Captcha valid={valid}/>
                    </div>
                    <div style={{display: "flex", justifyContent: "center"}}><S.Button onClick={handleClick}> <b>ZAREJESTRUJ SIĘ</b> </S.Button></div>
                  
                </motion.div></div>
                )}
                {!showOther && (
                <div style={{display: "flex", justifyContent: "center"}}>
                <motion.div animate={{x: checkOther ? "-50%" : "50%"}} transition={{ type: 'keyframes'}} style={{width: "50%", position: "sticky", justifyContent:"center", textAlign: "center", height: "100%"}}>
                <div style={{position: "absolute", marginLeft: "20%", textAlign: "center", width: "60%"}}>
                        {loginError}
                        {logged && (
                            <div>
                            ZALOGOWANO POMYŚLNIE
                            </div>
                        )}
                    </div>
                    <p style={{marginTop: "13%", fontSize: "2rem"}}>
                        LOGOWANIE
                    </p>
                    <p>
                    
                        <S.Input style={{backgroundColor: "#979696"}} id="name" name="name"  required  onChange={handleChange} onKeyPress={onKeyUp}/>
                        <S.Label>Login</S.Label>
                    </p>
                    <p>
                        
                        <S.Input style={{backgroundColor: "#979696"}} type="password" name="password" id="password" required  onChange={handleChange} onKeyPress={onKeyUp}/>
                        <S.Label>Hasło</S.Label>
                    </p>
                    <p >
                        <div className="ui checked checkbox">
                        <input type="checkbox" name="remember" onChange={() => addUser(prev => ({...prev, remember: !prev.remember}))}/>
                        <label>Zapamiętaj mnie</label>
                        </div>
                    </p>
                    <div style={{display: "flex", justifyContent: "center", marginTop: "17%"}}><S.Button style={{backgroundColor:"#5a5959"}} onClick={handleLogin}> <b>ZALOGUJ SIĘ</b> </S.Button></div>
                  
                </motion.div>
                </div>
                )}
            </S.Wrapper>
        </div>
        </>
        ) : (
        <>
        
        <div style={{display: "flex", justifyContent: "center"}}>
            <S.Wrapper style={{minWidth: "100%", minHeight: "100%", top: "0", left: "0"}}>
               
                {showOther && (
                    <div style={{display: "flex", justifyContent: "center"}}>
                <motion.div animate={{x: checkOther ? [-500, 400] : [400, 1000]}} transition={{ease: "easeInOut", duration: 0.3}} style={{ width: "100%",position: "sticky", marginLeft: "-800px",  textAlign: 'center', height: "100%", color: "black"}}>
                    <div style={{position: "absolute", marginLeft: "20%", textAlign: "center", width: "60%"}}>
                        {error}
                        {success && (
                            <div>
                            ZAREJESTROWANO POMYŚLNIE
                            <br/>
                            TERAZ ZALOGUJ SIĘ
                            </div>
                        )}
                    </div>
                <p style={{marginTop: "13%", fontSize: "2rem", color: "black"}}>
                        REJESTRACJA
                        
                    </p>
                
                    <p>
                        <S.Input  onChange={handleChange} id="name" name="name" style={{border: !validName && loginFocus && user.name.length > 0 && "1px solid red" }} required onFocus={() => setLoginFocus(true)} onBlur={() => setLoginFocus(false)} onKeyPress={onKeyReg}/>
                        <S.Label htmlFor="name">Login</S.Label>
                    </p>
                    <p>
                        <S.Input  onChange={handleChange} id="email" name="email" style={{border: !validMail && mailFocus && user.email.length > 0 && "1px solid red" }} required onFocus={() => setMailFocus(true)} onBlur={() => setMailFocus(false)} onKeyPress={onKeyReg}/>
                        <S.Label htmlFor="email">Adres e-mail</S.Label>
                    </p>
                    <p>
                        <S.Input   type={vsbPwd ? "text" : "password"} id="password" style={{border: !validPwd && pwdFocus && user.password.length > 0 && "1px solid red" }} required onChange={handleChange} name="password" onFocus={() => setPwdFocus(true)} onBlur={() => setPwdFocus(false)} onKeyPress={onKeyReg}/>
                        <S.Label htmlFor="password">Hasło</S.Label>
                        <div style={{fontSize: "0.7rem"}}>Hasło musi zawierać conajmniej 8 znaków - duża litera - mała litera - cyfra </div>
                        <div className="ui checked checkbox">
                        <input type="checkbox" onChange={boxChange}/>
                        <label>Pokaż hasło</label>
                        </div>
                    </p>
                    <div style={{justifyContent: "center", display: "flex"}}><Captcha valid={valid}/></div>
                    
                    <div style={{display: "flex", justifyContent: "center"}}><S.Button onClick={handleClick}> <b>ZAREJESTRUJ SIĘ</b> </S.Button></div>
                    <div style={{fontSize: "1.5rem", marginTop: "5%", marginBottom: "5%", fontWeight: "bold"}}>
                        Masz już konto?
                        
                    </div><S.SwapButton onClick={handleMobile}>Zaloguj się</S.SwapButton>
                </motion.div></div>
                )}
                {!showOther && (
                <div style={{display: "flex", justifyContent: "center"}}>
                <motion.div  animate={{x: checkOther ? [400, 1000] : [-500, 400]}} transition={{ease: "easeInOut", duration: 0.3}} style={{width: "100%",position: "sticky", marginLeft: "-800px",justifyContent:"center", textAlign: "center", height: "100%"}}>
                <div style={{position: "absolute", marginLeft: "20%", textAlign: "center", width: "60%"}}>
                        {loginError}
                        {logged && (
                            <div>
                            ZALOGOWANO POMYŚLNIE
                            </div>
                        )}
                    </div>
                    <p style={{marginTop: "13%", fontSize: "2rem"}}>
                        LOGOWANIE
                    </p>
                    <p>
                    
                        <S.Input style={{backgroundColor: "#979696"}} id="name" name="name"  required  onChange={handleChange} onKeyPress={onKeyUp}/>
                        <S.Label>Login</S.Label>
                    </p>
                    <p>
                        
                        <S.Input style={{backgroundColor: "#979696"}} type="password" name="password" id="password" required  onChange={handleChange} onKeyPress={onKeyUp}/>
                        <S.Label>Hasło</S.Label>
                    </p>
                    <p >
                        <div className="ui checked checkbox">
                        <input type="checkbox" name="remember" onChange={() => addUser(prev => ({...prev, remember: !prev.remember}))}/>
                        <label>Zapamiętaj mnie</label>
                        </div>
                    </p>
                    <div style={{display: "flex", justifyContent: "center", marginTop: "17%"}} >
                        <S.Button style={{backgroundColor:"#5a5959"}} onClick={handleLogin}> 
                            <b>ZALOGUJ SIĘ</b> 
                        </S.Button></div>
                    <div style={{fontSize: "1.5rem", marginTop: "15%", marginBottom: "5%", fontWeight: "bold"}}>
                        Nie masz jeszcze konta?
                        
                    </div><S.SwapButton onClick={handleMobile}>Załóż konto</S.SwapButton>
                </motion.div>
                </div>
                )}
            </S.Wrapper>
        </div>
        </>
        )}
        </div>
    )
}

export default LoginRegisterPage;
