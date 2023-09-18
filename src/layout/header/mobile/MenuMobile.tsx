import React from 'react';
import styled, {css} from "styled-components";
import Burger from '../../../accets/images/burger.svg'
import {theme} from "../../../styles/Theme";
import Close from '../../../accets/images/close.svg'
import {List} from "../menu/List";

export const MenuMobile = () => {
    return (
        <MenuWrapper>


            <MenuMobileStyled isOpen={false}>
                <List/>
            </MenuMobileStyled>
            <BurgerButton isOpen={false}></BurgerButton>
        </MenuWrapper>
    );
};


const MenuMobileStyled=styled.div<{isOpen:boolean}>`
display: none;
  
  ${props => props.isOpen && css<{isOpen:boolean}> `
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    

    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background-color: ${theme.colors.secondaryBg};
    opacity: 0.95;


    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 20px;

    }

    a {
      display: inline-block;
      font-size: 30px;
      padding: 20px;

    }

    a:hover {
      color: ${theme.colors.primaryBg};
      font-weight: 800;
      background-color: ${theme.colors.fontLinkProject};
      border-radius: 10px;
    }

  `}
`
const BurgerButton=styled.button<{isOpen:boolean}>`

  width: 24px;
  height: 24px;
  background-image: url(${Burger});
  border: none;
  background-color: transparent;
  position: absolute;
  right: 30px;
 
  ${props => props.isOpen && css<{isOpen:boolean}>`
  background-image: url(${Close});
  position: fixed;
    
`}
  
`

const MenuWrapper=styled.div`
display: none;
  
  @media ${theme.media.tablet}{
    display: flex;
    
  }
`