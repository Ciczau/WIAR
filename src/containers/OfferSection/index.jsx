import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Confirmation from '../../components/Confirmation';
import LoginWarning from '../../components/LoginWarning';
import * as S from './index.styles';
import Slider from 'react-slick';
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import "./Offer.css";
import bg from "../../images/bgg.png";
import SideBar from '../../components/SideBar';

export const OfferSection = ({name, email, readData, windowWidth}) => {
    const [offer, setOffer] = useState(0);
    const [period, setPeriod] = useState('');
    const [user, setUser] = useState({
        name: name,
        email: email
    });
    const [seen, setSeen] = useState(false);
    const [loggWarn, setLoggWarn] = useState(false);
    const [text, setText] = useState('');
    const [error, setError] = useState('');
    const [captcha, setCaptcha] = useState(false);
    const [success, setSuccess] = useState(false);
    const [serviceType, setServiceType] = useState('');
    const [serviceTime, setServiceTime] = useState('');
    const slides = ["INDYWIDUALNY PLAN TRENINGOWY", "PROWADZENIE ONLINE", "TRENINGI PERSONALNE", "TRÓJBÓJ SIŁOWY", "REDUKCJA", "PLAN/KONSULTACJA PO URAZIE"];
    const togglePop = () => {
        if(name && email){
            setSeen(current => !current);
        setPeriod(1);
        }else{
            setLoggWarn(true);
        }
        
    }
    const NextArrow = ({ onClick }) => {
        return (
          <div className="arrow next" onClick={onClick}>
            <FaArrowRight />
          </div>
        );
      };
    
      const PrevArrow = ({ onClick }) => {
        return (
          <div className="arrow prev" onClick={onClick}>
            <FaArrowLeft />
          </div>
        );
      };
    const settings = {
        infinite: true,
        lazyLoad: true,
        speed: 500,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setOffer(next),
      };
    const togglePop2 = () => {
        setSeen(current => !current);
        setPeriod(2);
    }
    const readSubmit = (data) => {
        setText(data);
    }
    useEffect(() => {
        setUser({name: name, email: email})
    }, [name, email])
    const Offer0 = (e) => {
        setOffer(0);
    }
    const Offer1 = (e) => {
        setOffer(1);
    }
    const Offer2 = (e) => {
        setOffer(2);
    }
    const Offer3 = (e) => {
        setOffer(3);
    }
    const Offer4 = (e) => {
        setOffer(4);
    }
    const Offer5= (e) => {
        setOffer(5);
    }
    useEffect(() => {
        if(period === 1){
            if(offer === 0){
                setServiceType("Plan");
                setServiceTime("6 tygodni");
            }if(offer === 1){
                setServiceType("Prowadzenie online");
                setServiceTime("1 miesiąc");
            }if(offer === 2){
                setServiceType("Personal");
                setServiceTime("1 trening");
            }if(offer === 3){
                setServiceType("Trójboj");
                setServiceTime("1 miesiąc");
            }if(offer === 4){
                setServiceType("Redukcja");
                setServiceTime("1 miesiąc");
            }if(offer === 5){
                setServiceType("Naprawa");
                setServiceTime("1 miesiąc + 1 trening");
            }
        }
        if(period === 2){
            if(offer === 1){
                setServiceType("Prowadzenie online");
                setServiceTime("3 miesiące");
            }if(offer === 2){
                setServiceType("Personal");
                setServiceTime("10 treningów");
            }if(offer === 3){
                setServiceType("Trójboj");
                setServiceTime("3 miesiące");
            }if(offer === 4){
                setServiceType("Redukcja");
                setServiceTime("3 miesiące");
            }if(offer === 5){
                setServiceType("Naprawa");
                setServiceTime("3 miesiące + 3 treningi");
            }
        }
    }, [offer, period]);

    const handleClick = async e => {
        e.preventDefault();
        if(!captcha){
            setError("Błąd captcha")
            return
        }
        
        try{
            await axios.post("https://urchin-app-zxtvj.ondigitalocean.app/orders", {user: user.name, email: user.email,  type: serviceType, text: text, period: serviceTime});
            setSuccess(true);
            setTimeout(() => {
                setSeen(false);
                setSuccess(false);
            },1000)
        }catch(err){
            setError("Brak połączenia z serwerem :(")
        }
   
    }
    const valid = (data) => {
        setCaptcha(data);
        setTimeout(() => {
            setCaptcha(false)
        }, 10000)
    }
    return (
        <div>
            {seen && (
                <div>
                    <S.ConfirmationBackground onClick={() => setSeen(false)}></S.ConfirmationBackground>
                    {error}
                       <Confirmation  setSeen={setSeen} readSubmit={readSubmit} handleClick={handleClick} success={success} valid={valid}/>
                </div>
               )}
            {loggWarn && (
                <>
                    <S.ConfirmationBackground onClick={() => setLoggWarn(false)}></S.ConfirmationBackground>
                    <LoginWarning setLoggWarn={setLoggWarn} readData={readData}/>
                </>
            )}
        {windowWidth > 800 ? (
        <>
        <SideBar hide={true}/>
        <S.Wrapper>
            
            <div style={{marginLeft: "0%", width: "50%", display: "flex",justifyContent: "center",alignItems: "center",position: 'sticky'}}>
            <b>
            <div style={{width: "50%", marginLeft: "25%"}}>
                <S.OfferWrapper style={{textAlign: "center", backgroundColor: offer === 0 ? "#8b0000" : "white", color: offer === 0 ? "white" : "black"}} onClick={Offer0}>INDYWIDUALNY PLAN TRENINGOWY</S.OfferWrapper>
                <S.OfferWrapper style={{textAlign: "center", backgroundColor: offer === 1 ? "#8b0000" : "white", color: offer === 1 ? "white" : "black"}} onClick={Offer1}>PROWADZENIE ONLINE</S.OfferWrapper>
                <S.OfferWrapper style={{textAlign: "center", backgroundColor: offer === 5 ? "#8b0000" : "white", color: offer === 5 ? "white" : "black"}} onClick={Offer5}>PLAN/KONSULTACJA NAPRAWCZA PO URAZIE</S.OfferWrapper>
              
                <S.OfferWrapper style={{textAlign: "center", backgroundColor: offer === 2 ? "#8b0000" : "white", color: offer === 2 ? "white" : "black"}} onClick={Offer2}>TRENINGI PERSONALNE</S.OfferWrapper>
                <S.OfferWrapper style={{ textAlign: "center", backgroundColor: offer === 3 ? "#8b0000" : "white", color: offer === 3 ? "white" : "black"}} onClick={Offer3}>TRÓJBÓJ SIŁOWY - PROWADZENIE</S.OfferWrapper>
                <S.OfferWrapper style={{ textAlign: "center", backgroundColor: offer === 4 ? "#8b0000" : "white", color: offer === 4 ? "white" : "black"}} onClick={Offer4}>REDUKCJA</S.OfferWrapper>
           </div></b></div>
         
         
            <div style={{float: "right", position: "relative", width: "50%", height: "100%", color: "white"}}>
                {!offer && (
                    <div style={{width: "70%", marginLeft: "12%", marginTop: "7%", transform: "scale(1)", transitionDelay: "1s", transition: "0.6s ease"}}>
                    <p style={{fontSize: "2rem"}}><b>INDYWIDUALNY PLAN TRENINGOWY</b></p>
                    <p>Trenowanie bez planu jest dobre, ale na chwile. Aby mieć dobre efekty, a przede wszystkim monitorować co dzieje się w naszym ciele i jakie zmiany zachodzą potrzebujemy dobrego planu treningowego. 
                    </p><p>Niezależnie od tego w jakim celu trenujesz, plan treningowy to podstawa. 
</p><p>Nasze plany są pisane w oparciu o informacje jakie dostajemy od klientów na podstawie ankiety oraz rozmowy, którą przeprowadzamy przed rozpoczęciem pracy nad planem. Jest to gwarancja dobrania planu idealnie pod Twoje cele, warunki fizyczne i preferencje. 
</p><p>Przetestowaliśmy na sobie i na Naszych podopiecznych setki ćwiczeń oraz dziesiątki systemów treningowych, wiemy co działa i jak pisać plany aby działały. 
</p>
                    <div style={{marginTop: "25%"}}>
                <S.ShortDescWrapper style={{justifyContent: "center", marginLeft: "15%", width: "70%"}}>
                    <div style={{padding: "10px 0"}}>149zł</div>
                    <div style={{backgroundColor: "lightgrey", padding: "10px 0"}}>6 tygodni</div>
                    <div style={{padding: "10px 0", cursor: "pointer"}} onClick={togglePop}><b>KUP TERAZ</b></div>
                </S.ShortDescWrapper>
                </div>
                </div>
                )}
                {offer === 1 && (
                    <div style={{width: "70%", marginLeft: "12%", marginTop: "7%"}}>
                    <p style={{fontSize: "2rem"}}><b>PROWADZENIE ONLINE</b></p>
                    <p>Jest to usługa przeznaczona dla osób, które nie mogą współpracować z nami na żywo z racji dzielącej nas odległości. </p>
                    <p>Współpraca wygląda wygląda podobnie jak w przypadku zwykłego prowadzenia z małymi różnicami. We współpracy online stawiamy nas:</p>
                    <p style={{display: "inline-block"}}><li>raporty tygodniowe</li>
                    <li>ocena techniki na podstawie filmów i korygowanie na bieżąco błędów</li>
                    <li>odpowiednie dobieranie ćwiczeń pod słabe ogniwa i problemy w bojach</li>
                    </p>
                    <p>Jeżeli chcesz aby Twoja przygoda z siłownią była prowadzona pod okiem ludzi, którzy się na tym znają, wiedzą jak dźwigać zdrowo i dużo- zapraszamy.</p>
                    <div style={{marginTop: "25%"}}>
                <S.ShortDescWrapper style={{float: "left",width: "45%"}}>
                    <div style={{padding: "10px 0"}}>199zł</div>
                    <div style={{backgroundColor: "lightgrey", padding: "10px 0"}}>1 miesiąc</div>
                    <div style={{padding: "10px 0", cursor: "pointer"}} onClick={togglePop}><b>KUP TERAZ</b></div>
                </S.ShortDescWrapper>
                <S.ShortDescWrapper style={{float: "right",width: "45%", position: "sticky"}}>
                    <div style={{padding: "10px 0"}}>499zł</div>
                    <div style={{backgroundColor: "lightgrey", padding: "10px 0"}}>3 miesiące</div>
                    <div style={{padding: "10px 0", cursor: "pointer"}} onClick={togglePop2}><b>KUP TERAZ</b></div>
                </S.ShortDescWrapper>
                </div>
                </div>
                )}
                {offer === 2 && (
                        <div style={{width: "70%", marginLeft: "12%", marginTop: "7%"}}>
                        <p style={{fontSize: "2rem"}}><b>TRENINGI PERSONALNE</b></p>
                        <p>Technika podczas ćwiczeń jest najważniejsza. Mogłoby się wydawać, że można nauczyć się jej z internetu, przecież w internecie jest wszystko. Jednak problem polega na tym, że każdy z Nas jest troszkę inaczej zbudowany, co za tym idzie każdy z Nas musi tę technikę dobierać pod swoją budowę.</p>
                        <p>Jeżeli chcesz trenować bezpiecznie, tak aby ćwiczenia dawały Ci jak najlepsze efekty, a jednocześnie naprawiały Twoje słabe ogniwa, to jest usługa dla Ciebie.</p>
<p>Na treningu personalnym dokładnie wytłumaczymy Ci na czym dokładnie polega dana technika, na co musisz zwracać szczególną uwagę, kiedy będziesz trenował już sam.</p>
<p>Chcielibyśmy, aby nie zraziło Cię to, że niektórzy muszą chodzić na treningi personalne kilka miesięcy i wydawać kilka tysięcy złotych. Jeżeli dobrze się do tego przyłożysz to możemy to ogarnąć w kilka treningów.</p>
                        <div style={{marginTop: "25%"}}>
                    <S.ShortDescWrapper style={{float: "left",width: "45%"}}>
                        <div style={{padding: "10px 0"}}>99zł</div>
                        <div style={{backgroundColor: "lightgrey", padding: "10px 0"}}>1 trening</div>
                        <div style={{padding: "10px 0", cursor: "pointer"}} onClick={togglePop}><b>KUP TERAZ</b></div>
                    </S.ShortDescWrapper>
                    <S.ShortDescWrapper style={{float: "right",width: "45%", position: "sticky"}}>
                        <div style={{padding: "10px 0"}}>849zł</div>
                        <div style={{backgroundColor: "lightgrey", padding: "10px 0"}}>10 treningów</div>
                        <div style={{padding: "10px 0", cursor: "pointer"}} onClick={togglePop2}><b>KUP TERAZ</b></div>
                    </S.ShortDescWrapper>
                    </div>
                    </div>
                )}
                {offer === 3 && (
                    <div style={{width: "70%", marginLeft: "12%", marginTop: "7%"}}>
                        <p style={{fontSize: "2rem"}}><b>TRÓJBÓJ SIŁOWY - PROWADZENIE</b></p>
                        <p>Dodawanie kilogramów na sztangę to najlepsze uczucie na siłowni. Wierz mi, trenując z wieloma klientami, nawet Ci, którzy przychodzili tylko dla zdrowia byli zadowoleni kiedy na sztandze pojawiał się coraz większy ciężar. </p>
<p>Prowadzimy ludzi pod zawody jak i również tych, którzy chcieliby wycisnąć swoje pierwsze 100/150kg czy podnieść w martwym ciągu coś dużego. 
Jeżeli chciałbyś wyróżnić się na siłowni swoimi wynikami, to z nami zrobisz to dużo szybciej niż Ci się wydaje. </p>
A może chciałbyś kiedyś stanąć na pomoście, marzy Ci się założenie singletu i sprawdzenie się na pełnoprawnych zawodach? Zadbamy o to, aby zmaksymalizować Twój wynik i doprowadzić Cię w jak najlepszej formie do zawodów.
                    <div style={{marginTop: "25%"}}>
                    <S.ShortDescWrapper style={{float: "left",width: "45%"}}>
                        <div style={{padding: "10px 0"}}>249zł</div>
                        <div style={{backgroundColor: "lightgrey", padding: "10px 0"}}>1 miesiąc</div>
                        <div style={{padding: "10px 0", cursor: "pointer"}} onClick={togglePop}><b>KUP TERAZ</b></div>
                    </S.ShortDescWrapper>
                    <S.ShortDescWrapper style={{float: "right",width: "45%", position: "sticky"}}>
                        <div style={{padding: "10px 0"}}>599zł</div>
                        <div style={{backgroundColor: "lightgrey", padding: "10px 0"}}>3 miesiące</div>
                        <div style={{padding: "10px 0", cursor: "pointer"}} onClick={togglePop2}><b>KUP TERAZ</b></div>
                    </S.ShortDescWrapper>
                    </div>
                    </div>
                )}
                {offer === 4 && (
                    <div style={{width: "70%", marginLeft: "12%", marginTop: "7%"}}>
                    <p style={{fontSize: "2rem"}}><b>REDUKCJA</b></p>
                    Masz kilka zbędnych kilogramów?
                    <p>Nasza usługa „Redukcja” pomoże Ci uporać się z tym problemem. </p>
                    <div>Dostaniesz od nas:</div>
                    <p style={{display: "inline-block", textAlign: "left"}}>
                    <li>plan treningowy</li>
                    <li>rozpiskę kaloryczną i makroskładniki</li>
                    <li>przykładowe posiłki w danym pułapie kalorycznym</li></p>
                    <p>Usługa ta jest ukierunkowana na zrzucanie kilogramów, jednak zawsze staramy się działać bardziej holistycznie i dbać o to, aby poprawić również styl życia i ogólne samopoczucie. 
W tym rodzaju współpracy możemy działać stacjonarnie jak i online.</p>
                <div style={{marginTop: "25%"}}>
                <S.ShortDescWrapper style={{float: "left",width: "45%"}}>
                    <div style={{padding: "10px 0"}}>149zł</div>
                    <div style={{backgroundColor: "lightgrey", padding: "10px 0"}}>1 miesiąc</div>
                    <div style={{padding: "10px 0", cursor: "pointer"}} onClick={togglePop}><b>KUP TERAZ</b></div>
                </S.ShortDescWrapper>
                <S.ShortDescWrapper style={{float: "right",width: "45%", position: "sticky"}}>
                    <div style={{padding: "10px 0"}}>399zł</div>
                    <div style={{backgroundColor: "lightgrey", padding: "10px 0"}}>3 miesiące</div>
                    <div style={{padding: "10px 0", cursor: "pointer"}} onClick={togglePop2}><b>KUP TERAZ</b></div>
                </S.ShortDescWrapper>
                </div>
                </div>
                )}
                {offer === 5 && (
                    <div style={{width: "70%", marginLeft: "12%", fontSize: "1rem", marginTop: "7%"}}>
                    <p style={{fontSize: "2rem"}}><b>PLAN/KONSULTACJA NAPRAWCZA PO URAZIE</b></p>
                    <p>Przez kilka lat treningu nauczyliśmy się wielu rzeczy, jednak jedna dla Nas jest bardzo ważna: Nic nie leczy lepiej niż ruch, jeżeli chodzi o nasz układ mięśniowo-stawowy. Praca na całych taśmach funkcjonalnych, w pełnych zakresach ruchu i wzmacnianie tego co słabe to kwintesencja treningu medycznego, który najczęściej przynosi najlepsze efekty w powrocie po kontuzji czy innych urazach. 
</p><p>Jeżeli miałeś kontuzję, lub z jakiegoś powodu bolą Cię plecy/biodro czy kolana to ta usługa jest właśnie dla Ciebie. 
</p><p>Zdiagnozujemy przyczyny bólu, nauczymy Cię techniki, która jest optymalna dla Ciebie, dobierzemy ćwiczenia, które będą Cię wzmacniać i na podstawie całej tej wiedzy ustalonej na treningu ułożymy plan naprawczy, który będzie miał za zadanie zrobić z Ciebie zdrowego i sprawnego człowieka( do tego silnego ).
                </p>
            
                <div style={{marginTop: "25%"}}>
                <S.ShortDescWrapper style={{float: "left",width: "45%"}}>
                    <div style={{padding: "10px 0"}}>249zł</div>
                    <div style={{backgroundColor: "lightgrey", padding: "10px 0"}}>1 miesiąc (1 trening medyczny)</div>
                    <div style={{padding: "10px 0", cursor: "pointer"}} onClick={togglePop}><b>KUP TERAZ</b></div>
                </S.ShortDescWrapper>
                <S.ShortDescWrapper style={{float: "right",width: "45%", position: "sticky"}}>
                    <div style={{padding: "10px 0"}}>649zł</div>
                    <div style={{backgroundColor: "lightgrey", padding: "10px 0"}}>3 miesiące (3 treningi medyczne)</div>
                    <div style={{padding: "10px 0", cursor: "pointer"}} onClick={togglePop2}><b>KUP TERAZ</b></div>
                </S.ShortDescWrapper>
                </div>
                </div>
                    
                )}
            </div>
        </S.Wrapper>
        </>
        ) : (
        <><img src={bg} alt="bg" width="100%" style={{position: "absolute", display: "flex", justifyContent: "center", zIndex: "-1"}}/>
        <S.Wrapper style={{padding: "0",position: "relative",backgroundColor: "#ffffff11", backgroundImage: "linear-gradient(rgba(0,0,0,1) 0%, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 35%, rgba(0,0,0,1) 100%)", color: "white", height: "auto"}}>
                
                <Slider {...settings} style={{position:"absolute", width: "96%", marginLeft: "2%"}}>
                    {slides.map((text, index) => (
                        <div className={index === offer ? "slide activeSlide" : "slide"}>
                            {text}
                        </div>
                    ))}
                </Slider>
                <div style={{marginTop: "55%"}}>
            
                {!offer && (
                    <div style={{marginTop: "7%", transform: "scale(1)", transitionDelay: "1s", transition: "0.6s ease"}}>
                    <p style={{fontSize: "2rem"}}><b>INDYWIDUALNY PLAN TRENINGOWY</b></p>
                    <p>Trenowanie bez planu jest dobre, ale na chwile. Aby mieć dobre efekty, a przede wszystkim monitorować co dzieje się w naszym ciele i jakie zmiany zachodzą potrzebujemy dobrego planu treningowego. 
                    </p><p>Niezależnie od tego w jakim celu trenujesz, plan treningowy to podstawa. 
</p><p>Nasze plany są pisane w oparciu o informacje jakie dostajemy od klientów na podstawie ankiety oraz rozmowy, którą przeprowadzamy przed rozpoczęciem pracy nad planem. Jest to gwarancja dobrania planu idealnie pod Twoje cele, warunki fizyczne i preferencje. 
</p><p>Przetestowaliśmy na sobie i na Naszych podopiecznych setki ćwiczeń oraz dziesiątki systemów treningowych, wiemy co działa i jak pisać plany aby działały. 
</p>
                    <div style={{marginTop: "25%"}}>
                <S.ShortDescWrapper style={{justifyContent: "center", marginLeft: "15%", width: "70%"}}>
                    <div style={{padding: "10px 0"}}>149zł</div>
                    <div style={{backgroundColor: "lightgrey", padding: "10px 0"}}>6 tygodni</div>
                    <div style={{padding: "10px 0"}} onClick={togglePop}><b>KUP TERAZ</b></div>
                </S.ShortDescWrapper>
                </div>
                </div>
                )}
                {offer === 1 && (
                    <div style={{padding: "15px", marginTop: "7%"}}>
                    <p style={{fontSize: "2rem"}}><b>PROWADZENIE ONLINE</b></p>
                    <p>Jest to usługa przeznaczona dla osób, które nie mogą współpracować z nami na żywo z racji dzielącej nas odległości. </p>
                    <p>Współpraca wygląda wygląda podobnie jak w przypadku zwykłego prowadzenia z małymi różnicami. We współpracy online stawiamy nas:</p>
                    <p style={{display: "inline-block"}}><li>raporty tygodniowe</li>
                    <li>ocena techniki na podstawie filmów i korygowanie na bieżąco błędów</li>
                    <li>odpowiednie dobieranie ćwiczeń pod słabe ogniwa i problemy w bojach</li>
                    </p>
                    <p>Jeżeli chcesz aby Twoja przygoda z siłownią była prowadzona pod okiem ludzi, którzy się na tym znają, wiedzą jak dźwigać zdrowo i dużo- zapraszamy.</p>
                    <div style={{marginTop: "25%"}}>
                <S.ShortDescWrapper style={{float: "left",width: "45%"}}>
                    <div style={{padding: "10px 0"}}>199zł</div>
                    <div style={{backgroundColor: "lightgrey", padding: "10px 0"}}>1 miesiąc</div>
                    <div style={{padding: "10px 0"}} onClick={togglePop}><b>KUP TERAZ</b></div>
                </S.ShortDescWrapper>
                <S.ShortDescWrapper style={{float: "right",width: "45%", position: "sticky"}}>
                    <div style={{padding: "10px 0"}}>499zł</div>
                    <div style={{backgroundColor: "lightgrey", padding: "10px 0"}}>3 miesiące</div>
                    <div style={{padding: "10px 0"}} onClick={togglePop2}><b>KUP TERAZ</b></div>
                </S.ShortDescWrapper>
                </div>
                </div>
                )}
                {offer === 2 && (
                        <div style={{padding: "15px",  marginTop: "7%"}}>
                        <p style={{fontSize: "2rem"}}><b>TRENINGI PERSONALNE</b></p>
                        <p>Technika podczas ćwiczeń jest najważniejsza. Mogłoby się wydawać, że można nauczyć się jej z internetu, przecież w internecie jest wszystko. Jednak problem polega na tym, że każdy z Nas jest troszkę inaczej zbudowany, co za tym idzie każdy z Nas musi tę technikę dobierać pod swoją budowę.</p>
                        <p>Jeżeli chcesz trenować bezpiecznie, tak aby ćwiczenia dawały Ci jak najlepsze efekty, a jednocześnie naprawiały Twoje słabe ogniwa, to jest usługa dla Ciebie.</p>
<p>Na treningu personalnym dokładnie wytłumaczymy Ci na czym dokładnie polega dana technika, na co musisz zwracać szczególną uwagę, kiedy będziesz trenował już sam.</p>
<p>Chcielibyśmy, aby nie zraziło Cię to, że niektórzy muszą chodzić na treningi personalne kilka miesięcy i wydawać kilka tysięcy złotych. Jeżeli dobrze się do tego przyłożysz to możemy to ogarnąć w kilka treningów.</p>
                        <div style={{marginTop: "25%"}}>
                    <S.ShortDescWrapper style={{float: "left",width: "45%"}}>
                        <div style={{padding: "10px 0"}}>99zł</div>
                        <div style={{backgroundColor: "lightgrey", padding: "10px 0"}}>1 trening</div>
                        <div style={{padding: "10px 0"}} onClick={togglePop}><b>KUP TERAZ</b></div>
                    </S.ShortDescWrapper>
                    <S.ShortDescWrapper style={{float: "right",width: "45%", position: "sticky"}}>
                        <div style={{padding: "10px 0"}}>849zł</div>
                        <div style={{backgroundColor: "lightgrey", padding: "10px 0"}}>10 treningów</div>
                        <div style={{padding: "10px 0"}} onClick={togglePop2}><b>KUP TERAZ</b></div>
                    </S.ShortDescWrapper>
                    </div>
                    </div>
                )}
                {offer === 3 && (
                    <div style={{padding: "15px", marginTop: "7%"}}>
                        <p style={{fontSize: "2rem"}}><b>TRÓJBÓJ SIŁOWY - PROWADZENIE</b></p>
                        <p>Dodawanie kilogramów na sztangę to najlepsze uczucie na siłowni. Wierz mi, trenując z wieloma klientami, nawet Ci, którzy przychodzili tylko dla zdrowia byli zadowoleni kiedy na sztandze pojawiał się coraz większy ciężar. </p>
<p>Prowadzimy ludzi pod zawody jak i również tych, którzy chcieliby wycisnąć swoje pierwsze 100/150kg czy podnieść w martwym ciągu coś dużego. 
Jeżeli chciałbyś wyróżnić się na siłowni swoimi wynikami, to z nami zrobisz to dużo szybciej niż Ci się wydaje. </p>
A może chciałbyś kiedyś stanąć na pomoście, marzy Ci się założenie singletu i sprawdzenie się na pełnoprawnych zawodach? Zadbamy o to, aby zmaksymalizować Twój wynik i doprowadzić Cię w jak najlepszej formie do zawodów.
                    <div style={{marginTop: "25%"}}>
                    <S.ShortDescWrapper style={{float: "left",width: "45%"}}>
                        <div style={{padding: "10px 0"}}>249zł</div>
                        <div style={{backgroundColor: "lightgrey", padding: "10px 0"}}>1 miesiąc</div>
                        <div style={{padding: "10px 0"}} onClick={togglePop}><b>KUP TERAZ</b></div>
                    </S.ShortDescWrapper>
                    <S.ShortDescWrapper style={{float: "right",width: "45%", position: "sticky"}}>
                        <div style={{padding: "10px 0"}}>599zł</div>
                        <div style={{backgroundColor: "lightgrey", padding: "10px 0"}}>3 miesiące</div>
                        <div style={{padding: "10px 0"}} onClick={togglePop2}><b>KUP TERAZ</b></div>
                    </S.ShortDescWrapper>
                    </div>
                    </div>
                )}
                {offer === 4 && (
                    <div style={{padding: "15px",  marginTop: "7%"}}>
                    <p style={{fontSize: "2rem"}}><b>REDUKCJA</b></p>
                    Masz kilka zbędnych kilogramów?
                    <p>Nasza usługa „Redukcja” pomoże Ci uporać się z tym problemem. </p>
                    <div>Dostaniesz od nas:</div>
                    <p style={{display: "inline-block", textAlign: "left"}}>
                    <li>plan treningowy</li>
                    <li>rozpiskę kaloryczną i makroskładniki</li>
                    <li>przykładowe posiłki w danym pułapie kalorycznym</li></p>
                    <p>Usługa ta jest ukierunkowana na zrzucanie kilogramów, jednak zawsze staramy się działać bardziej holistycznie i dbać o to, aby poprawić również styl życia i ogólne samopoczucie. 
W tym rodzaju współpracy możemy działać stacjonarnie jak i online.</p>
                <div style={{marginTop: "25%"}}>
                <S.ShortDescWrapper style={{float: "left",width: "45%"}}>
                    <div style={{padding: "10px 0"}}>149zł</div>
                    <div style={{backgroundColor: "lightgrey", padding: "10px 0"}}>1 miesiąc</div>
                    <div style={{padding: "10px 0"}} onClick={togglePop}><b>KUP TERAZ</b></div>
                </S.ShortDescWrapper>
                <S.ShortDescWrapper style={{float: "right",width: "45%", position: "sticky"}}>
                    <div style={{padding: "10px 0"}}>399zł</div>
                    <div style={{backgroundColor: "lightgrey", padding: "10px 0"}}>3 miesiące</div>
                    <div style={{padding: "10px 0"}} onClick={togglePop2}><b>KUP TERAZ</b></div>
                </S.ShortDescWrapper>
                </div>
                </div>
                )}
                {offer === 5 && (
                    <div style={{padding: "15px",  fontSize: "1rem", marginTop: "7%"}}>
                    <p style={{fontSize: "2rem"}}><b>PLAN/KONSULTACJA NAPRAWCZA PO URAZIE</b></p>
                    <p>Przez kilka lat treningu nauczyliśmy się wielu rzeczy, jednak jedna dla Nas jest bardzo ważna: Nic nie leczy lepiej niż ruch, jeżeli chodzi o nasz układ mięśniowo-stawowy. Praca na całych taśmach funkcjonalnych, w pełnych zakresach ruchu i wzmacnianie tego co słabe to kwintesencja treningu medycznego, który najczęściej przynosi najlepsze efekty w powrocie po kontuzji czy innych urazach. 
</p><p>Jeżeli miałeś kontuzję, lub z jakiegoś powodu bolą Cię plecy/biodro czy kolana to ta usługa jest właśnie dla Ciebie. 
</p><p>Zdiagnozujemy przyczyny bólu, nauczymy Cię techniki, która jest optymalna dla Ciebie, dobierzemy ćwiczenia, które będą Cię wzmacniać i na podstawie całej tej wiedzy ustalonej na treningu ułożymy plan naprawczy, który będzie miał za zadanie zrobić z Ciebie zdrowego i sprawnego człowieka( do tego silnego ).
                </p>
            
                <div style={{marginTop: "25%"}}>
                <S.ShortDescWrapper style={{float: "left",width: "45%"}}>
                    <div style={{padding: "10px 0"}}>249zł</div>
                    <div style={{backgroundColor: "lightgrey", padding: "10px 0"}}>1 miesiąc (1 trening medyczny)</div>
                    <div style={{padding: "10px 0"}} onClick={togglePop}><b>KUP TERAZ</b></div>
                </S.ShortDescWrapper>
                <S.ShortDescWrapper style={{float: "right",width: "45%", position: "sticky"}}>
                    <div style={{padding: "10px 0"}}>649zł</div>
                    <div style={{backgroundColor: "lightgrey", padding: "10px 0"}}>3 miesiące (3 treningi medyczne)</div>
                    <div style={{padding: "10px 0"}} onClick={togglePop2}><b>KUP TERAZ</b></div>
                </S.ShortDescWrapper>
                </div>
                </div>
                    
                )}</div>
            </S.Wrapper>
            
        </>
        )}
        </div>
    )
}

export default OfferSection;
