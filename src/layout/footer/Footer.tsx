import React from 'react';
import {MenuStyled} from "../../components/menu/MenuStyled";
import {Logo1} from "../../components/logo/Logo1";
import {Networks} from "../../components/networks/Networks";
import {Container} from "../../components/container/Conteiner";
import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {StyledText} from "../../components/titel2styled/Text";




export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
            <StyledLine/>
        <StyledFlexFooter>
                    <MenuStyled footer/>
            <StyledTextGridFooter>Designed and built by
                <StyledTextGradient> Pavan MG </StyledTextGradient>
                with
                <StyledTextGradient> Love </StyledTextGradient>
                &
                <StyledTextGradient> Coffee</StyledTextGradient>
            </StyledTextGridFooter>
        </StyledFlexFooter>


            </Container>

        </StyledFooter>
    );
};


const StyledFooter=styled.section`
  
  padding-bottom: 60px;
  
  

  @media ${theme.media.tablet}{
    padding-top: 0;
    padding-bottom: 20px;
  }
`
const StyledFlexFooter=styled.div`
  display: flex;
  justify-content: space-between;
  
  @media ${theme.media.tablet}{
    justify-content: flex-end;
  }
  
`


const StyledTextGridFooter=styled(StyledText)`
  grid-area: 3/2/4/5;
  justify-self: right;
  
`

const StyledLine=styled.hr`
  max-width: 1190px;
  width: 100%;
  grid-area: 2/1/3/5;
  border: 1px solid ${theme.colors.fontText};
  opacity: 0.3;
  margin-top: 40px;
  margin-bottom: 45px;
`


export const StyledFooterLink=styled.a`
  font-family: 'DM Sans', sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  color: ${theme.colors.fontTitle};
  flex-grow:0.5;
  align-self: center;
`

export const StyledTextGradient=styled(StyledText)`
  background-image: linear-gradient(to right, ${theme.colors.gradientEnd}, ${theme.colors.gradientMain});
  color: transparent;
  -webkit-background-clip: text;
`

