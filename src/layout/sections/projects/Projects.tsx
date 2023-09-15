import React from 'react';
import Picture1 from '../../../accets/images/picture1.webp'
import Picture2 from '../../../accets/images/picture2.webp'
import Picture3 from '../../../accets/images/picture3.webp'
import Picture4 from '../../../accets/images/picture4.webp'
import Picture5 from '../../../accets/images/picture5.webp'
import Picture6 from '../../../accets/images/picture6.webp'
import {Project} from "./Project";
import {Container} from "../../../components/container/Conteiner";
import styled from "styled-components";
import {StyledTitle2} from "../../../components/titel2styled/Title2.styled";
import {StyledThirdTitle} from "../stack/Stack";
import {theme} from "../../../styles/Theme";



export const Projects = () => {
    return (
        <StyledProjects>
            <Container>
                <StyledTitle2 size={'calc((100vw - 360px)/(1300 - 360) * (48 - 30) + 30px)'} height={'26px'} align={'center'}>Projects</StyledTitle2>
                <StyledThirdTitle>Things I’ve built so far</StyledThirdTitle>
        <StyledCards>
                <Project src={Picture1} alt={'pic1'}/>
                <Project src={Picture2} alt={'pic1'}/>
                <Project src={Picture3} alt={'pic1'}/>
                <Project src={Picture4} alt={'pic1'}/>
                <Project src={Picture5} alt={'pic1'}/>
                <Project src={Picture6} alt={'pic1'}/>
        </StyledCards>
            </Container>
        </StyledProjects>
    );
};

const StyledProjects=styled.section`
  margin-top: calc(200px - 40px);
  @media ${theme.media.mobile}{
    margin-top: 90px;
  }
`
const StyledCards=styled.div`
  display: flex;
  row-gap: 60px;
  column-gap: 30px;
  padding-top: 110px;
  flex-wrap: wrap;
  justify-content: center;

  @media ${theme.media.tablet}{
    padding-top: 60px;
`



