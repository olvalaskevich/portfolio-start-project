import React from 'react';
import {List} from "./List";
import {S} from '../Header_Styles'

type MenuPropsType={
    footer?:boolean;
}


export const MenuStyled:React.FC<{footer?:boolean}>= (props:MenuPropsType) => {
    if (props.footer===true){
    return (
        <S.MenuFooter>
            <List/>
        </S.MenuFooter>
    )
    }
    else {
        return (
            <S.MainMenu>
                <List/>
            </S.MainMenu>
        )
    }
};

