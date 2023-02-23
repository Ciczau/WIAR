import React from "react";
import video from '../../images/video.mp4';
import * as S from './index.styles';

const Background = ({windowWidth, videoRef}) => {
    return (
        <S.Wrapper>
            {windowWidth > 8000 ? (
                    <S.Video  
                        ref={videoRef} 
                        autoPlay muted loop
                        src={video} type="video/mp4"
                        onLoadedData={() => {console.log(window.location.pathname)}}
                 />
            ) : (
                <S.Wrapper>
                    <S.StyledBackground/>
                </S.Wrapper>
            )}
        </S.Wrapper>
    )
}

export default Background;