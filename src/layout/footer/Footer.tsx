import React from 'react';
import {MenuStyled} from "../header/menu/MenuStyled";
import {Container} from "../../components/container/Conteiner";
import {Sf} from './Footer_Styles'
import {Fade, Slide} from "react-awesome-reveal";





export const Footer:React.FC<{footer?:boolean}>= () => {
    return (
        <Sf.Footer>
            <Container padding={'0 15px'}>
                <Slide>
            <Sf.Line/>
                </Slide>
        <Sf.FlexFooter>
            <Fade delay={1500}>
                    <MenuStyled footer/>
            <Sf.TextGridFooter>Designed and built by
                <Sf.TextGradient> Pavan MG </Sf.TextGradient>
                with
                <Sf.TextGradient> Love </Sf.TextGradient>
                &
                <Sf.TextGradient> Coffee</Sf.TextGradient>
            </Sf.TextGridFooter>
            </Fade>
        </Sf.FlexFooter>


            </Container>

        </Sf.Footer>
    );
};




