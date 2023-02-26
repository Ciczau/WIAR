import React from "react";
import * as S from './index.styles';
import { useCookies } from "react-cookie";
import { useSignOut } from "react-auth-kit";
import axios from "axios";
export const LoginHead = ({name, readData}) => {
    const [cookie, setCookie, removeCookie] = useCookies();
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
    return (
        <S.Wrapper>
        {name && (
            <div>
                Zalogowano jako <b>{name}</b> <S.Button onClick={Logout}> Wyloguj </S.Button>
            </div>
        )}       
        {!name && (
            <div>
                Nie jesteś zalogowany/a <S.Button onClick={() => readData(true)}> Zaloguj się</S.Button>
            </div>
        )} 
        </S.Wrapper>
    )
}

export default LoginHead;
