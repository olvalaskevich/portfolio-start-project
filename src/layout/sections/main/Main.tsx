import React from 'react';
import photo from '../../../accets/images/photo.jpg'
import {Container} from "../../../components/container/Conteiner";
import {S} from './Main_Styles';
import Tilt from 'react-parallax-tilt';
import Typewriter from 'typewriter-effect';


export const Main:React.FC = () => {
    return (
        <S.Main>
            <Container padding={'0 15px'}>
        <S.MainWrapper>
            <S.TextBlock>
                <S.String>Hi 👋,</S.String>
                <S.String>My name is</S.String>

                <S.GradientText>
                    <Typewriter
                        options={{
                            strings: ['Pavan MG'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </S.GradientText>

                <S.String>I build things for web</S.String>
            </S.TextBlock>
            <Tilt tiltEnable={false} glareEnable={true} glareMaxOpacity={0.8} glareColor="white" glarePosition="all">
            <S.Border>
            <S.Photo src={photo} alt='Photo'/>
            </S.Border>
            </Tilt>
        </S.MainWrapper>
            </Container>
        </S.Main>
    );
};






