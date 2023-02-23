import React from 'react';
import { useState } from 'react';
import ang from '../../images/ang.png';
import pl from '../../images/pl.png';
import * as S from './index.styles';
const Flags = () => {
    const [pop, setPop] = useState(false);
    return (
        <div>
            <img src={pl} width="20" height="20"/>
            <img src={ang} width="20" height="20" style={{marginLeft: "5px", opacity: "0.3"}} onMouseEnter={() => setPop(true)} onMouseLeave={() => setPop(false)}/>
            {pop && (
                <S.InformationWrapper>
                    This option is not available yet.
                </S.InformationWrapper>
            )}
        </div>
    );
};

export default Flags;