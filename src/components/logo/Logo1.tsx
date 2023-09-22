import React from 'react';
import logo1 from '../../accets/images/logo1.svg';
import logo2 from '../../accets/images/logo2.svg';
import {animateScroll as scroll} from "react-scroll";
import styled from "styled-components";
import {theme} from "../../styles/Theme";

type LogoPropsType={
    footer?: boolean;
}



export const Logo1:React.FC<LogoPropsType> = (props:LogoPropsType) => {
    if (props.footer===true){
        return (
            <a onClick={()=>{scroll.scrollToTop()}}><StyledLogo1 src={logo2} alt={"logotype"}/></a>
        )
    }
    else
    {
        return (
            <a onClick={()=>{scroll.scrollToTop()}}><StyledLogo1 src={logo1} alt={"logotype"}/></a>
        );
    }
};

const StyledLogo1=styled.img`
  opacity: 1;
  transition: ${theme.animation.transition};
  &:hover{
    cursor: pointer;
    opacity: 0.4;
    
  }
`