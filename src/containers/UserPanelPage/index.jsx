import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { BrowserView, MobileView } from "react-device-detect";
import "./ClientPanel.css";
import * as S from './index.styles';

const UserPanelPage = ({windowWidth, readData, name, role, firstName, surName, email}) => {
    const [cookie, setCookie, removeCookie] = useCookies();
    const [error , setError] = useState();
    const [selected, setSelected] = useState(0);
    const [user, setUser] = useState({
        name: name,
        firstName: firstName,
        surName: surName,
        email: email,
        role: role,
    });
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [repeatPwd, setRepeatPwd] = useState('');
    const [success, setSuccess] = useState(false);
    const [message ,setMessage] = useState(false);
    const [orderList, setOrderList] = useState([]);
    const [userOrderList, setUserOrderList] = useState([]);
    const [questions, setQuestions] = useState([]);

/*/
    useEffect(() => {
        axios.get("http://localhost:8800/order").then((response) => {
            setOrderList(response.data);
        })
    }, []);
  /*/  
    const REGEX = new RegExp('^\[A-zżźćńółęąśŻŹĆĄŚĘŁÓŃ\]{0,49}$');
    const MAIL_REGEX = new RegExp('.+@.+\..+');
    const PWD_REGEX = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,35}$');

    const handleChange = e => {
        setUser((prev) => ({...prev, [e.target.name]: e.target.value}));
    };

    const Logout = async (e) => {
        e.preventDefault();
        try{
            const token = cookie.refreshToken;
            const response = await axios.post("https://urchin-app-zxtvj.ondigitalocean.app/logout", {refreshToken: token});
            console.log(response);
            if(response.status === 200){
                removeCookie('refreshToken',{path:'/'});
            }
            setTimeout(() => {
                window.location.reload(false);
            }, 500)
            
        }catch(err){
            console.log(err);
        }
    }

    const oldPasswordChange = e => {
        setOldPassword(e.target.value);
    }
    const newPasswordChange = e =>{
        setNewPassword(e.target.value);
    }
    const repeatPwdChange = e => {
        setRepeatPwd(e.target.value);
    }
    const userChange = async e => {
        e.preventDefault();
        const checkFName = REGEX.test(user.firstName);
        const checkSName = REGEX.test(user.surName);
        const checkMail = MAIL_REGEX.test(user.email);
        setError("");
        if(!checkFName || !checkSName || !checkMail)
        {
            setError("Nieprawidłowe dane!")
            return;
        }
        
        try{
            console.log(user);
            const response = await axios.post("https://urchin-app-zxtvj.ondigitalocean.app/change", user);
            setError("Dane zostały zmienione");
            setTimeout(() => {
                setError("");
            }, 2000);
        }catch(err){
            console.log(err);
        }
    }
    const passwordChange = async e => {
        e.preventDefault();
        setError("");
        const checkpwd = PWD_REGEX.test(newPassword);
        if(newPassword !== repeatPwd){
            setError("Źle powtórzone nowe hasło");
            return;
        }
        if(oldPassword === newPassword && oldPassword === repeatPwd){
            setError("Nowe i stare hasło są takie same");
            return;
        }
        if(!checkpwd){
            setError("Nowe hasło musi zawierać minimum 8 znaków - mała litera - duża litera - cyfra");
            return;
        }
        
        try{
            const response = await axios.post("https://urchin-app-zxtvj.ondigitalocean.app/changePwd", {name: user.name, oldPwd: oldPassword, newPwd: newPassword});
            console.log(response);
            setError("Dane zostały zmienione");
            setTimeout(() => {
                setError("");
            }, 2000);
        }catch(err){
            if(err?.response.status === 400){
                setError("Nieprawidłowe hasło");
            }else{
                setError("Błąd serwera");
            }
        }
        
    }
    useEffect(() => {
        axios.get("https://urchin-app-zxtvj.ondigitalocean.app/orders").then((response) => {
            setOrderList(response.data);
        })
        axios.get("https://urchin-app-zxtvj.ondigitalocean.app/questions").then((response) => {
            setQuestions(response.data);
        })
        axios.post("https://urchin-app-zxtvj.ondigitalocean.app/userOrders", user).then((response) => {
            setUserOrderList(response.data);
        })
    }, []);
    const onKeyUser = (event) => {
        if (event.key === 'Enter') { 
            userChange(event);
        }
    } 
    const onKeyPwd = (event) => {
        if(event.key === "Enter"){
            passwordChange(event);
        }
    }
    return (
        <div>
            {windowWidth > 800 ? (
            <>
            <i className="large grey reply icon" style={{marginLeft: "5px", marginTop: "5px", cursor: "pointer"}} onClick={() => readData(false)}/>
                <div style={{display: "flex", justifyContent: "center"}}>
                    <S.Wrapper style={{backgroundColor: "#e2e1e1f1"}}>
                        <div style={{float: "left", width: "30%", position: "sticky", textAlign: "center"}}>
                            <div style={{ fontSize: "2rem", marginTop: "10px", fontWeight: "bold"}}>
                            {user.role === 'U' && (
                                <div>
                                     PANEL&nbsp;UŻYTKOWNIKA
                                </div>
                            )}
                            {user.role === 'A' && (
                                <div>
                                    PANEL&nbsp;ADMINA
                                </div>
                            )}
                               
                            </div>
                            <br/>
                            Witaj {user.name}
                            
                            <div style={{fontSize: "1.3rem", marginTop: "100px"}}>
                                <div onClick={() => setSelected(1)} style={{fontWeight: selected === 1 ? 'bold' : 'normal'}}>Ustawienia</div>
                                <br/><br/>
                                {user.role === 'U' && (
                                    <div onClick={() => setSelected(2)} style={{fontWeight: selected === 2 ? 'bold' : 'normal'}}>Zamówienia</div>
                                )}
                                {user.role === 'A' && (
                                <>
                                    <div onClick={() => setSelected(4)} style={{fontWeight: selected === 4 ? 'bold' : 'normal', color: "red"}}>Zamówienia</div>
                                    <br/>
                                    <div onClick={() => setSelected(5)} style={{fontWeight: selected === 5 ? 'bold' : 'normal', color: "red"}}>Wiadomosci</div>
                                </>
                                )}
                                <br/><br/>
                                <div onClick={() => setSelected(3)} style={{fontWeight: selected === 3 ? 'bold' : 'normal'}}>Zmiana hasła</div>
                                <br/><br/><br/><br/>
                               <S.LogoutButton style={{marginTop: "120px"}} onClick={Logout}>Wyloguj </S.LogoutButton> 

                            </div>
                        </div>
                        <div style={{float: "right", width: "70%", position: "sticky", marginTop: "50px", fontSize: "1.2rem", textAlign: "center"}}>
                            {selected === 0 && (
                                <div>
                                    
                                    Witaj w panelu użytkownika! <br/> Możesz tutaj sprawdzić swoje zamówienia lub zmienić ustawienia swojego konta.
                                </div>
                            )}
                            {selected === 1 && (
                                <div>
                                    <div><b>{error}</b></div>
                                    <div style={{position: "sticky", float: "left", width: "50%"}}>
                                        <div>
                                            Imię:
                                        </div>
                                        <S.Input style={{width: "70%"}} name="firstName" onChange={handleChange} defaultValue={user.firstName} onKeyPress={onKeyUser}/>
                                    </div>
                                    <div style={{position: "sticky", float: "right", width: "50%"}}>
                                        <div>
                                            Nazwisko:
                                        </div>
                                        <S.Input style={{width: "70%"}} name="surName" onChange={handleChange} defaultValue={user.surName} onKeyPress={onKeyUser}/>
                                    </div>
                                    <div style={{marginTop: "20px"}}>E-mail:</div>
                                    <S.Input style={{width: "60%"}} name="email" onChange={handleChange} defaultValue={user.email} onKeyPress={onKeyUser}/>
                                    <br/>
                                    <S.LogoutButton style={{marginTop: "60px", fontWeight: "normal" }} onClick={userChange}>Zmień dane</S.LogoutButton>
                                </div>
                            )}
                           {selected === 2 && (
                                <div style={{scrollBehavior: "smooth", overflowY: "scroll", height: "500px"}}>
                                    <div style={{display: "flex", justifyContent: "space-around",color: "black", fontSize: "1.2rem",fontWeight: "bold",width: "96%",padding: "8px 0px", marginLeft: "2%",borderRadius: "5px",marginTop: "4px", backgroundColor: "#c7c7c7", boxShadow: "0px 0px 5px 3px #00000021"}}>
                                        <div>Numer</div>
                                        <div style={{width: "50%"}}>Usługa</div>
                                        <div>Status</div>
                                    </div>
                                    {userOrderList.map((order) => {
                                    return (
                                        
                                    <div style={{display: "flex", justifyContent: "space-around",color: "black", fontSize: "1.2rem",width: "96%",padding: "3px 0px", marginLeft: "2%",borderRadius: "5px",marginTop: "4px", backgroundColor: "lightgrey", boxShadow: "0px 0px 5px 3px #00000045"}}>
                                        <div>{order._id.slice(-4)}</div>
                                        <div style={{width: "60%", display: "flex", justifyContent: "center"}}><b>{order.type}</b>&nbsp;{order.period}</div>
                                        <div><i className={"yellow clock icon"}/></div>
                                    </div>
                                    )})}
                                  
                                
                             </div>
                            )}
                            {selected === 3 && (
                                <div>
                                    <div style={{ marginTop: "-15px", display: "flex" , justifyContent: "center", height: "50px"}}>
                                        <b>
                                            {error}
                                        </b>
                                    </div>
                                    <div>
                                        <div>Podaj stare hasło:</div>
                                        <S.Input style={{width: "40%"}} onChange={oldPasswordChange} type="password" onKeyPress={onKeyPwd}/>
                                    </div>
                                    <div>
                                        <div>Podaj nowe hasło:</div>
                                        <S.Input style={{width: "40%"}} onChange={newPasswordChange} type="password" onKeyPress={onKeyPwd}/>
                                    </div>
                                    <div>
                                        <div>Powtórz nowe hasło:</div>
                                        <S.Input style={{width: "40%"}} onChange={repeatPwdChange} type="password" onKeyPress={onKeyPwd}/>
                                    </div>
                                    <S.LogoutButton style={{marginTop: "60px", fontWeight: "normal"}} onClick={passwordChange}>Zmień hasło</S.LogoutButton>
                                </div>
                               
                            )} 
                            {selected === 4 && (
                                    <div style={{scrollBehavior: "smooth", overflow: "scroll", height: "500px"}}>
                                        <table >
                                                    <thead>
                                                        <tr>
                                                            <th>Data</th> <th>Użytkownik</th> <th>Email</th> <th>Rodzaj&nbsp;usługi</th> <th>Czas&nbsp;usługi</th> <th>Text</th>
                                                        </tr>
                                                    </thead>
                                            {orderList.map((order) => {
                                            return (
                                                
                                                <tbody key={order._id}>
                                                <tr>
                                                    <td style={{fontSize: "0.6rem"}}>{order.time}</td> <td>{order.name}</td> <td>{order.email}</td><td>{order.type}</td> <td>{order.period}</td> <td>{order.text}</td>
                                                </tr>
                                                </tbody> 
                                               
                                                
                                            )
                                        })}
                                     </table></div>
                             )}
                             {selected === 5 && (
                                <div style={{scrollBehavior: "smooth", overflow: "scroll", height: "500px"}}>
                                    <div style={{display: "flex", justifyContent: "space-around", fontSize: "1.5rem", width: "100%"}}>
                                        <div>Imię</div>
                                        <div>Email</div>
                                        <div>Wiadomość</div>
                                    </div>
                                    {questions.map((question) => {
                                    return (
                                        
                                    <div style={{display: "flex", justifyContent: "space-around",color: "black", fontSize: "1.2rem",width: "96%",padding: "3px 0px", marginLeft: "2%",borderRadius: "5px",marginTop: "4px", backgroundColor: "lightgrey", boxShadow: "0px 0px 5px 3px #00000045"}}>
                                        <div>{question.name}</div>
                                        <div>{question.email}</div>
                                        <div>{question.message}</div>
                                    </div>
                                       
                                        
                                    )
                                })}</div>
                            )}
                        </div>
                    </S.Wrapper>
                </div>
                </>
                ) : (
                <>
                <i className="black large reply icon" style={{marginLeft: "5px", marginTop: "5px", zIndex: "9999", position: "absolute"}} onClick={() => readData(false)}/>
                
                <div style={{display: "flex", justifyContent: "center"}}>
                    <S.Wrapper style={{backgroundImage: "linear-gradient(287deg, #b9b9b9 0%, #dad8d8 87%)",color: "black", width: "100%", height: "100%", marginTop: "0", top: "0"}}>
                        <div style={{textAlign: "center"}}>
                            <div style={{ fontSize: "2rem", marginTop: "10px", fontWeight: "bold"}}>
                            {user.role === 'U' && (
                                <div>
                                     PANEL&nbsp;UŻYTKOWNIKA
                                </div>
                            )}
                            {user.role === 'A' && (
                                <div>
                                    PANEL&nbsp;ADMINA
                                </div>
                            )}
                               
                            </div>
                            <br/>
                            Witaj <b>{user.name}</b>
                            
                            <S.Header style={{color: "black"}}>
                                <div onClick={() => setSelected(1)} style={{ transform: selected === 1 ? 'scale(1.1)' : 'scale(0.9)', transition: "0.6s ease"}}>USTAWIENIA</div>
                                
                                {user.role === 'U' && (
                                    <div onClick={() => setSelected(2)} style={{ transform:selected === 2 ? 'scale(1.1)' : 'scale(0.9)', transition: "0.6s ease"}}>ZAMÓWIENIA</div>
                                )}
                                {user.role === 'A' && (
                                    <div onClick={() => setSelected(4)} style={{ transform: selected === 4 ? 'scale(1.1)' : 'scale(0.9)', transition: "0.6s ease", color: "red"}}>WIADOMOŚCI</div>
                                )}
                                <div onClick={() => setSelected(3)} style={{ transform: selected === 3 ? 'scale(1.1)' : 'scale(0.9)', transition: "0.6s ease"}}>HASŁO</div>
                                <i className="sign-out icon" onClick={Logout}/>
                            </S.Header>
                        </div>
                        <div style={{ marginTop: "50px", fontSize: "1.2rem", textAlign: "center", padding: "0 15px"}}>
                            {selected === 0 && (
                                <div>
                                    
                                    Witaj w panelu użytkownika! <br/> Możesz tutaj sprawdzić swoje zamówienia lub zmienić ustawienia swojego konta.
                                </div>
                            )}
                            {selected === 1 && (
                                <div>
                                    <div><b>{error}</b></div>
                                    <div style={{position: "sticky", float: "left", width: "50%"}}>
                                        <div>
                                            Imię:
                                        </div>
                                        <S.Input style={{width: "70%"}} name="firstName" onChange={handleChange} defaultValue={user.firstName} onKeyPress={onKeyUser}/>
                                    </div>
                                    <div style={{position: "sticky", float: "right", width: "50%"}}>
                                        <div>
                                            Nazwisko:
                                        </div>
                                        <S.Input style={{width: "70%"}} name="surName" onChange={handleChange} defaultValue={user.surName} onKeyPress={onKeyUser}/>
                                    </div>
                                    <div style={{marginTop: "20px"}}>E-mail:</div>
                                    <S.Input style={{width: "60%"}} name="email" onChange={handleChange} defaultValue={user.email} onKeyPress={onKeyUser}/>
                                    <br/>
                                    <S.LogoutButton style={{marginTop: "60px", fontWeight: "normal" }} onClick={userChange}>Zmień dane</S.LogoutButton>
                                </div>
                            )}
                            {selected === 2 && (
                                <div style={{scrollBehavior: "smooth", overflowY: "scroll", height: "500px"}}>
                                    <div style={{display: "flex", justifyContent: "space-around",color: "black", fontSize: "1.2rem",fontWeight: "bold",width: "96%",padding: "8px 0px", marginLeft: "2%",borderRadius: "5px",marginTop: "4px", backgroundColor: "#c7c7c7", boxShadow: "0px 0px 5px 3px #00000021"}}>
                                        <div>Numer</div>
                                        <div style={{width: "50%"}}>Usługa</div>
                                        <div>Status</div>
                                    </div>
                                    {userOrderList.map((order) => {
                                    return (
                                        
                                    <div style={{display: "flex", justifyContent: "space-around",color: "black", fontSize: "1.2rem",width: "96%",padding: "3px 0px", marginLeft: "2%",borderRadius: "5px",marginTop: "4px", backgroundColor: "lightgrey", boxShadow: "0px 0px 5px 3px #00000045"}}>
                                        <div>{order._id.slice(-4)}</div>
                                        <div style={{width: "80%", display: "flex", justifyContent: "center"}}><b>{order.type}</b>&nbsp;{order.period}</div>
                                        <div><i className={"yellow clock icon"}/></div>
                                    </div>
                                    )}
                                    )}
                                   
                                
                             </div>
                            )}
                            {selected === 3 && (
                                <div>
                                    <div style={{ marginTop: "-15px", display: "flex" , justifyContent: "center", height: "50px"}}>
                                        <b>
                                            {error}
                                        </b>
                                    </div>
                                    <div>
                                        <div>Podaj stare hasło:</div>
                                        <S.Input style={{width: "40%"}} onChange={oldPasswordChange} type="password" onKeyPress={onKeyPwd}/>
                                    </div>
                                    <div>
                                        <div>Podaj nowe hasło:</div>
                                        <S.Input style={{width: "40%"}} onChange={newPasswordChange} type="password" onKeyPress={onKeyPwd}/>
                                    </div>
                                    <div>
                                        <div>Powtórz nowe hasło:</div>
                                        <S.Input style={{width: "40%"}} onChange={repeatPwdChange} type="password" onKeyPress={onKeyPwd}/>
                                    </div>
                                    <S.LogoutButton style={{marginTop: "60px", fontWeight: "normal"}} onClick={passwordChange}>Zmień hasło</S.LogoutButton>
                                </div>
                               
                            )} 
                            {selected === 4 && (
                                    <div style={{scrollBehavior: "smooth", overflow: "scroll", height: "500px"}}>
                                        <table >
                                                    <thead>
                                                        <tr>
                                                            <th>Data</th> <th>Użytkownik</th> <th>Email</th> <th>Rodzaj&nbsp;usługi</th> <th>Czas&nbsp;usługi</th> <th>Text</th>
                                                        </tr>
                                                    </thead>
                                            {orderList.map((order) => {
                                            return (
                                                
                                                <tbody key={order.id}>
                                                <tr>
                                                    <td style={{fontSize: "0.6rem"}}>{order.createdAt}</td> <td>{order.id_u}</td> <td>{order.email}</td><td>{order.type}</td> <td>{order.period}</td> <td>{order.text}</td>
                                                </tr>
                                                </tbody> 
                                               
                                                
                                            )
                                        })}
                                     </table></div>
                             )}
                        </div>
                    </S.Wrapper>
                </div>
                </>
                )}
        </div>
    )
}

export default UserPanelPage;
