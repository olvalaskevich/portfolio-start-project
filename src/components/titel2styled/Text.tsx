import styled from "styled-components";


type StyledTextPropsType={
    size?:string;
    color?:string;
    align?:string;
}
export const StyledText=styled.p<StyledTextPropsType>`
  color:  ${props => props.color || '#666'};
  font-size: ${props => props.size || '18'};
  text-align:${props => props.align || 'left'};
  `