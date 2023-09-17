import React from 'react';
import Drawing from '../../../accets/images/drawing1.svg'
import {Experience} from "../../../components/experience/Experience";
import {ButtonExperience} from "../../../components/experience/Education";
import {FlexWrapper} from "../../../components/flexwrapper/FlexWrapper";
import {StyledTitle2} from "../../../components/titel2styled/Title2.styled";
import {StyledText} from "../../../components/titel2styled/Text";
import {Container} from "../../../components/container/Conteiner";
import styled from "styled-components";
import {theme} from "../../../styles/Theme";




export  const About = () => {
    return (
        <StyledAbout>
            <Container padding={'0 15px'}>

                <AboutWrapper>
                    <StyledTextAbout>
                        About Me
                    </StyledTextAbout>
                    <StyledText size={'18px'}>The Generator App is an online tool that helps you to export ready-made templates ready
                        to work as your
                        future website. It helps you to combine slides, panels and other components and export it as a
                        set of
                        static files: HTML/CSS/JS.
                    </StyledText>
                    <StyledTextExperience>
                        Work Experience
                    </StyledTextExperience>
                    <Experience text={'Junior Web Developer'} button={'Full Time'} text1={'Dr. Rajkumar’s Learning App'}
                                text2={'Bengaluru'} text3={'Sep 2021 - Dec 2021'}/>
                    <Experience text={'Web Development Intern'} button={'Internship'} text1={'IonPixelz Web Solutions'}
                                text2={'Bengaluru'} text3={'Sep 2021 - Dec 2021'}/>
                    <Experience text={'SEO / SEM Specialist'} button={'Internship'} text1={'HAAPS'}
                                text2={'Bengaluru'} text3={'Sep 2021 - Dec 2021'}/>
                    <StyledTextEducation>Education</StyledTextEducation>
                    <ButtonExperience text={'Bachelor in Electronics & Communication'} button={'Full Time'}
                                      text1={'Bangalore Instutute of Technology'} text3={'Aug 2015 - Dec 2020'}/>
                </AboutWrapper>

            </Container>
    <StyledDrawing src={Drawing} alt={'Drawing'}/>


        </StyledAbout>
    );
};


const StyledAbout=styled.section`
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

const StyledTextAbout=styled.h2`
  color: ${theme.colors.fontTitle};
  font-size: 42px;
  font-weight: 700;
  line-height: 52px;
  padding-bottom: 38px;
`

const StyledTextExperience=styled(StyledTextAbout)`
padding: 38px 0;
`
const StyledTextEducation=styled(StyledTextExperience)`
padding: 10px 0 30px;
`


const StyledDrawing=styled.img`
position: absolute;
  right: 0;
  top: 727px;
  @media ${theme.media.desktopDrawing}{
  display: none;
  
}
  
`
