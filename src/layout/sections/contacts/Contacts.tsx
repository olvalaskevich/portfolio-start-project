import React from 'react';
import {FlexWrapper} from "../../../components/flexwrapper/FlexWrapper";
import {Logo1} from "../../../components/logo/Logo1";
import {Networks} from "../../../components/networks/Networks";
import {StyledTitle2} from "../../../components/titel2styled/Title2.styled";
import styled from "styled-components";
import {Container} from "../../../components/container/Conteiner";

export const Contacts = () => {
    return (
        <section>
            <Container>
            <FlexWrapper direction={'column'} align={'center'}>
                <StyledTitle2 size={'58px'} color={'#1E0E62'}>
                    For any questions please mail me:
                </StyledTitle2>
                <a href={'mailto:hi@pavanmg.in'}>hi@pavanmg.in</a>
            </FlexWrapper>
            </Container>
        </section>



    );
};

const StyledLink=styled.a``


const StyledTextContsct=styled.span``