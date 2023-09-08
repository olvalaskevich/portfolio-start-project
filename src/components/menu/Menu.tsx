import React from 'react';
import {Networks} from "../networks/Networks";
import {MenuStyled} from "./MenuStyled";
import {FlexWrapper} from "../flexwrapper/FlexWrapper";


export const Menu = () => {
    return (
        <FlexWrapper align={'center'} gap={'50px'}>
            <MenuStyled/>
            <Networks/>
        </FlexWrapper>

    );
};

