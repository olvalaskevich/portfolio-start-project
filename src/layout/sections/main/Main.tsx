import React from 'react';
import photo from '../../../accets/images/photo.jpg'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/flexwrapper/FlexWrapper";
import {Container} from "../../../components/container/Conteiner";
import {theme} from "../../../styles/Theme";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
        <FlexWrapper justify={'space-between'} align={'center'}>
            <StyledTextBlock>
                Hi 👋,<br/>
                My name is<br/>

                <StylesGradientText>
                Pavan MG<br/>
                </StylesGradientText>

                I build things for web
            </StyledTextBlock>
            <StyledBorder>
            <StyledPhoto src={photo} alt='Photo'/>
            </StyledBorder>
        </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledPhoto=styled.img`
  width: calc(100% - 9px);
  height: calc(100% - 9px);
  border-radius: 50%;
  object-fit: cover;
  aspect-ratio: auto;
`

const  StyledBorder=styled.div`
  width: 359px;
  height: 359px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(${theme.colors.gradientMain}, ${theme.colors.gradientEnd});
  border-radius: 50%;
`

const StylesGradientText=styled.span`
  color: transparent;
`

const StyledMain=styled.section`
  margin-top: 220px;
`
const StyledTextBlock=styled.div`
  width: 635px;
  height: 300px;
  color: ${theme.colors.fontTitle};
  font-family: 'Poppins', sans-serif;
  font-size: 58px;
  font-style: normal;
  font-weight: 700;
  line-height: 70px;
  letter-spacing: -1px;
  background: linear-gradient(to right, ${theme.colors.gradientStart}, ${theme.colors.gradientMain});
  -webkit-background-clip: text;
`




