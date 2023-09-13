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
            <Container>

                <FlexWrapper direction={'column'} width={'700px'}>
                    <StyledTitle2 color={`${theme.colors.fontTitle}`} size={`42px`}>
                        About me
                    </StyledTitle2>
                    <StyledText>The Generator App is an online tool that helps you to export ready-made templates ready
                        to work as your
                        future website. It helps you to combine slides, panels and other components and export it as a
                        set of
                        static files: HTML/CSS/JS.
                    </StyledText>
                    <StyledTitle2>
                        Work Experience
                    </StyledTitle2>
                    <Experience text={'Junior Web Developer'} button={'Full time'} text1={'Dr. Rajkumar’s Learning App'}
                                text2={'Bengaluru'} text3={'Sep 2021 - Dec 2021'}/>
                    <Experience text={'Web Development Intern'} button={'Internship'} text1={'IonPixelz Web Solutions'}
                                text2={'Bengaluru'} text3={'Sep 2021 - Dec 2021'}/>
                    <Experience text={'SEO / SEM Specialist'} button={'Internship'} text1={'HAAPS'}
                                text2={'Bengaluru'} text3={'Sep 2021 - Dec 2021'}/>
                    <StyledTitle2>Education</StyledTitle2>
                    <ButtonExperience text={'Bachelor in Electronics & Communication'} button={'Full time'}
                                      text1={'Bangalore Instutute of Technology'} text3={'Aug 2015 - Dec 2020'}/>
                </FlexWrapper>

            </Container>
    <StyledDrawing src={Drawing} alt={'Drawing'}/>


        </StyledAbout>
    );
};


const StyledAbout=styled.section`
  margin-top: calc(200px - 40px);
  @media ${theme.media.mobile}{
    display: none;

  }
`

const StyledDrawing=styled.img`
position: absolute;
  right: 0px;
  top: 727px
`
