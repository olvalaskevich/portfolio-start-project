import styled from "styled-components";


type StyledTextPropsType={
    size?:string;
    color?:string;
    align?:string;
}


export const StyledTitle2=styled.h2<StyledTextPropsType>`
  color: ${props => props.size || '42px'};
  font-size: ${props => props.color || '#42446E'};
  text-align: ${props => props.align || 'left'};
`


