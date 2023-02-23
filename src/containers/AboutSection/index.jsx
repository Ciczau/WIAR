import React, { useState, useEffect } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import * as S from './index.styles';
import artur from '../../images/artur.png';
import wiktor from '../../images/wiktor.JPG';
import chuj from '../../images/slide2.jpg';
import  { motion } from "framer-motion";
import "./Onas.css";
import oarturze from "../../images/oarturze.jpg";
import owiktorze from "../../images/bgw.png";
import { useSwipeable } from "react-swipeable";
import SideBar from "../../components/SideBar";
import ReCAPTCHA from "react-google-recaptcha";

const AboutSection = ({windowWidth}) => {
    const [placeholder, setPlaceholder] = useState('');
    const [choice, setChoice] = useState(0);
  const string = "Nazywam się Artur. Jestem trenerem medycznym/personalnym. Od wielu lat towarzyszy mi trening siłowy pod różne cele. Przez te wiele lat nauczyłem się jak działa nasze ciało, czego tak naprawdę potrzebuje aby być zdrowym ruchowo. Swoją wiedzę usystematyzowałem na wielu szkoleniach z zakresu treningu siłowego, medycznego oraz programowania planów treningowych. W   podejściu do klienta cel dla mnie jest jeden: Chcę, aby klient trenował zdrowo, optymalnie, bezpiecznie i długofalowo jeżeli tylko nie zabraknie mu zapału. Razem z Wiktorem mamy podobne podejście, że właśnie zdrowo to jest silnie. Stąd nasze zamiłowanie do trójboju i włączaniu elementów z tej dyscypliny nawet w plany, które są kierowane pod osoby trakcie rehabilitacji po kontuzji. Sam wiele lat zmagałem się z kontuzją pleców, potem bólem, który pozostał po tej kontuzji i chcę, aby ludzie zmienili nastawienie, które jest budowane w opinii publicznej, mianowicie: „Jak Cię bolą plecy to ćwiczenia siłowe nie są dla Ciebie”. Do projektu chcę wnieść właśnie ten pierwiastek funkcjonalnego, zdrowego dźwigania, który zabezpieczy ludzi przed ewentualnymi kontuzjami w ciągu codziennego życia, lub podczas uprawiania różnych dyscyplin sportowych."
  const swipeToFirst = useSwipeable({
    onSwipedRight: () => setChoice(2),
    onSwipedLeft: () => setChoice(2),
  })
  const swipeToSecond = useSwipeable({
    onSwipedLeft: () => setChoice(1),
    onSwipedRight: () => setChoice(1),
  })
    return (
        <div>
          {windowWidth > 800 ? (
          <>
          <SideBar hide={true}/>
            <div style={{backgroundColor: "#222222cf", minHeight: "100vh",height: "auto", width: "100vw",position: 'relative', display: "flex", justifyContent: "center", color: "white", backgroundImage: choice === 2 && `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${wiktor})` || choice === 1 && `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${artur})` , backgroundSize: "cover", backgroundPositionX: "center"}}>
                    <div  style={{marginTop: choice === 0 && "100px", textAlign: "center", position: choice === 2 ? "absolute" : "relative", transform: choice === 2 ? "scale(0.3) translateX(-125vw)" : "scale(1.0)",top: choice === 2 && "-15vw", transition: "0.5s ease", zIndex: choice === 2 && "9996"}}>
                      <S.Image width="50%" onClick={() => setChoice(1)} src={artur} style={{width: choice === 1 && "0", opacity: choice === 2 && "0.6"}}/>
                      {choice === 0 && (
                        <div style={{backgroundColor: "white", borderRadius: "5px", color: "black", marginLeft: "35%", width: "30%", padding: "10px", top: "15px"}}>Artur</div>
                      )}
                  
                      {choice === 1 && (
                        <div style={{width: "40%", marginLeft: "30%", marginBottom: "30px",display: "flex",marginTop: "11%",justifyContent: "center", flexDirection: "column", fontSize: "1.2rem"}}>
                          <p style={{fontSize: "2.5rem",width: "150%", marginLeft: "-25%"}}>Nazywam się Artur. <br/>Jestem trenerem medycznym/personalnym. 
                          </p><p>Od wielu lat towarzyszy mi trening siłowy pod różne cele. </p>
                          <p style={{marginLeft: "20%", width: "60%"}}>Przez te wiele lat nauczyłem się jak działa nasze ciało, czego tak naprawdę potrzebuje aby być zdrowym ruchowo. </p>
                          <p style={{marginLeft: "20%", width: "60%"}}>Swoją wiedzę usystematyzowałem na wielu szkoleniach z zakresu treningu siłowego, medycznego oraz programowania planów treningowych. 
                          <br/>W   podejściu do klienta cel dla mnie jest jeden:<br/> 
                          Chcę, aby klient trenował zdrowo, optymalnie, bezpiecznie i długofalowo jeżeli tylko nie zabraknie mu zapału. </p>
                          <p>Razem z Wiktorem mamy podobne podejście, że właśnie zdrowo to jest silnie.<br/>  
                          Stąd nasze zamiłowanie do trójboju i włączaniu elementów z tej dyscypliny nawet w plany, które są kierowane pod osoby trakcie rehabilitacji po kontuzji. 
                          Sam wiele lat zmagałem się z kontuzją pleców, potem bólem, który pozostał po tej kontuzji i chcę, aby ludzie zmienili nastawienie, 
                          które jest budowane w opinii publicznej, mianowicie: „Jak Cię bolą plecy to ćwiczenia siłowe nie są dla Ciebie”.</p>
                          <p>Do projektu chcę wnieść właśnie ten pierwiastek funkcjonalnego, zdrowego dźwigania, 
                          który zabezpieczy ludzi przed ewentualnymi kontuzjami w ciągu codziennego życia, lub podczas uprawiania różnych dyscyplin sportowych.</p>
                          </div>
                      )}
                      
                    </div>
                    <div  style={{marginTop: choice === 0 && "100px", textAlign: "center", position: choice === 1 ? "absolute" : "relative", transform: choice === 1 ? "scale(0.3) translateX(-125vw)" : "scale(1)",top: choice === 1 && "-15vw", transition: "0.5s ease", zIndex: choice === 1 && "9996"}}>
                      <S.Image width="50%" onClick={() => setChoice(2)} src={wiktor} style={{width: choice === 2 && "0", opacity: choice === 1 && "0.6"}}/>
                      {choice === 0 && (
                        <div>Wiktor</div>
                      )}
                      {choice === 2 && (
                       <div style={{width: "40%", position: "relative", marginLeft: "30%", marginBottom: "30px",display: "flex",marginTop: "11%",justifyContent: "center", flexDirection: "column", fontSize: "1.2rem", zIndex: "9"}}>
                       <p style={{fontSize: "2.5rem",width: "150%", marginLeft: "-25%"}}>Nazywam się Artur. <br/>Jestem trenerem medycznym/personalnym. 
                       </p><p>Od wielu lat towarzyszy mi trening siłowy pod różne cele. </p>
                       <p style={{marginLeft: "20%", width: "60%"}}>Przez te wiele lat nauczyłem się jak działa nasze ciało, czego tak naprawdę potrzebuje aby być zdrowym ruchowo. </p>
                       <p style={{marginLeft: "20%", width: "60%"}}>Swoją wiedzę usystematyzowałem na wielu szkoleniach z zakresu treningu siłowego, medycznego oraz programowania planów treningowych. 
                       <br/>W   podejściu do klienta cel dla mnie jest jeden:<br/> 
                       Chcę, aby klient trenował zdrowo, optymalnie, bezpiecznie i długofalowo jeżeli tylko nie zabraknie mu zapału. </p>
                       <p>Razem z Wiktorem mamy podobne podejście, że właśnie zdrowo to jest silnie.<br/>  
                       Stąd nasze zamiłowanie do trójboju i włączaniu elementów z tej dyscypliny nawet w plany, które są kierowane pod osoby trakcie rehabilitacji po kontuzji. 
                       Sam wiele lat zmagałem się z kontuzją pleców, potem bólem, który pozostał po tej kontuzji i chcę, aby ludzie zmienili nastawienie, 
                       które jest budowane w opinii publicznej, mianowicie: „Jak Cię bolą plecy to ćwiczenia siłowe nie są dla Ciebie”.</p>
                       <p>Do projektu chcę wnieść właśnie ten pierwiastek funkcjonalnego, zdrowego dźwigania, 
                       który zabezpieczy ludzi przed ewentualnymi kontuzjami w ciągu codziennego życia, lub podczas uprawiania różnych dyscyplin sportowych.</p>
                       </div>
                      )}
                    
                    </div>
                    
            
            </div>
            </>
            ) : (
            <>
              <div style={{minHeight: "100%",width: "100vw", backgroundColor: "black", color: "white"}}>
                  <motion.div {...swipeToFirst} animate={{width: choice === 0 ? "null" : choice === 1 ? "90%" : "10%"}}  style={{height: "auto",marginTop: "1%", minHeight: "700px", display: "flex", justifyContent: "center",marginBottom:"15px", backgroundImage: `linear-gradient(rgba(0,0,0,0.93), rgba(0,0,0,0.2)),url(${owiktorze})`, backgroundSize: "cover", backgroundPosition: "center",position: "relative", float: "left", width: "50%", borderRadius: "0 15px 15px 0", zIndex: choice === 1 ? "2" : "1", boxShadow: "0px 0px 5px 3px #00000073"}} onClick={() => setChoice(1)}>
                     {choice === 0 && (

                        <div style={{marginTop: "0%", fontSize: "1.6rem"}}>
                          <div style={{backgroundImage: "linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8780889621087314) 38%, rgba(0,0,0,1) 46%, rgba(0,0,0,1) 100%)", width: "100%", position: "absolute", left: "0", textAlign: "center", borderRadius: "0px 15px 0px 0px", padding: "12px 0px 35px 0px", color: "white", fontWeight: "bold"}}>
                              Wiktor Michalski
                          </div>
                          <div className="button1">
                              <div style={{backgroundColor: "#000000", color: "white", border: "0", padding: "5px 25px", display: "flex", justifyContent: "center", borderRadius: "5px", fontSize: "1rem",fontWeight: "bold", boxShadow: "0px 0px 5px 3px #000000"}}>POKAŻ WIĘCEJ</div>
                          </div>
                        </div>  
                     )}
                     {choice === 1 && (
                        <>
                          <div style={{marginTop: "12%", fontSize: "1.7rem", fontWeight: "bold", position: "absolute"}}> Wiktor Michalski</div>
                          <div style={{marginTop: "20%", padding: "20px", textAlign: "center"}}>
                          Nazywam się Artur. Jestem trenerem medycznym/personalnym. Od wielu lat towarzyszy mi trening siłowy pod różne cele.<br/> 
                          Przez te wiele lat nauczyłem się jak działa nasze ciało, czego tak naprawdę potrzebuje aby być zdrowym ruchowo. 
                          Swoją wiedzę usystematyzowałem na wielu szkoleniach z zakresu treningu siłowego, medycznego oraz programowania planów treningowych.<br/>  
                          W   podejściu do klienta cel dla mnie jest jeden: 
                          Chcę, aby klient trenował zdrowo, optymalnie, bezpiecznie i długofalowo jeżeli tylko nie zabraknie mu zapału. 
                          Razem z Wiktorem mamy podobne podejście, że właśnie zdrowo to jest silnie.<br/>  
                          Stąd nasze zamiłowanie do trójboju i włączaniu elementów z tej dyscypliny nawet w plany, które są kierowane pod osoby trakcie rehabilitacji po kontuzji. 
                          Sam wiele lat zmagałem się z kontuzją pleców, potem bólem, który pozostał po tej kontuzji i chcę, aby ludzie zmienili nastawienie, 
                          które jest budowane w opinii publicznej, mianowicie: „Jak Cię bolą plecy to ćwiczenia siłowe nie są dla Ciebie”.<br/>  
                          Do projektu chcę wnieść właśnie ten pierwiastek funkcjonalnego, zdrowego dźwigania, 
                          który zabezpieczy ludzi przed ewentualnymi kontuzjami w ciągu codziennego życia, lub podczas uprawiania różnych dyscyplin sportowych.
                        </div>
                        </>
                     )}
                  </motion.div>
                  <motion.div {...swipeToSecond }animate={{width: choice === 0 ? "null" : choice === 2 ? "90%" : "10%"}} style={{height: "auto",marginTop: "1%", minHeight: "700px", display: "flex", justifyContent: "center",marginBottom:"15px", backgroundImage: `linear-gradient(rgba(0,0,0,0.93), rgba(0,0,0,0.2)), url(${oarturze})`, backgroundSize: "cover",backgroundPosition: "center",position: "relative", float: "right", width: "50%",  borderRadius: "15px 0 0 15px", zIndex: choice === 2 ? "2" : "1", boxShadow: "-4px 0px 5px 3px #00000085"}} onClick={() => setChoice(2)}>
                  {choice === 0 && (
                        <div style={{marginTop: "0%", fontSize: "1.6rem"}}>
                          <div style={{backgroundImage: "linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8780889621087314) 38%, rgba(0,0,0,1) 46%, rgba(0,0,0,1) 100%)", width: "100%", position: "absolute", left: "0", textAlign: "center", borderRadius: "15px 0px 0px 0px", padding: "12px 0px 35px 0px", color: "white", fontWeight: "bold"}}>
                              Artur Ziółkowski
                          </div>
                          <div className="button1">
                              <div style={{backgroundColor: "#000000", color: "white", border: "0", padding: "5px 25px", display: "flex", justifyContent: "center", borderRadius: "5px", fontSize: "1rem",fontWeight: "bold", boxShadow: "0px 0px 5px 3px #000000"}}>POKAŻ WIĘCEJ</div>
                          </div>
                        </div>  
                     )}
                    {choice === 2 && (
                      <>
                        <div  style={{marginTop: "12%", fontSize: "1.7rem", fontWeight: "bold", position: "absolute"}}>Artur Ziółkowski</div>
                          <div style={{marginTop: "20%", padding: "20px", textAlign: "center"}}>
                          Nazywam się Artur. Jestem trenerem medycznym/personalnym. Od wielu lat towarzyszy mi trening siłowy pod różne cele.<br/> 
                          Przez te wiele lat nauczyłem się jak działa nasze ciało, czego tak naprawdę potrzebuje aby być zdrowym ruchowo. 
                          Swoją wiedzę usystematyzowałem na wielu szkoleniach z zakresu treningu siłowego, medycznego oraz programowania planów treningowych.<br/>  
                          W   podejściu do klienta cel dla mnie jest jeden: 
                          Chcę, aby klient trenował zdrowo, optymalnie, bezpiecznie i długofalowo jeżeli tylko nie zabraknie mu zapału. 
                          Razem z Wiktorem mamy podobne podejście, że właśnie zdrowo to jest silnie.<br/>  
                          Stąd nasze zamiłowanie do trójboju i włączaniu elementów z tej dyscypliny nawet w plany, które są kierowane pod osoby trakcie rehabilitacji po kontuzji. 
                          Sam wiele lat zmagałem się z kontuzją pleców, potem bólem, który pozostał po tej kontuzji i chcę, aby ludzie zmienili nastawienie, 
                          które jest budowane w opinii publicznej, mianowicie: „Jak Cię bolą plecy to ćwiczenia siłowe nie są dla Ciebie”.<br/>  
                          Do projektu chcę wnieść właśnie ten pierwiastek funkcjonalnego, zdrowego dźwigania, 
                          który zabezpieczy ludzi przed ewentualnymi kontuzjami w ciągu codziennego życia, lub podczas uprawiania różnych dyscyplin sportowych.
                        </div>
                      </>
                    )}
                  </motion.div>
                  </div>
                  
            </>
            )}
      </div>
    )
}

export default AboutSection;