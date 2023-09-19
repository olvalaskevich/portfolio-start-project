import React from 'react';
import {S} from '../Header_Styles'

export const List:React.FC = () => {
    return (
        <S.List>
            <li><a href={'#'}>Home</a></li>
            <li><a href={'#'}>About</a></li>
            <li><a href={'#'}>Tech Stack</a></li>
            <li><a href={'#'}>Projects</a></li>
            <li><a href={'#'}>Contact</a></li>
        </S.List>
    );
};

