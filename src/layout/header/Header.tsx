import React from 'react';
import {Menu} from "./menu/Menu";
import {Logo1} from "../../components/logo/Logo1";
import {Container} from "../../components/container/Conteiner";
import {FlexWrapper} from "../../components/flexwrapper/FlexWrapper";
import {MenuMobile} from "./mobile/MenuMobile";
import {S} from './Header_Styles'



export const Header: React.FC = () => {
    return (
        <S.Header>
            <Container padding={'0 15px'}>
                <FlexWrapper justify={'space-between'} align={'flex-start'}>
                    <Logo1/>
                    <Menu/>
                    <MenuMobile/>
                </FlexWrapper>
            </Container>
        </S.Header>
    );
};



