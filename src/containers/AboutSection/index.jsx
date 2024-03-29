import React, { useState, useEffect } from "react";
import { BrowserView, MobileView } from "react-device-detect";
import * as S from './index.styles';
import artur from '../../images/artur.png';
import wiktor from '../../images/wiktor.JPG';
import  { motion } from "framer-motion";
import "./Onas.css";
import { useSwipeable } from "react-swipeable";

const AboutSection = ({windowWidth}) => {
    const [placeholder, setPlaceholder] = useState('');
    const [choice, setChoice] = useState(0);
    const [hover, setHover] = useState(0);
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
         
            <div style={{backgroundColor: "#222222cf", minHeight: "100vh",height: "auto", width: "100vw",position: 'relative', display: "flex", justifyContent: "center", color: "white", backgroundImage: choice === 2 && `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${wiktor})` || choice === 1 && `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${artur})` , backgroundSize: "cover", backgroundPosition: choice === 2 && "center -25vw"}}>
                    <div  style={{marginTop: choice === 0 && "100px", textAlign: "center", position: choice === 2 ? "absolute" : "relative", transform: choice === 2 ? "scale(0.3) translateX(-125vw)" : "scale(1.0)",top: choice === 2 && "-15vw", transition: "0.5s ease", zIndex: choice === 2 && "9996"}}>
                      <S.Image width="50%" onClick={() => setChoice(1)} onMouseEnter={() => setHover(1)} onMouseLeave={() => setHover(0)} src={artur} style={{width: choice === 1 && "0", opacity: choice === 2 && "0.6"}}/>
                      {choice === 0 && (
                        <div style={{fontWeight: "bold",fontFamily: "'Exo 2'", margin: "10px", fontSize: "2.5vw", transform: hover === 1 && "translateY(-50px)", transition: "0.33s ease", fontStretch: "150%"}}>Artur Ziółkowski</div>
                      )}
                  
                      {choice === 1 && (
                        <div style={{marginBottom: "30px",marginTop: "11%", marginLeft: "30%",marginRight: "15%", fontSize: "1.2rem", backgroundColor: "#33333342", padding: "25px", borderRadius: "3px"}}>
                          <p style={{fontSize: "2.5rem",width: "100%"}}>Nazywam się Artur. <br/>Jestem trenerem medycznym/personalnym. 
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
                      <S.Image width="50%" onClick={() => setChoice(2)} onMouseEnter={() => setHover(2)} onMouseLeave={() => setHover(0)} src={wiktor} style={{width: choice === 2 && "0", opacity: choice === 1 && "0.6"}}/>
                      {choice === 0 && (
                        <div style={{fontWeight: "bold", fontFamily: "'Exo 2'",margin: "10px",fontSize: "2.5vw", transform: hover === 2 && "translateY(-50px)", transition: "0.33s ease"}}>Wiktor Michalski</div>
                      )}
                      {choice === 2 && (
                       <div style={{marginBottom: "30px",marginTop: "11%", marginLeft: "30%",marginRight: "15%",fontSize: "1.2rem", zIndex: "9", backgroundColor: "#33333342", padding: "25px", borderRadius: "3px"}}>
                        <p style={{fontSize: "2.5rem",width: "150%", marginLeft: "-25%"}}>Cześć, nazywam się Wiktor</p>
                        <p >Od blisko ośmiu lat trening siłowy jest częścią mojego życia.</p>
                        <p style={{fontSize: "1.2rem", padding: "15px 105px"}}>Praktycznie od początku, największą satysfakcje dawał mi progress siłowy, stąd moje zamiłowanie do trójboju siłowego.
                        Od wielu lat jestem czynnym zawodnikiem tej dyscypliny, przy okazji udało mi się zdobyć kilka medali.</p>
                        <p>Dzięki wieloletniemu nabywaniu wiedzy i jej testowaniu jestem w stanie wnieść do projektu między innymi ten stricte trójbojowy aspekt.</p>
                        <p style={{padding: "0px 80px"}}>W podejściu do klienta patrzę zawsze globalnie, zwracając uwagę na cały tryb życia, tak aby każdy mógł trenować efektywnie i długo.
                        Dany plan jest układany pod każdego indywidualnie. Ważne jest dla mnie aby każdy mój podopieczny realizował się w zamierzonych sobie celach.</p>



                       </div>
                      )}
                    
                    </div>
                    
            
            </div>
            </>
            ) : (
            <>
              <div style={{minHeight: "100%",width: "100vw", backgroundColor: "black", color: "white"}}>
                  <motion.div {...swipeToFirst} animate={{width: choice === 0 ? "null" : choice === 1 ? "90%" : "10%"}}  style={{height: "auto",marginTop: "1%", minHeight: "700px", display: "flex", justifyContent: "center",marginBottom:"15px", backgroundImage: `linear-gradient(rgba(0,0,0,0.93), rgba(0,0,0,0.2)),url(${wiktor})`, backgroundSize: "cover", backgroundPosition: "right center",position: "relative", float: "left", width: "50%", borderRadius: "0 15px 15px 0", zIndex: choice === 1 ? "2" : "1", boxShadow: "0px 0px 5px 3px #00000073"}} onClick={() => setChoice(1)}>
                     {choice === 0 && (

                        <div style={{marginTop: "0%", fontSize: "1.6rem"}}>
                          <div style={{ width: "100%", position: "absolute", left: "0", textAlign: "center", borderRadius: "0px 15px 0px 0px", padding: "12px 0px 35px 0px", color: "white", fontWeight: "bold", fontFamily: "'Exo 2'"}}>
                              Wiktor Michalski
                          </div>
                     
                        </div>  
                     )}
                     {choice === 1 && (
                        <>
                          <div style={{marginTop: "12%", fontSize: "1.7rem", fontWeight: "bold", position: "absolute"}}> Wiktor Michalski</div>
                          <div style={{marginTop: "20%", padding: "20px", textAlign: "center"}}>
                        <p style={{fontSize: "1rem",width: "150%", marginLeft: "-25%"}}>Cześć, nazywam się Wiktor</p>
                        <p >Od blisko ośmiu lat trening siłowy jest częścią mojego życia.</p>
                        <p style={{fontSize: "1rem"}}>Praktycznie od początku, największą satysfakcje dawał mi progress siłowy, stąd moje zamiłowanie do trójboju siłowego.
                        Od wielu lat jestem czynnym zawodnikiem tej dyscypliny, przy okazji udało mi się zdobyć kilka medali.</p>
                        <p>Dzięki wieloletniemu nabywaniu wiedzy i jej testowaniu jestem w stanie wnieść do projektu między innymi ten stricte trójbojowy aspekt.</p>
                        <p style={{padding: "0px 80px"}}>W podejściu do klienta patrzę zawsze globalnie, zwracając uwagę na cały tryb życia, tak aby każdy mógł trenować efektywnie i długo.
                        Dany plan jest układany pod każdego indywidualnie. Ważne jest dla mnie aby każdy mój podopieczny realizował się w zamierzonych sobie celach.</p>
                        </div>
                        </>
                     )}
                  </motion.div>
                  <motion.div {...swipeToSecond }animate={{width: choice === 0 ? "null" : choice === 2 ? "90%" : "10%"}} style={{height: "auto",marginTop: "1%", minHeight: "700px", display: "flex", justifyContent: "center",marginBottom:"15px", backgroundImage: `linear-gradient(rgba(0,0,0,0.93), rgba(0,0,0,0.2)), url(${artur})`, backgroundSize: "cover",backgroundPosition: "center",position: "relative", float: "right", width: "50%",  borderRadius: "15px 0 0 15px", zIndex: choice === 2 ? "2" : "1", boxShadow: "-4px 0px 5px 3px #00000085"}} onClick={() => setChoice(2)}>
                  {choice === 0 && (
                        <div style={{marginTop: "0%", fontSize: "1.6rem"}}>
                          <div style={{width: "100%", position: "absolute", left: "0", textAlign: "center", borderRadius: "15px 0px 0px 0px", padding: "12px 0px 35px 0px", color: "white", fontWeight: "bold", fontFamily: "'Exo 2'"}}>
                              Artur Ziółkowski
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