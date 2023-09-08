import React from 'react';
import {MenuStyled} from "../../components/menu/MenuStyled";
import {FlexWrapper} from "../../components/flexwrapper/FlexWrapper";
import {StyledTitle2} from "../../components/titel2styled/Title2.styled";
import {Logo1} from "../../components/logo/Logo1";
import {Networks} from "../../components/networks/Networks";
import {Container} from "../../components/container/Conteiner";

export const Footer = () => {
    return (
        <footer>
            <Container>
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
            </Container>
        </footer>
    );
};

