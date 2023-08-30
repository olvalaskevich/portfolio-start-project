import React from 'react';
import {MenuStyled} from "../../components/menu/MenuStyled";
import {FlexWrapper} from "../../components/flexwrapper/FlexWrapper";

export const Footer = () => {
    return (
        <FlexWrapper justify={'space-around'} align={'center'} padding={'60px'}>
            <MenuStyled/>
            <span>Designed and built by Pavan MG with Love & Coffee</span>
        </FlexWrapper>
    );
};

