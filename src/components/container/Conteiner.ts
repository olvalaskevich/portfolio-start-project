import styled from "styled-components";
import {theme} from "../../styles/Theme";


export const Container=styled.div`
  max-width: 1190px;
  width: 100%;
  min-height: 100%;
  margin: 0 auto;

  @media ${theme.media.tablet}{
    padding: 15px;
    
  }
`