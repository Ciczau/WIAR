import React, {useState} from "react";
import FAQ from '../../components/FAQ';
import './Start.css';
import * as S from './index.styles';
import bga from "../../images/bga.png";
import bgw from "../../images/bgw.png";
import ImageSlider from "../../components/Slider";
import SideBar from "../../components/SideBar";


const HomeSection = ({windowWidth, choose}) => {
    const [faqs, setFaqs] = useState([
    {
        question: 'Czy zajmujecie się tylko osobami trenującymi trójbój?',
        answer: "Oczywiście że nie. Na naszej stronie jest dużo spraw związanych z trójbojem, jednak jest to tylko potwierdzenie tego, że wiemy co robimy. Trafiamy do ludzi z różnymi celami jeżeli chodzi o szeroko pojęty trening siłowy. ",
        open: false
    },
    {
        question: "Jaki jest czas oczekiwania na plan treningowy?",
        answer: "Plan treningowy piszemy w około 4-5 dni, czasami szybciej. Na pewno nie będziesz czekał/czekała dłużej. ",
        open: false
    },
    {
        question: "Ile muszę wykupić treningów personalnych aby nauczyć się techniki?",
        answer: "Jedni uczą się techniki w dosłownie 3-5 treningów inni potrzebują kilka pakietów treningowych. Dużo zależy od Twojego zaangażowania i tego jak starannie będziesz podchodzić do wszystkich wskazówek udzielanych przez Nas. ",
        open: false
    },
    {
        question: "Czy w planie treningowym jest wyjaśniona technika ćwiczeń?",
        answer: "Do planów treningowych dołączamy filmy instruktażowe, najważniejszych ćwiczeń i ich techniki, jeżeli coś jest bardzo niezrozumiałe, wysyłamy dokładny opis w formie głosowej lub wideo.",
        open: false
    },
    {
        question: "Czy w usłudze „redukcja” dostaję też dietę? ",
        answer: "Nie. Nie zajmujemy się rozpisywaniem typowych diet. Jednak dostajesz od Nas przykłady posiłków, które są sycące i smaczne, tak aby redukcja była przyjemniejsza. Dostajesz od Nas odpowiedni rozkład makroskładników oraz poradnik jak poradzić sobie z liczeniem kalorii i jak to optymalizować, aby nie zajmowało to całego dnia. ",
        open: false
    },
    {
        question: "Czy trening medyczny i personalny jest tym samym?",
        answer: "Trening personalny jest ukierunkowany pod cele sylwetkowe czy siłowe w zależności od preferencji klienta. Trening medyczny to szukanie problemów w ciele i ich naprawa tak aby aparat ruchu działał odpowiednio przez cały dzień, nie tylko na treningu. ",
        open: false
    },
    {
        question: "Czy jest możliwość treningów personalnych w parach?",
        answer: "Tak, jak najbardziej jest taka możliwość.",
        open: false
    },
    {
        question: "Czy podczas współpracy jest możliwy stały kontakt z trenerami?",
        answer: "Tak, kontakt odbywa się w większości drogą mailową, odpisujemy najszybciej jak to jest możliwe jeżeli chodzi o sprawy związane z treningiem. Klienci mogą też pisać do Nas prywatnie innych komunikatorach, jednak w tylko ważnych sprawach. ",
        open: false
    },
    {
        question: "Mam dodatkowe/inne pytania przed zakupem, co zrobić?",
        answer: "Napisz do nas e-mail, który jest podany w kontakcie, na pewno odpowiemy i rozwiejemy wszystkie Twoje wątpliwości.",
        open: false
    },
    
    ]);

    const toggleFAQ = index => {
        setFaqs(faqs.map((faq,i) => {
            if(i === index) {
                faq.open = !faq.open;
            }else{
                faq.open = false;
            }
            return faq;
        }))
    }
    const slide1 = require('../../images/slide1.jpg')
    const slide2 = require('../../images/slide2.jpg')
    const slide3 = require('../../images/slide3.JPG')
    const slide4 = require('../../images/slide4.JPG')
    const images = [
        {
            slide: slide2,
            text: "NIE TRAĆ CZASU NA TRENING BEZ PLANU",
            choose: 0
        },
        {
            slide: slide3,
            text: "MASZ KONTUZJĘ KTÓRA STALE NAWRACA PODCZAS TRENINGU?",
            choose: 1
        },
        {
            slide: slide4,
            text: "CHCESZ DZWIGAĆ WIĘCEJ NIŻ 95% LUDZI NA SIŁOWNI?",
            choose: 2
        },
        {
            slide: slide1,
            text: "NAUCZ SIĘ POPRAWNEJ TECHNIKI ĆWICZEŃ",
            choose: 3
        }
    ];
  
    return (
        <div><SideBar hide={true}/><ImageSlider images={images} choose={choose}/>
        {windowWidth > 800 ? (
        <>
        
        <S.Wrapper>
            <div style={{width: "50%", position: "relative", float: "left"}}> 
            <div style={{float: "left", marginLeft: "15%", marginTop: "2.05%", width: "70%", position: "relative", height: "100%"}}>
            <div className="faq-header" style={{backgroundColor: "rgba(255, 0, 0, 0.397)", marginLeft: "10%", width: "80%"}}><b>PO&nbsp;CO&nbsp;JESTEŚMY?</b></div>
            <div style={{marginTop: "8%"}}>
            <p style={{lineHeight: "160%"}}>
            Nasza strona jak i nasze usługi powstały po to, abyście mogli nauczyć się trenować zdrowo, efektywnie i optymalnie. Obaj jako trenerzy uważamy, że najlepszym lekarstwem na dzisiejszy styl życia i problemy zdrowotne jest ruch w różniej postaci. Zadanie jakie sobie postawiliśmy, to nie tylko pisanie planów, czy prowadzenie treningów personalnych, chcemy abyście zaczęli rozumieć ruch, abyście wiedzieli co i jak robić, aby Wasze ciało zbierało same benefity z treningów siłowych. 
            </p><p style={{lineHeight: "160%"}}>Po drugie chcemy, żebyście chcieli zacząć podnosić ciężkie rzeczy. Jest takie przeświadczenie w naszym społeczeństwie, że słowo „dźwigać” kojarzy się negatywnie, jako podnoszenie czegoś ZBYT ciężkiego. A jest to nie prawda, dźwiganie to coś, do czego nasze ciało zostało stworzone, tylko trzeba wiedzieć jak to robić- my wiemy. 
            </p><p style={{lineHeight: "160%"}}>
            Obaj nie możemy patrzeć na to, jak ludzie marnują czas na siłowni, trenując za lekko i bez celu. Uważamy, że kluczem dla większości użytkowników siłowni, aby osiągnąć efekty jest skupienie się na budowaniu siły, ponieważ o tę siłę możemy oprzeć wszystko inne( hipertrofię, wytrzymałość, szybkość, sprawność motoryczną). 
            </p></div>
           <div style={{ position: "relative", marginTop: "50px", color: "red", fontSize: "1.1rem"}}>
             <b>Nasze podejście jest inne niż większości trenerów.</b> 
            <p><b>My przede wszystkim stawiamy na:</b></p>

            <p>
            <li>dokładne zaprogramowanie treningu klienta</li>
            <li>znalezienie odpowiednich wzorców ruchowych</li>
            <li>optymalizację ruchów codziennych (chód, bieg, pozycja siedząca)</li>
            <li>znalezienie i naprawienie słabych ogniw</li>
            <li>zwiększenie siły, stabilizacji oraz świadomości swojego ciała</li>
            </p>
            </div>
            </div>
           </div>
            <div style={{float: "right", width: "40%",marginLeft: "5%",height: "auto", position: "relative",color: "black"}}>
            <div style={{backgroundColor: "white", width: "100vw", height: "auto"}}/>
            <div className="faqs" style={{marginTop: "7%"}}>
            <div className="faq-header"><b>NAJCZĘŚCIEJ ZADAWANE PYTANIA</b></div>
                    {faqs.map((faq, i) => (
                        <div key={i}>
                        <FAQ faq={faq}  index={i} toggleFAQ={toggleFAQ} />
                        </div>
                    ))}
            </div> 
            </div>
        </S.Wrapper>
        </>
        ) : (
        <>
        <S.MobileWrapper>
            <div className="faq-header" style={{backgroundColor: "rgba(255, 0, 0, 0.397)", marginLeft: "10%", width: "80%"}}><b>PO&nbsp;CO&nbsp;JESTEŚMY?</b></div>
            <div style={{marginTop: "8%"}}>
            <p style={{lineHeight: "160%"}}>
            Nasza strona jak i nasze usługi powstały po to, abyście mogli nauczyć się trenować zdrowo, efektywnie i optymalnie. Obaj jako trenerzy uważamy, że najlepszym lekarstwem na dzisiejszy styl życia i problemy zdrowotne jest ruch w różniej postaci. Zadanie jakie sobie postawiliśmy, to nie tylko pisanie planów, czy prowadzenie treningów personalnych, chcemy abyście zaczęli rozumieć ruch, abyście wiedzieli co i jak robić, aby Wasze ciało zbierało same benefity z treningów siłowych. 
            </p><p style={{lineHeight: "160%"}}>Po drugie chcemy, żebyście chcieli zacząć podnosić ciężkie rzeczy. Jest takie przeświadczenie w naszym społeczeństwie, że słowo „dźwigać” kojarzy się negatywnie, jako podnoszenie czegoś ZBYT ciężkiego. A jest to nie prawda, dźwiganie to coś, do czego nasze ciało zostało stworzone, tylko trzeba wiedzieć jak to robić- my wiemy. 
            </p><p style={{lineHeight: "160%"}}>
            Obaj nie możemy patrzeć na to, jak ludzie marnują czas na siłowni, trenując za lekko i bez celu. Uważamy, że kluczem dla większości użytkowników siłowni, aby osiągnąć efekty jest skupienie się na budowaniu siły, ponieważ o tę siłę możemy oprzeć wszystko inne( hipertrofię, wytrzymałość, szybkość, sprawność motoryczną). 
            </p></div>
           <div style={{ position: "relative", marginTop: "50px", color: "red", fontSize: "1.1rem"}}>
             <b>Nasze podejście jest inne niż większości trenerów.</b> 
            <p><b>My przede wszystkim stawiamy na:</b></p>

            <p>
            <li>dokładne zaprogramowanie treningu klienta</li>
            <li>znalezienie odpowiednich wzorców ruchowych</li>
            <li>optymalizację ruchów codziennych (chód, bieg, pozycja siedząca)</li>
            <li>znalezienie i naprawienie słabych ogniw</li>
            <li>zwiększenie siły, stabilizacji oraz świadomości swojego ciała</li>
            </p>
            </div>  
        </S.MobileWrapper>
        <S.WrapperFAQ>
            <img src={bga} alt="art" width="100%" style={{position: "absolute", display: "flex", justifyContent: "center", zIndex: "-1", marginTop: "-9%", filter: "brightness(30%)"}} />
            <img src={bgw} alt="wik" width="100%" style={{position: "absolute", display: "flex", justifyContent: "center", zIndex: "-1", bottom: "0", filter: "brightness(30%)"}} />
            <div style={{ color: "black", height: "850px"}}>
                <div className="faqs">
                <div className="faq-header" style={{marginTop: "10%"}}><b>NAJCZĘŚCIEJ ZADAWANE PYTANIA</b></div>
                        {faqs.map((faq, i) => (
                            <div key={i}>
                            <FAQ faq={faq}  index={i} toggleFAQ={toggleFAQ} />
                            </div>
                        ))}
                </div> 
                </div>
        </S.WrapperFAQ>
        </>
        )}
        </div>
    )
}

export default HomeSection;