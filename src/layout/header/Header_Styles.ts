import styled, {css} from "styled-components";
import {theme} from "../../styles/Theme";
import {FlexWrapper} from "../../components/flexwrapper/FlexWrapper";
import Burger from '../../accets/images/burger.svg';
import Close from '../../accets/images/close.svg'


const Header=styled.header`
  margin-top: 45px;
 
  ${FlexWrapper}{
    @media ${theme.media.tablet}{
      justify-content: start;
      gap:40px;
      
    }
  }
`

const List=styled.ul`
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

const MainMenu=styled.nav`
  display: flex;
  
 
  @media ${theme.media.tablet}{
    display: none;
  }

 
  
`

const MenuFooter=styled(MainMenu)`
  a {
    color: ${theme.colors.fontTitle};
    font-family: 'DM Sans', sans-serif;
    font-weight: 400;
    font-size: 18px;
  }

`

const MenuWrapper=styled.div`
display: none;
  
  @media ${theme.media.tablet}{
    display: flex;
    
  }
`

const MenuMobile=styled.div<{isOpen:boolean}>`
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
const Network=styled.div`
display: flex;
  align-items: center;
  gap: 20px;
  justify-self: right;
  align-self: center;

`


export const S={
    Header,
    List,
    MainMenu,
    MenuFooter,
    MenuMobile,
    MenuWrapper,
    BurgerButton,
    Network,
}