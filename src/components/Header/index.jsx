import React, { useState, useEffect } from "react";
import * as S from "./index.styles";
import Flags from "../Flags";

const Header = ({ readData, windowWidth }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <S.Header>
        <a href="/">
          <S.HomeIcon>
            <i className="home icon"></i>
          </S.HomeIcon>
        </a>
        <S.ItemsWrapper>
          <a href="/us">
            {" "}
            <S.HeaderItem>O&nbsp;NAS</S.HeaderItem>
          </a>
          <a href="/offer">
            {" "}
            <S.HeaderItem>OFERTA</S.HeaderItem>
          </a>
          <a>
            {" "}
            <S.HeaderItem onClick={scrollToBottom}>KONTAKT</S.HeaderItem>
          </a>
        </S.ItemsWrapper>
        <S.ItemsWrapper>
          <S.HeaderItem>
            <S.UserIcon>
              <i className="user outline icon" onClick={() => readData(true)} />
            </S.UserIcon>
          </S.HeaderItem>
          {windowWidth > 800 && (
            <S.HeaderFlags>
              <Flags />
            </S.HeaderFlags>
          )}{" "}
        </S.ItemsWrapper>
      </S.Header>
      {scrollPosition > 170 && (
        <S.Header
          style={{ position: "fixed", top: "0", backdropFilter: "blur(2px)" }}
        >
          <a href="/">
            <S.HomeIcon>
              <i className="home icon"></i>
            </S.HomeIcon>
          </a>
          <div style={{ display: "flex" }}>
            <a href="/us">
              {" "}
              <S.HeaderItem>O&nbsp;NAS</S.HeaderItem>
            </a>
            <a href="/offer">
              {" "}
              <S.HeaderItem>OFERTA</S.HeaderItem>
            </a>
            <a>
              {" "}
              <S.HeaderItem onClick={scrollToBottom}>KONTAKT</S.HeaderItem>
            </a>
          </div>
          <div style={{ display: "flex" }}>
            <S.HeaderItem>
              <S.UserIcon>
                <i
                  className="user outline icon"
                  onClick={() => readData(true)}
                />
              </S.UserIcon>
            </S.HeaderItem>
            {windowWidth > 800 && (
              <S.HeaderFlags>
                <Flags />
              </S.HeaderFlags>
            )}{" "}
          </div>
        </S.Header>
      )}
    </>
  );
};
export default Header;
