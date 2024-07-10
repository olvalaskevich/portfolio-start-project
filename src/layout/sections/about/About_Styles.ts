import styled from "styled-components";
import {theme} from "../../../styles/Theme";


// From FC About


const About=styled.section`
  margin-top: calc(200px - 110px);
  position: relative;
  background-color: ${theme.colors.secondaryBg};
  cursor:default;
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
  margin-top: 40px;
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
  top: -140px;
  z-index: 999;
  @media ${theme.media.desktopDrawing}{
  display: none;
  
} 
`


// From FC Experience


const Grid=styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(270px, auto));
  grid-template-rows: auto;
  justify-items: start;
`

const Info=styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  
`

const TitleExperience=styled.h1`
  font-size: 20px;
  line-height: 31px;
  color: #666;
  font-weight: 400;
  letter-spacing: 1px
`

const Text=styled.span`
  color: ${theme.colors.fontSmallAbout};
  font-size: 12px;
  //line-height: 28px;
  font-weight: 500;
  letter-spacing: 1px;
  }
`
const Button=styled.button`
  background-color: ${theme.colors.buttonSuccess};
  width: 84px;
  height: 24px;
  border-radius: 100px;
  color: ${theme.colors.buttonText};
  border: none;
  font-size: 9px;
  font-style: normal;
  font-weight: 600;
  line-height: 26px;
  text-align: center;
  
`

const LineAbout=styled.hr`
  max-width: 700px;
  width: 100%;
  border: 1px solid ${theme.colors.fontText};
  opacity: 0.3;
  margin-top: 17px;
  margin-bottom: 30px;
`


// From FC Education


const GridEducation=styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(270px, auto));
  grid-template-rows: auto; 
`

export const S={
    About,
    AboutWrapper,
    TextAbout,
    TextExperience,
    TextEducation,
    Drawing,
    Grid,
    Info,
    TitleExperience,
    Text,
    Button,
    LineAbout,
    GridEducation
}