import React from 'react';
import photo from '../../../accets/images/photo.jpg'
import styled from "styled-components";
import {Container} from "../../../components/container/Conteiner";
import {theme} from "../../../styles/Theme";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
        <MainWrapper>
            <StyledTextBlock>
                <StyledString>Hi 👋,</StyledString>
                <StyledString>My name is</StyledString>

                <StyledGradientText>
                 Pavan MG<br/>
                </StyledGradientText>

                <StyledString>I build things for web</StyledString>
            </StyledTextBlock>
            <StyledBorder>
            <StyledPhoto src={photo} alt='Photo'/>
            </StyledBorder>
        </MainWrapper>
            </Container>
        </StyledMain>
    );
};

const MainWrapper=styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  
  @media ${theme.media.mobile}{
    flex-wrap: wrap-reverse;
    justify-content: center;
    align-items: center;
  }
`

const StyledPhoto=styled.img`
  width: calc(100% - 9px);
  height: calc(100% - 9px);
  border-radius: 50%;
  object-fit: cover;
  
`

const  StyledBorder=styled.div`
  width: 359px;
  height: 359px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(${theme.colors.gradientMain}, ${theme.colors.gradientEnd});
  border-radius: 50%;
  flex-shrink: 0;

  @media ${theme.media.mobile}{
    width: 300px;
    height: 300px;
  }
`

const StyledGradientText=styled.span`
  display: block;
  color: transparent;
  
`
const StyledString=styled.span`
  display: block;
  @media ${theme.media.mobile}{
  display: inline;
}
  
  `

const StyledMain=styled.section`
  margin-top: 220px;
  @media ${theme.media.mobile}{
    margin-top: 50px;
  }
  
`
const StyledTextBlock=styled.div`
  width: 635px;
  height: 300px;
  color: ${theme.colors.fontTitle};
  font-family: 'Poppins', sans-serif;
  font-size: calc((100vw - 360px)/(1300 - 360) * (58 - 30) + 30px);
  font-style: normal;
  font-weight: 700;
  line-height: 70px;
  letter-spacing: -1px;
  background: linear-gradient(to right, ${theme.colors.gradientStart}, ${theme.colors.gradientMain});
  -webkit-background-clip: text;
  white-space: break-spaces;

  @media ${theme.media.mobile}{
    text-align: center;
  }
`




