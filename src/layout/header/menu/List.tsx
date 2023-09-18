import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";

export const List = () => {
    return (
        <StyledList>
            <li><a href={'#'}>Home</a></li>
            <li><a href={'#'}>About</a></li>
            <li><a href={'#'}>Tech Stack</a></li>
            <li><a href={'#'}>Projects</a></li>
            <li><a href={'#'}>Contact</a></li>
        </StyledList>
    );
};

const StyledList=styled.ul`
  list-style: none;
  display: flex;
  gap: 55px;

  a{
    color: ${theme.colors.fontText};
    font-family: 'DM Sans', sans-serif;
    font-weight: 500;
    font-size: 20px;
    line-height: 26px;
  }
  a:hover{
    color: ${theme.colors.primaryBg};
    font-weight: 800;
    background-color: ${theme.colors.fontLinkProject};
    border-radius: 10px;

  }
`