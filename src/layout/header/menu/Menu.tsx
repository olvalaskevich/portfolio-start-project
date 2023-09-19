import React from 'react';
import {Networks} from "../../../components/networks/Networks";
import {MenuStyled} from "./MenuStyled";
import {FlexWrapper} from "../../../components/flexwrapper/FlexWrapper";


export const Menu = () => {
    return (
        <FlexWrapper gap={'55px'} align={'flex-start'}>
            <MenuStyled/>
            <Networks/>
        </FlexWrapper>

    );
};

