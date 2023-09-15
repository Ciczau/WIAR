import React from "react";
import { useState } from "react";
import Captcha from "../Captcha";
import * as S from "./index.styles";

const Confirmation = (props) => {
  const onKeyUp = (e) => {
    if (e.key === "Enter") {
      props.handleClick(e);
    }
  };

  return (
    <S.Wrapper>
      <S.Icon className="cancel icon" onClick={() => props.setSeen(false)} />
      {!props.success ? (
        <>
          <div>Czy na pewno chcesz skorzystać z tej usługi?</div>
          <S.TextArea
            type="textarea"
            placeholder="Komentarz do zamówienia"
            maxLength="254"
            onChange={(e) => props.readSubmit(e.target.value)}
            onKeyPress={onKeyUp}
          />
          <br />
          <S.CaptchaWraper>
            <Captcha valid={props.valid} />
          </S.CaptchaWraper>
          <S.Button onClick={props.handleClick}>Potwierdzam</S.Button>
        </>
      ) : (
        <S.Summary>
          Zamówienie zostało złożone!
          <br />
          Dziękujemy!
        </S.Summary>
      )}
    </S.Wrapper>
  );
};

export default Confirmation;
