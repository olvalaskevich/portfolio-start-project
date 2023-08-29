import React from 'react';
import Drawing from '../../../accets/images/drawing.svg'
import {Experience} from "../../../components/experience/Experience";
import {ButtonExperience} from "../../../components/experience/Education";
import {FlexWrapper} from "../../../components/flexwrapper/FlexWrapper";


export  const About = () => {
    return (
<FlexWrapper justify={'space-between'} align={'flex-start'}>
<div>
    <h2>About me</h2>
    <p>The Generator App is an online tool that helps you to export ready-made templates ready to work as your
        future website. It helps you to combine slides, panels and other components and export it as a set of
        static files: HTML/CSS/JS.
    </p>
    <h2>Work Experience</h2>
    <Experience text={'Junior Web Developer'} button={'Full time'} text1={'Dr. Rajkumar’s Learning App'}
                text2={'Bengaluru'} text3={'Sep 2021 - Dec 2021'}/>
    <Experience text={'Web Development Intern'} button={'Internship'} text1={'IonPixelz Web Solutions'}
                text2={'Bengaluru'} text3={'Sep 2021 - Dec 2021'}/>
    <Experience text={'SEO / SEM Specialist'} button={'Internship'} text1={'HAAPS'}
                text2={'Bengaluru'} text3={'Sep 2021 - Dec 2021'}/>
    <h2>Education</h2>
    <ButtonExperience text={'Bachelor in Electronics & Communication'} button={'Full time'}
                      text1={'Bangalore Instutute of Technology'} text3={'Aug 2015 - Dec 2020'}/>
</div>
    <img src={Drawing} alt={'Drawing'}/>

</FlexWrapper>
    );
};

