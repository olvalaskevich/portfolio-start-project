import React from 'react';
import {Networks} from "../networks/Networks";
import {MenuStyled} from "./MenuStyled";
import {FlexWrapper} from "../flexwrapper/FlexWrapper";


export const Menu = () => {
    return (
        <FlexWrapper gap={'55px'} align={'flex-start'} padding={'5px 0px 0px 0px'}>
            <MenuStyled/>
            <Networks/>
        </FlexWrapper>

    );
};

