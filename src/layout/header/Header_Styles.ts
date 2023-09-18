import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {FlexWrapper} from "../../components/flexwrapper/FlexWrapper";


const Header=styled.header`
  margin-top: 45px;
 
  ${FlexWrapper}{
    @media ${theme.media.tablet}{
      justify-content: start;
      gap:40px;
      
    }
  }
`

export const S={
    Header
}