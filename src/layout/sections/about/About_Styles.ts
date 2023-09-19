import styled from "styled-components";
import {theme} from "../../../styles/Theme";


const About=styled.section`
  margin-top: calc(200px - 26px);
  @media ${theme.media.mobile}{
    display: none;

  }
`

const AboutWrapper=styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;
  

  @media ${theme.media.desktopDrawing}{
    margin: 0 auto;
  }
  
`

const TextAbout=styled.h2`
  color: ${theme.colors.fontTitle};
  font-size: 42px;
  font-weight: 700;
  line-height: 52px;
  padding-bottom: 38px;
`

const TextExperience=styled(TextAbout)`
padding: 38px 0;
`

const TextEducation=styled(TextExperience)`
padding: 10px 0 30px;
`

const Drawing=styled.img`
position: absolute;
  right: 0;
  top: 727px;
  @media ${theme.media.desktopDrawing}{
  display: none;
  
}
  
`

export const S={
    About,
    AboutWrapper,
    TextAbout,
    TextExperience,
    TextEducation,
    Drawing
}