import React from 'react';
import {MenuStyled} from "../header/menu/MenuStyled";
import {Container} from "../../components/container/Conteiner";
import {Sf} from './Footer_Styles'
import {Fade, Slide} from "react-awesome-reveal";





export const Footer:React.FC<{footer?:boolean}>= () => {
    return (
        <Sf.Footer>
            <Container padding={'0 15px'}>
                <Slide triggerOnce={true}>
            <Sf.Line/>
                </Slide>
        <Sf.FlexFooter>
            <Fade triggerOnce={true}>
                <MenuStyled footer/>
            </Fade>
            <Sf.TextGridFooter>Designed and build by
                <Sf.TextGradient> Olya Valaskevich </Sf.TextGradient>
            </Sf.TextGridFooter>
        </Sf.FlexFooter>
            </Container>
        </Sf.Footer>
    );
};




