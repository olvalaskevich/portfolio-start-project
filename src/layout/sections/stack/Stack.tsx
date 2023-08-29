import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";
import {FlexWrapper} from "../../../components/flexwrapper/FlexWrapper";

export const Stack = () => {
    return (
        <FlexWrapper direction={'column'}>
            <StyledSecondTitle>My Tech Stack</StyledSecondTitle>
            <StyledThirdTitle>Technologies I’ve been working with recently</StyledThirdTitle>
<FlexWrapper justify={'space-around'} align={'center'} wrap={'wrap'} padding={'177px'}>
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
</FlexWrapper>
        </FlexWrapper>
    );
};


const StyledSecondTitle=styled.h2`
  color: #42446E;
  font-size: 48px;
  line-height: 26px;
  text-align: center;
`

const StyledThirdTitle=styled.h3`
  color: #666;
  font-size: 32px;
  line-height: 26px;
  text-align: center;
`
