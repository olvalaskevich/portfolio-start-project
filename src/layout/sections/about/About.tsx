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
                    <StyledText size={'18px'}>
                        Frontend is a part of my life. I like to draw parallels and find analogies between different concepts in development.
                        I work hard to improve my skills, strive for professional growth and I'm ready to study and take an active part in team
                        projects to achieve a common goal.
                    </StyledText>
                    {/*<S.TextExperience>*/}
                    {/*    Work Experience*/}
                    {/*</S.TextExperience>*/}

                    {/*{aboutData.map((s , index)=>{*/}
                    {/*    return <Experience text={s.text} key={index}*/}
                    {/*                       button={s.button}*/}
                    {/*                       text1={s.text1}*/}
                    {/*                       text2={s.text2}*/}
                    {/*                       text3={s.text3}/>*/}
                    {/*})}*/}

                    <S.TextEducation>Education</S.TextEducation>
                    <ButtonExperience text={'Engineer of Telecommunications'}
                                      text1={'Belarusian State University of Informatics and Radioelectronics'} text3={'Aug 2011 - Jun 2015'}/>
                    <ButtonExperience text={'Junior Frontend Developer'}
                                          text1={'IT-INCUBATOR ♥'} text3={'Aug 2023'}/>
                    </Fade>
                </S.AboutWrapper>

            </Container>
    <S.Drawing src={Drawing} alt={'Drawing'}/>


        </S.About>
    );
};



