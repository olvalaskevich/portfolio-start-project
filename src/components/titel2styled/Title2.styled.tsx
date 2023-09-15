import styled from "styled-components";
import {theme} from "../../styles/Theme";


type StyledTextPropsType={
    size?:string;
    color?:string;
    align?:string;
    weight?:string;
    height?:string;
    family?:string;
}


export const StyledTitle2=styled.h2<StyledTextPropsType>`
  font-size: ${props => props.size || '42px'};
  color: ${props => props.color || '#42446E'};
  text-align: ${props => props.align || 'left'};
  font-weight: ${props => props.weight || '700'};
  line-height: ${props => props.height || '52px'};
  font-family: ${props => props.family};
  font-style: normal;
  padding: 40px 0;

  @media ${theme.media.tablet}{
    padding: 0 0 40px;
    text-align: center;
  }

  @media ${theme.media.desktopBig}{
    font-size: 48px;
  }
`


