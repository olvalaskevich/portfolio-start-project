import styled from "styled-components";


type StyledTextPropsType={
    size?:string;
    color?:string;
    align?:string;
    weight?:string;
    height?:string;
}
export const StyledText=styled.span<StyledTextPropsType>`
  color:  ${props => props.color || '#666'};
  font-size: ${props => props.size || '18'};
  text-align:${props => props.align || 'left'};
  font-weight:${props => props.weight || '400'};
  line-height:${props => props.height || '26px'};
  font-style: normal;
  `