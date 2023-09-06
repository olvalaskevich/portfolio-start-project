import React from 'react';
import {MenuStyled} from "../../components/menu/MenuStyled";
import {FlexWrapper} from "../../components/flexwrapper/FlexWrapper";
import {StyledTitle2} from "../../components/titel2styled/Title2.styled";
import {Logo1} from "../../components/logo/Logo1";
import {Networks} from "../../components/networks/Networks";

export const Footer = () => {
    return (
        <footer>
        <FlexWrapper direction={'column'} align={'center'}>
            <StyledTitle2 size={'58px'} color={'#1E0E62'}>
                For any questions please mail me:
            </StyledTitle2>
            <a href={'mailto:hi@pavanmg.in'}>hi@pavanmg.in</a>
        </FlexWrapper>
    <FlexWrapper justify={'space-between'} padding={'180px'}>
        <Logo1/>
        <a>+91 12345 09876</a>
        <a>info@example.com</a>
        <Networks/>
    </FlexWrapper>
        <FlexWrapper justify={'space-around'} align={'center'} padding={'60px'}>
            <MenuStyled/>
            <span>Designed and built by Pavan MG with Love & Coffee</span>
        </FlexWrapper>
        </footer>
    );
};

