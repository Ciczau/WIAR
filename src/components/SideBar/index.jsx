import React, { useState, useRef, useEffect } from "react";
import * as S from './index.styles';
import postartur from '../../images/lastartur.png';
import postwiktor from '../../images/postwiktor.png';
import postartur2 from '../../images/postartur.png';
const SideBar = ({hide}) => {
  const [hidden, setHidden] = useState(hide);
  const [shown, setShown] = useState(false);

  setTimeout(() => {
    setShown(true);
  }, 100)

  const hiddenClick = e => {
      setTimeout(() => {
       setHidden(current => !current);
   
  
      }, 300);    
    }

    return (
        <div>
    
       
        <S.Wrapper animate={{x: !hidden && ["-96%", "0%"] || hidden && shown && ["0%", "-96%"]}}>
          
          <i className={hidden ? "grey left angle icon" : "grey right angle icon"} onClick={hiddenClick} style={{position: "absolute", right: "0", zIndex: "3"}}/>
          
          <div style={{padding: "15px", color: "white", display: "flex",zIndex: "2",fontWeight: "bold", justifyContent: "center",width: "100%",backgroundColor: "#000225",boxShadow: "0px 1px 3px #fcfcfc"}}>
              AKTUALNOŚCI
          </div>
          <a href="https://www.instagram.com/p/CnWqijLtc9j/" target="_blank"><img src={postartur2} style={{width: "80%", height: "auto", marginLeft: "10%", marginTop: "30px", borderRadius: "5px"}}/></a>
          <div style={{width: "90%", marginLeft:" 5%", backgroundColor: "white",textAlign: "left", borderRadius: "5px",padding: "5px 10px", fontSize: "0.75rem"}}>
              <b>_zielsko_:&nbsp;</b>Głowa przed podejściem.
          </div>
          <a href="https://www.instagram.com/p/CkGt_1XDn28/" target="_blank"><img src={postwiktor} style={{width: "80%", height: "auto", marginLeft: "10%", marginTop: "30px", borderRadius: "5px"}}/></a>
          <div style={{width: "90%", marginLeft:" 5%", backgroundColor: "white",textAlign: "left", borderRadius: "5px",padding: "5px 10px", fontSize: "0.75rem"}}>
              <b>_wvktor_:&nbsp;</b>Podsumowanie WPC.
          </div>
          <a href="https://www.instagram.com/p/CkVyP0ptziH/" target="_blank"><img src={postartur} style={{width: "80%", height: "auto", marginLeft: "10%", marginTop: "30px", borderRadius: "5px"}}/></a>
          <div style={{width: "90%", marginLeft:" 5%", backgroundColor: "white", borderRadius: "5px",padding: "5px", display: "flex", justifyContent: "center", fontSize: "0.75rem"}}>
              <b>_zielsko_:&nbsp;</b>Lekki uśmiech na twarzy, bo nic nie ważyło.
          </div>
       
        </S.Wrapper>
      
        </div>
    )
}
export default SideBar;