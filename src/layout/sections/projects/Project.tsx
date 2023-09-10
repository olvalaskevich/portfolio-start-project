import React from 'react';
import {Icon} from "../../../components/icon/Icon";
import styled from "styled-components";
import {StyledTitle2} from "../../../components/titel2styled/Title2.styled";
import {StyledText} from "../../../components/titel2styled/Text";
import {theme} from "../../../styles/Theme";
import {StyledInfoEducation} from "../../../components/experience/Education";
import {FlexWrapper} from "../../../components/flexwrapper/FlexWrapper";


type ProjectPropsType={
    src:string;
    alt:string;
}

export const Project = (props:ProjectPropsType) => {
    return (
        <StyledCard>
            <img src={props.src} alt={'props.alt'}/>
            <FlexWrapper direction={'column'} gap={'15px'} padding={'25px'}>
                <StyledText size={'28px'} weight={'500'} height={'26px'} color={`${theme.colors.fontLinkProject}`}>
                    Project Tile goes here
                </StyledText>
                <StyledText weight={'300'} size={'18px'} height={'26px'} color={`${theme.colors.fontText}`}>This is
                    sample project description random things are here in description This is sample project lorem
                    ipsum generator for dummy content
                </StyledText>
                <StyledText size={'16px'} weight={'400'} color={`${theme.colors.fontTitle}`}>
                    Tech stack :

                <StyledText size={'14px'} weight={'300'} color={`${theme.colors.fontTitle}`}>
                    HTML , JavaScript, SASS, React
                </StyledText>
                </StyledText>

                <StyledGridLinks>
                    <StyledInfoEducation>
                        <Icon iconId={'link'} width={'20px'} height={'20px'} viewBox={'0 0 20 20'}/>
                        <a href={'#'}>Live Preview</a>
                    </StyledInfoEducation>
                    <StyledInfoEducation>
                        <Icon iconId={'github'} width={'20px'} height={'20px'} viewBox={'0 0 20 20'}/>
                        <a href={'#'}>View Code</a>
                    </StyledInfoEducation>
                </StyledGridLinks>
            </FlexWrapper>
        </StyledCard>
    );
};




const StyledGridLinks=styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: auto;
  gap: 48px
`


const StyledCard=styled.div`
  width: 375px;
  height: 570px;
  background-color: ${theme.colors.primaryBg};
  box-shadow: 2px 2px 100px 0 rgba(0, 0, 0, 0.20);
  border-radius: 20px;
  img{
    width: 100%;
    height: 260px;
    border-radius: 20px 20px 0 0;
  }
  
  a{
    text-decoration: underline;
    color: ${theme.colors.fontLinkProject};
    font-size: 16px;    
    font-weight: 400;
    line-height: 26px;
  }
`