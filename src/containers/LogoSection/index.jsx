import React from "react";
import LoginHead from "../../components/LoginHead";
import logo from '../../images/logo.png';

const LogoSection = ({name, readData}) => {
    return (
            <div style={{textAlign: "center", display: "flex",justifyContent: "center", background: "radial-gradient(circle, rgba(255, 255, 255, 0.158) 7%, rgba(255,255,255,0) 28%, rgba(255,255,255,0) 100%)"}}>
                <img src={logo} alt="" height={window.innerWidth > 800 ? "100" : "70"}  style={{margin: "5px"}}/> 
                {window.innerWidth > 800 && (
                    <LoginHead name={name} readData={readData}/>
                )}
            </div>
    )
}

export default LogoSection;