import React from 'react';
import {Menu} from "../../components/menu/Menu";
import styled from "styled-components";
import {Logo1} from "../../components/logo/Logo1";

export const Header = () => {
    return (
        <StyledHeader>
        <Logo1/>
        <Menu/>
        </StyledHeader>
    );
};

const StyledHeader=styled.header`
  background-color: #4efee4;
`

