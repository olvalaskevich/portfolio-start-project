import React from 'react';
import {MenuStyled} from "../../components/menu/MenuStyled";
import {Logo1} from "../../components/logo/Logo1";
import {Networks} from "../../components/networks/Networks";
import {Container} from "../../components/container/Conteiner";
import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {StyledText} from "../../components/titel2styled/Text";
import {StyledGrid} from "../../components/experience/Experience";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
        <StyledGridFooter>
        <Logo1 footer/>
        <StyledFooterLink>+91 12345 09876</StyledFooterLink>
        <StyledFooterLink>info@example.com</StyledFooterLink>
        <Networks footer/>
        <StyledLine/>



                    <MenuStyled footer/>
            <StyledTextGridFooter>Designed and built by
                <StyledTextGradient> Pavan MG </StyledTextGradient>
                with
                <StyledTextGradient> Love </StyledTextGradient>
                &
                <StyledTextGradient> Coffee</StyledTextGradient>
            </StyledTextGridFooter>
        </StyledGridFooter>

            </Container>
        </StyledFooter>
    );
};



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


const StyledGridFooter=styled(StyledGrid)`
  grid-template-columns: repeat(4, auto);
  grid-auto-rows: auto;
  justify-items: start;
`

const StyledFooter=styled.section`
  padding-top: 200px;
  padding-bottom: 60px;
  
`

const StyledFooterLink=styled.a`
  font-family: 'DM Sans', sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  color: ${theme.colors.fontTitle};
`
const StyledTextGradient=styled(StyledText)`
  background-image: linear-gradient(to right, ${theme.colors.gradientEnd}, ${theme.colors.gradientMain});
  color: transparent;
  -webkit-background-clip: text;
`