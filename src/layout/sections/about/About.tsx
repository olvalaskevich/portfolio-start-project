import React from 'react';
import Drawing from '../../../accets/images/drawing1.svg'
import {Experience} from "../../../components/experience/Experience";
import {ButtonExperience} from "../../../components/experience/Education";
import {StyledText} from "../../../components/titel2styled/Text";
import {Container} from "../../../components/container/Conteiner";
import {S} from './About_Styles';
import {Fade} from "react-awesome-reveal";


const aboutData=[
    {
        text:'Junior Web Developer',
        button:'Full Time',
        text1:'Dr. Rajkumar’s Learning App',
        text2:'Bengaluru',
        text3:'Sep 2021 - Dec 2021'

    },
    {
        text:'Web Development Intern',
        button:'Internship',
        text1:'IonPixelz Web Solutions',
        text2:'Bengaluru',
        text3:'Sep 2021 - Dec 2021'

    },
    {
        text:'SEO / SEM Specialist',
        button:'Internship',
        text1:'HAAPS',
        text2:'Bengaluru',
        text3:'Sep 2021 - Dec 2021'

    }

]

export  const About:React.FC = () => {
    return (
        <S.About id={'about'}>
            <Container padding={'0 15px'}>

                <S.AboutWrapper>
                    <Fade>
                    <S.TextAbout>
                        About Me
                    </S.TextAbout>
                    <StyledText size={'18px'}>The Generator App is an online tool that helps you to export ready-made templates ready
                        to work as your
                        future website. It helps you to combine slides, panels and other components and export it as a
                        set of
                        static files: HTML/CSS/JS.
                    </StyledText>
                    <S.TextExperience>
                        Work Experience
                    </S.TextExperience>

                    {aboutData.map((s , index)=>{
                        return <Experience text={s.text} key={index}
                                           button={s.button}
                                           text1={s.text1}
                                           text2={s.text2}
                                           text3={s.text3}/>
                    })}

                    <S.TextEducation>Education</S.TextEducation>
                    <ButtonExperience text={'Bachelor in Electronics & Communication'} button={'Full Time'}
                                      text1={'Bangalore Instutute of Technology'} text3={'Aug 2015 - Dec 2020'}/>

                        </Fade>
                </S.AboutWrapper>

            </Container>
    <S.Drawing src={Drawing} alt={'Drawing'}/>


        </S.About>
    );
};



