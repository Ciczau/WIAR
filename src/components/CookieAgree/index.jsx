import React, { useState } from "react";
import { useCookies } from "react-cookie";
import * as S from './index.styles';

const CookieAgree = () => {
    const [close, setClose] = useState(false);
    const [showMore, setShowMore] = useState(false);
    const [cookie, setCookies] = useCookies(['cookieaccept']);
    const handleClick = () => {
        setShowMore(current => !current);
    }
    const closeAlert = () => {
        let date = new Date();
        date.setTime(date.getTime() + 24 * 60 * 60 * 1000 * 365);
        setCookies('cookieaccept', 'ok', {path: '/', expires: date });
        setClose(true);
    }
    return (
        <>
        {!cookie.cookieaccept && (
            <>
            {!close && (
            <S.Footer>
                Korzystając ze strony zgadzasz się na używanie plików cookies <S.ReadMore   onMouseEnter={() => setShowMore(true)} onMouseLeave={() => setShowMore(false)} onClick={handleClick}>Czytaj więcej</S.ReadMore>
                {showMore && (
                    <S.MoreWrapper>
                        Pliki cookies na tej stronie są wykorzystywanie <br/>do przechowywanie danych na temat sesji logowania.<br/>
                    </S.MoreWrapper>
                )}
                <S.Button onClick={closeAlert}>
                    ZAMKNIJ
                </S.Button>
            </S.Footer>
            )}
            </>
        )}
        </>
    )
}

export default CookieAgree;