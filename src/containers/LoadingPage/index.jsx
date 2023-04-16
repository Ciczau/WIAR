import React from "react";
import { ThreeDots } from "react-loader-spinner";
import * as S from './index.styles';

const LoadingPage = () => {
    return(
        <S.Wrapper>
            Strona chwilowo nieczynna
            <ThreeDots
                    height={80}
                    width={80}
                    color="#ffffff"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel='oval-loading'
                    secondaryColor="#8f8f8f"
                    strokeWidth={2}
                    strokeWidthSecondary={2}
            />          
            Wrócimy do was wkrótce!
        </S.Wrapper>
    );
}

export default LoadingPage;