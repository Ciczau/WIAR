import React from "react";
import * as S from './index.styles';
const LoginWarning = (props) => {
    return (
        <S.Wrapper>
                <S.Content>
                    <div style={{float: "right"}}><i className="x icon" onClick={() => props.setLoggWarn(false)} style={{position: "absolute", marginLeft: "-20px"}}/></div>
                    <div style={{textAlign: "center", marginTop: "10px"}}>
                    <div>Nie jesteś zalogowany</div>
                    <br/>
                    <S.Button onClick={() => props.readData(true)}>Zaloguj się</S.Button></div>
                </S.Content>
        </S.Wrapper>
    )
}
export default LoginWarning;