import styled from "styled-components";


type StyledTextPropsType={
    sizetitle?:string;
    colortitle?:string;
    aligntitle?:string;
    sizep?:string;
    colorp?:string;
    alignp?:string;
}


export const StyledTitle2=styled.h2<StyledTextPropsType>`
  color: ${props => props.sizetitle || '42px'};
  font-size: ${props => props.colortitle || '#42446E'};
  text-align: ${props => props.colortitle || 'left'};
`

export const StyledParagraph=styled.p<StyledTextPropsType>`
  color:  ${props => props.colorp || '#666'};
  font-size: ${props => props.sizep || '18'};
  text-align:${props => props.alignp || 'left'};
`