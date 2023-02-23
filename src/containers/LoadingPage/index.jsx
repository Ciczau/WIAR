import React from "react";
import { ThreeDots } from "react-loader-spinner";
import * as S from './index.styles';

const LoadingPage = () => {
    return(
        <S.Wrapper>
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
        </S.Wrapper>
    );
}

export default LoadingPage;