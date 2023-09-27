import React from 'react';
import photo from '../../../accets/images/photo.jpg'
import {Container} from "../../../components/container/Conteiner";
import {S} from './Main_Styles';
import Tilt from 'react-parallax-tilt';
import Typewriter from 'typewriter-effect';
import {Fade, Rotate} from "react-awesome-reveal";


export const Main:React.FC = () => {
    return (
        <S.Main id={'home'}>
            <Container padding={'0 15px'}>
        <S.MainWrapper>

            <S.TextBlock>
                <Fade cascade={true}  damping={0.1}>
                <S.String>Hi 👋,</S.String>
                <S.String>My name is</S.String>
                </Fade>
                <S.GradientText>
                    <Typewriter
                        options={{
                            strings: ['Pavan MG'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </S.GradientText>
                <Fade delay={900}>
                    <S.String>I build things for web</S.String>
                </Fade>
            </S.TextBlock>
            <Rotate>
            <Tilt tiltEnable={false} glareEnable={true} glareMaxOpacity={0.8} glareColor="white" glarePosition="all">
            <S.Border>
            <S.Photo src={photo} alt='Photo'/>
            </S.Border>
            </Tilt>
</Rotate>
        </S.MainWrapper>
            </Container>
        </S.Main>
    );
};






