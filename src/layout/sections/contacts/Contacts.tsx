import React from 'react';
import {FlexWrapper} from "../../../components/flexwrapper/FlexWrapper";
import {StyledTitle2} from "../../../components/titel2styled/Title2.styled";
import styled from "styled-components";
import {Container} from "../../../components/container/Conteiner";
import {theme} from "../../../styles/Theme";
import {Logo1} from "../../../components/logo/Logo1";
import {Networks} from "../../../components/networks/Networks";
import {StyledFooterLink} from "../../footer/Footer";


export const Contacts = () => {
    return (
        <StyledContacts>
            <Container padding={'0 15px'}>
            <FlexWrapper direction={'column'} align={'center'}>
                <StyledTitle2 padding={'38px 0 10px'} size={'calc((100vw - 360px)/(1600 - 360) * (58 - 30) + 30px)'} color={`${theme.colors.fontTitleContact}`} family={'DM Sans'} height={'70px'}>
                    For any questions please mail me:
                </StyledTitle2>
                <StyledLink href={'mailto:hi@pavanmg.in'}>hi@pavanmg.in</StyledLink>

                <StyledContactsAdaptive>
                    <LogoAdaptive>
                        <Logo1 footer/>
                    </LogoAdaptive>
                    <StyledFooterLink>+91 12345 09876</StyledFooterLink>
                    <StyledFooterLink>info@example.com</StyledFooterLink>
                    <Networks footer/>
                </StyledContactsAdaptive>

            </FlexWrapper>
            </Container>
        </StyledContacts>



    );
};

const StyledContacts=styled.section`
  padding-top: calc(185px - 30px);
  

  @media ${theme.media.tablet}{
    padding-top: 60px;
  
  }
  
`

const StyledContactsAdaptive=styled.div`
  
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-top: 215px;
   
  
  @media ${theme.media.tablet}{
    flex-direction: column;
    justify-content: center;
    gap :40px;
    padding-top: 40px;
  }
`

const LogoAdaptive=styled.div`
  display: flex;
  flex-grow:1;
  @media ${theme.media.tablet}{
    display: none;
  }
`

const StyledLink=styled.a`
  font-family: 'DM Sans', sans-serif;
  font-size: calc((100vw - 360px)/(1600 - 360) * (58 - 30) + 30px);
  font-weight: 700;
  line-height: 70px; 
  letter-spacing: -1px;
  background-image: linear-gradient(to right, ${theme.colors.gradientEnd}, ${theme.colors.gradientMain});
  color: transparent;
  -webkit-background-clip: text;

  @media ${theme.media.desktopBig}{
    font-size: 58px;
  }
`


