import React, {useState} from 'react';
import {List} from "../menu/List";
import {S} from '../Header_Styles'

export const MenuMobile:React.FC = () => {
    const[menuIsOpen, setMenuIsOpen]=useState(false)
    const onBurgerBtnClick= () => {setMenuIsOpen(!menuIsOpen)}

    return (
        <S.MenuWrapper>
            <S.MenuMobile isOpen={menuIsOpen} onClick={()=>{setMenuIsOpen(false)}}>
                <List/>
            </S.MenuMobile>
            <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}></S.BurgerButton>
        </S.MenuWrapper>
    );
};



