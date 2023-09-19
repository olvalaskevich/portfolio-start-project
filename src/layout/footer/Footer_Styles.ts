import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {StyledText} from "../../components/titel2styled/Text";


const Footer=styled.section`
  
  padding-bottom: 60px;

  @media ${theme.media.tablet}{
    padding-top: 0;
    padding-bottom: 20px;
  }
`
const FlexFooter=styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media ${theme.media.tablet}{
    justify-content: center;
  }

  @media ${theme.media.desktop} {
  flex-direction:column;
    align-items: center;
  }
`

const TextGridFooter=styled(StyledText)`
  text-align: center;
  color: ${theme.colors.fontText};
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  @media ${theme.media.desktop}{
    padding-top: 50px;   
  }
`

const Line=styled.hr`
  max-width: 1190px;
  width: 100%;
  grid-area: 2/1/3/5;
  border: 1px solid ${theme.colors.fontText};
  opacity: 0.3;
  margin-top: 40px;
  margin-bottom: 45px;
`
const FooterLink=styled.a`
  font-family: 'DM Sans', sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 26px;
  color: ${theme.colors.fontTitle};
  flex-grow:0.2;
  align-self: center;
`
const TextGradient=styled(StyledText)`
  background-image: linear-gradient(to right, ${theme.colors.gradientEnd}, ${theme.colors.gradientMain});
  color: transparent;
  -webkit-background-clip: text;
`
export const Sf={
    Footer,
    FlexFooter,
    TextGridFooter,
    Line,
    FooterLink,
    TextGradient
}
