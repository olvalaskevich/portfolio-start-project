import React from 'react';
import {Icon} from "../../../components/icon/Icon";
import {FlexWrapper} from "../../../components/flexwrapper/FlexWrapper";
import styled from "styled-components";
import {StyledTitle2} from "../../../components/titel2styled/Title2.styled";
import {StyledText} from "../../../components/titel2styled/Text";


type ProjectPropsType={
    src:string;
    alt:string;
}

export const Project = (props:ProjectPropsType) => {
    return (
        <StyledCard>
            <img src={props.src} alt={'props.alt'}/>
            <StyledTitle2>Project Tile goes here</StyledTitle2>
            <StyledText>This is sample project description random things are here in description This is sample project lorem
                ipsum generator for dummy content
            </StyledText>
            <StyledText>
                Tech stack : HTML , JavaScript, SASS, React
            </StyledText>
            <FlexWrapper justify={'space-between'}>
                <Icon iconId={'link'} width={'20px'} height={'20px'} viewBox={'0 0 20 20'}/>
                <a href={'#'}>Live Preview</a>
                <Icon iconId={'github'} width={'20px'} height={'20px'} viewBox={'0 0 20 20'}/>
                <a href={'#'}>View Code</a>
            </FlexWrapper>
        </StyledCard>
    );
};

const StyledCard=styled.div`
  width: 375px;
  height: 570px;
  background-color: #FFF;
  box-shadow: 2px 2px 100px 0 rgba(0, 0, 0, 0.20);
  border-radius: 20px;
  img{
    width: 100%;
    height: 260px;
    border-radius: 20px 20px 0 0;
  }
`