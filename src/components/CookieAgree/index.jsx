import React, { useState } from "react";
import * as S from './index.styles';

const CookieAgree = () => {
    const [close, setClose] = useState(false);
    const [showMore, setShowMore] = useState(false);
    const handleClick = () => {
        setShowMore(current => !current);
    }
    return (
        <>
            {!close && (
            <S.Footer>
                Korzystając ze strony zgadzasz się na używanie plików cookies <S.ReadMore   onMouseEnter={() => setShowMore(true)} onMouseLeave={() => setShowMore(false)} onClick={handleClick}>Czytaj więcej</S.ReadMore>
                {showMore && (
                    <S.MoreWrapper>
                        Pliki cookies na tej stronie są wykorzystywanie <br/>do przechowywanie danych na temat sesji logowania.<br/>
                    </S.MoreWrapper>
                )}
                <S.Button onClick={() => setClose(true)}>
                    ZAMKNIJ
                </S.Button>
            </S.Footer>
            )}
        </>
    )
}

export default CookieAgree;