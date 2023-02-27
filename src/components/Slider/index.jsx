import React, { useEffect, useState, useMemo} from "react";
import {FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";
const ImageSlider = ({images, choose}) => {
    const [active, setActive] = useState(0);

    const checkPrev = () => {
        if(active === 0){
            setActive(images.length-1);
        }else{
            setActive(active - 1);
        }
    }
    const checkNext = () => {
        if(active === (images.length-1)){
            setActive(0);
        }else{
            setActive(active + 1);
        }
    }
    useEffect(() => {
        const interval = setInterval(() => {
            checkNext();
        }, 10000);
      
        return () => {
            clearInterval(interval);
        };
    }, [active]);
    const onSwiped = useSwipeable({
        onSwipedLeft: () => checkNext(),
        onSwipedRight: () => checkPrev()
    })
    return (
        <div {...onSwiped} style={{justifyContent: "center",position: "sticky", width: "100%", marginTop: "0%",height: "auto", backgroundColor: "black", maxHeight: "100vh"}}>
            
            {images.map((image, index) => 
            <motion.div  style={{opacity: index === active ? "1" : "0", width: index === active ? "100%" : "0%", transition: "opacity ease-in-out 0.3s", zIndex: "2",display:"flex", justifyContent: "center", textAlign: "center"}}>
                <img  src={image.slide} alt="main slide" key={index} style={{filter: "brightness(40%)", overflow: "hidden", maxHeight: "100vh", width: "100vw",objectFit: "cover", objectPosition: "top center"}}/>
                <div style={{position: "absolute", zIndex: "3", color: "white", top: "40%",textShadow: "0px 0px 10px #000000d3",width: "50%",height: "auto",lineHeight: "3.0vw", fontSize: "3.5vw", display: "flex", justifyContent: "center", flexDirection: "column"}}>
                    <div>{image.text}</div>
                    <a href="/offer" style={{fontSize: "1.5vw",marginTop: "5%",position: "relative",marginLeft: "15vw", marginRight: "15vw", backgroundColor: "#660101ff", padding: "1.3vw 0.5vw",borderRadius: "10px", boxShadow: "0px 0px 5px 3px #0000008f", color: "white"}}>KLIKNIJ TUTAJ</a>
                </div>
                <div style={{position: 'absolute', left: "0", bottom: "50%", zIndex: "3", marginLeft: "5vw",  display: "flex", cursor: "pointer"}} onClick={checkPrev}><FaAngleLeft size="3vw" color="white"/></div>
            <div style={{position: "absolute", right: "0", bottom: "50%",zIndex: "3", marginRight: "5vw",display: "flex", cursor: "pointer"}} onClick={checkNext}><FaAngleRight size="3vw" color="white"/></div>
            </motion.div>
            )}
            <div style={{position: "absolute", zIndex: "3", justifyContent: "center", width: "100%",display: "flex", bottom: "20px"}}>
            {Array.from({length: images.length}).map((dot, index) => (
                <div style={{width: "0.8vw", height: "0.8vw", borderRadius: "50%", boxShadow: index === active ? "0px 0px 5px 3px #0000008b" : "0px 0px 5px 3px #00000078", backgroundColor: index === active ?"#fffbfb" : "#999898af", margin: "0 15px", }} onClick={() => setActive(index)}/>
            ))}
            </div>
        </div>
    )
}

export default ImageSlider;