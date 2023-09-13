import React from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme";

type MenuPropsType={
    footer?:boolean;
}


export const MenuStyled = (props:MenuPropsType) => {
    if (props.footer===true){
    return (
        <StyledMenuFooter>
            <ul>
                <li><a href={'#'}>Home</a></li>
                <li><a href={'#'}>About</a></li>
                <li><a href={'#'}>Tech Stack</a></li>
                <li><a href={'#'}>Projects</a></li>
                <li><a href={'#'}>Contact</a></li>
            </ul>
        </StyledMenuFooter>
    )
    }
    else {
        return (
            <StyledMenu>
                <ul>
                    <li><a href={'#'}>Home</a></li>
                    <li><a href={'#'}>About</a></li>
                    <li><a href={'#'}>Tech Stack</a></li>
                    <li><a href={'#'}>Projects</a></li>
                    <li><a href={'#'}>Contact</a></li>
                </ul>
            </StyledMenu>
        )
    }
};

const StyledMenu=styled.nav`
  display: flex;
  
ul{
  list-style: none;
  display: flex;
  gap: 55px;
  
}
  a{
    color: ${theme.colors.fontText};
    font-family: 'DM Sans', sans-serif;
    font-weight: 500;
    font-size: 20px;
    line-height: 26px;
  }
  a:hover{
    color: ${theme.colors.fontLinkProject};
    font-weight: 700;
    
  }
  
  @media ${theme.media.tablet}{
    display: none;
  }
  
`

const StyledMenuFooter=styled(StyledMenu)`
  a {
    color: ${theme.colors.fontTitle};
    font-family: 'DM Sans', sans-serif;
    font-weight: 400;
    font-size: 18px;
  }
  
`