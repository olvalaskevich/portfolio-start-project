import React from 'react';
import {FlexWrapper} from "../../../components/flexwrapper/FlexWrapper";
import {StyledTitle2} from "../../../components/titel2styled/Title2.styled";
import styled from "styled-components";
import {Container} from "../../../components/container/Conteiner";
import {theme} from "../../../styles/Theme";

export const Contacts = () => {
    return (
        <StyledContacts>
            <Container>
            <FlexWrapper direction={'column'} align={'center'}>
                <StyledTitle2 size={'58px'} color={`${theme.colors.fontTitleContact}`} family={'DM Sans'} height={'70px'}>
                    For any questions please mail me:
                </StyledTitle2>
                <StyledLink href={'mailto:hi@pavanmg.in'}>hi@pavanmg.in</StyledLink>
            </FlexWrapper>
            </Container>
        </StyledContacts>



    );
};

const StyledContacts=styled.section`
  padding-top: calc(185px - 40px);
  
`
const StyledLink=styled.a`
  font-family: 'DM Sans', sans-serif;
  font-size: 58px;
  font-weight: 700;
  line-height: 70px; 
  letter-spacing: -1px;
  background-image: linear-gradient(to right, ${theme.colors.gradientEnd}, ${theme.colors.gradientMain});
  color: transparent;
  -webkit-background-clip: text;
`


