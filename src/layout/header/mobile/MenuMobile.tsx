import React from 'react';
import {List} from "../menu/List";
import {S} from '../Header_Styles'

export const MenuMobile:React.FC = () => {
    return (
        <S.MenuWrapper>


            <S.MenuMobile isOpen={false}>
                <List/>
            </S.MenuMobile>
            <S.BurgerButton isOpen={false}></S.BurgerButton>
        </S.MenuWrapper>
    );
};



