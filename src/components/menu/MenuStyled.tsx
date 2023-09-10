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
                <li>Home</li>
                <li>About</li>
                <li>Tech Stack</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </StyledMenuFooter>
    )
    }
    else {
        return (
            <StyledMenu>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Tech Stack</li>
                    <li>Projects</li>
                    <li>Contact</li>
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
  font-family: 'DM Sans', sans-serif;
  color: ${theme.colors.fontText};
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
}
`

const StyledMenuFooter=styled(StyledMenu)`
ul{
  color: ${theme.colors.fontTitle};
}
`