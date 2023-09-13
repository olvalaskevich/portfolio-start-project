import React from 'react';
import styled, {css} from "styled-components";
import Burger from '../../accets/images/burger.svg'
import {theme} from "../../styles/Theme";
import Close from '../../accets/images/close.svg'

export const MenuMobile = () => {
    return (
        <MenuWrapper>


            <MenuMobileStyled isOpen={true}>
                <ul>
                    <li><a href={'#'}>Home</a></li>
                    <li><a href={'#'}>About</a></li>
                    <li><a href={'#'}>Tech Stack</a></li>
                    <li><a href={'#'}>Projects</a></li>
                    <li><a href={'#'}>Contact</a></li>
                </ul>
            </MenuMobileStyled>
            <BurgerButton isOpen={true}></BurgerButton>
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
    
    background-color: ${theme.colors.primaryBg};
    

    ul{
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 20px;

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
    
  `}
`
const BurgerButton=styled.button<{isOpen:boolean}>`

  width: 24px;
  height: 24px;
  background-image: url(${Burger});
  border: none;
  background-color: transparent;
  position: fixed;
  right: 15px;
 
  ${props => props.isOpen && css<{isOpen:boolean}>`
  background-image: url(${Close});
    z-index: 99999;
    
`}
  
`



const MenuWrapper=styled.div`
display: none;
  
  @media ${theme.media.tablet}{
    display: flex;
    
  }
`