import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {List} from "./List";

type MenuPropsType={
    footer?:boolean;
}


export const MenuStyled = (props:MenuPropsType) => {
    if (props.footer===true){
    return (
        <StyledMenuFooter>
            <List/>
        </StyledMenuFooter>
    )
    }
    else {
        return (
            <StyledMenu>
                <List/>
            </StyledMenu>
        )
    }
};

const StyledMenu=styled.nav`
  display: flex;
  
 
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