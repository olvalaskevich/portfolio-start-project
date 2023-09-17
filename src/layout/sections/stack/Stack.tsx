import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";
import {FlexWrapper} from "../../../components/flexwrapper/FlexWrapper";
import {Container} from "../../../components/container/Conteiner";
import {StyledTitle2} from "../../../components/titel2styled/Title2.styled";
import {theme} from "../../../styles/Theme";

export const Stack = () => {
    return (
        <StyledStack>
            <Container padding={'0 15px'}>
        <FlexWrapper direction={'column'}>
            <StyledTitle2 size={'calc((100vw - 360px)/(1600 - 360) * (48 - 30) + 30px)'} height={'26px'} align={'center'}>My Tech Stack</StyledTitle2>
            <StyledThirdTitle>Technologies I’ve been working with recently</StyledThirdTitle>
            <StyledGridStack>
    <Icon iconId={'html'} width={'120px'} height={'120px'} viewBox={'0 0 120 120'}/>
    <Icon iconId={'css'} width={'120px'} height={'120px'} viewBox={'0 0 120 120'}/>
    <Icon iconId={'js'} width={'120px'} height={'120px'} viewBox={'0 0 120 120'}/>
    <Icon iconId={'react'} width={'113px'} height={'101px'} viewBox={'0 0 113 101'}/>
    <Icon iconId={'vector'} width={'105px'} height={'100px'} viewBox={'0 0 105 100'}/>
    <Icon iconId={'bootstrap'} width={'88px'} height={'87px'} viewBox={'0 0 88 87'}/>
    <Icon iconId={'tailwind'} width={'131px'} height={'131px'} viewBox={'0 0 131 131'}/>
    <Icon iconId={'sass'} width={'117px'} height={'87px'} viewBox={'0 0 117 87'}/>
    <Icon iconId={'skills1'} width={'105px'} height={'105px'} viewBox={'0 0 105 105'}/>
    <Icon iconId={'greensock'} width={'120px'} height={'120px'} viewBox={'0 0 120 120'}/>
    <Icon iconId={'vscode'} width={'112px'} height={'112px'} viewBox={'0 0 112 112'}/>
    <Icon iconId={'project1'} width={'88px'} height={'88px'} viewBox={'0 0 88 88'}/>
            </StyledGridStack>
        </FlexWrapper>
            </Container>
        </StyledStack>
    );
};

const StyledGridStack=styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 80px;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding-top: 124px;
  
  @media ${theme.media.tablet}{
    padding-top: 60px;
  }
  @media ${theme.media.mobile}{
    gap: 50px;
  }
`

export const StyledThirdTitle=styled.h3`
  color: ${theme.colors.fontText};
  font-size: calc((100vw - 360px)/(1600 - 360) * (32 - 20) + 20px);
  font-weight: 400;
  line-height: 26px;
  text-align: center;
  padding-top: 10px;

  @media ${theme.media.desktopBig}{
    font-size: 32px;
  }
`
const StyledStack=styled.section`
  margin-top: calc(200px - 65px);
  @media ${theme.media.mobile}{
    margin-top: 0;
  }
`
