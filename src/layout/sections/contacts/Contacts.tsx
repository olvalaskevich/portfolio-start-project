import React from 'react';
import {FlexWrapper} from "../../../components/flexwrapper/FlexWrapper";
import {Logo1} from "../../../components/logo/Logo1";
import {Networks} from "../../../components/networks/Networks";
import {StyledTitle2} from "../../../components/titel2styled/Title2.styled";
import styled from "styled-components";

export const Contacts = () => {
    return (
        <>
        <FlexWrapper direction={'column'} align={'center'}>
            <StyledTitle2 size={'58px'} color={'#1E0E62'}>
                For any questions please mail me:
            </StyledTitle2>
            <a href={'mailto:hi@pavanmg.in'}>hi@pavanmg.in</a>
        </FlexWrapper>
            <FlexWrapper justify={'space-between'} padding={'180px'}>
                <Logo1/>
                <span>+91 12345 09876</span>
                <span>info@example.com</span>
                <Networks/>
            </FlexWrapper>
        </>



    );
};

const StyledLink=styled.a``


const StyledTextContsct=styled.span``