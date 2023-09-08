import React from 'react';
import {Menu} from "../../components/menu/Menu";
import styled from "styled-components";
import {Logo1} from "../../components/logo/Logo1";
import {Container} from "../../components/container/Conteiner";
import {FlexWrapper} from "../../components/flexwrapper/FlexWrapper";


export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <FlexWrapper justify={'space-between'} align={'flex-start'}>
                    <Logo1/>
                    <FlexWrapper gap={'55px'} align={'flex-start'} padding={'5px 0px 0px 0px'}>
                        <Menu/>
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </StyledHeader>
    );
};

const StyledHeader=styled.header`
margin-top: 40px;
`

