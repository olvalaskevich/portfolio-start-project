import styled from "styled-components";
import {theme} from "../../styles/Theme";



type ContainerPropsType={
    padding?:string;
}

export const Container=styled.div<ContainerPropsType> `
  max-width: 1193px;
  width: 100%;
  min-height: 100%;
  margin: 0 auto;
  padding: ${props => props.padding||0};
  
  @media ${theme.media.tablet}{
    padding: ${props => props.padding||'15px'};
    
  }
`