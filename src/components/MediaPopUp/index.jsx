import React from "react";
import * as S from './index.styles';
import instagram from '../../images/instagram.png';
import facebook from '../../images/facebook.png';
const SocialMedia = () => {
   
    return (
        <S.Wrapper>
            <a href="https://www.instagram.com" target="_blank"><img src={instagram} width="20" height="auto" style={{marginRight: "10px", marginTop: "3px"}}/></a>
            <a href="https://www.facebook.com" target="_blank"><img src={facebook} width="20" height="auto" style={{ marginTop: "3px"}}/></a>
        </S.Wrapper>
    )
}

export default SocialMedia;