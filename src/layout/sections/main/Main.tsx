import React from 'react';
import photo from '../../../accets/images/photo.jpg'
import {Container} from "../../../components/container/Conteiner";
import {S} from './Main_Styles'


export const Main:React.FC = () => {
    return (
        <S.Main>
            <Container padding={'0 15px'}>
        <S.MainWrapper>
            <S.TextBlock>
                <S.String>Hi 👋,</S.String>
                <S.String>My name is</S.String>

                <S.GradientText>
                 Pavan MG<br/>
                </S.GradientText>

                <S.String>I build things for web</S.String>
            </S.TextBlock>
            <S.Border>
            <S.Photo src={photo} alt='Photo'/>
            </S.Border>
        </S.MainWrapper>
            </Container>
        </S.Main>
    );
};






