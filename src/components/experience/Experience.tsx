import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";
import {FlexWrapper} from "../flexwrapper/FlexWrapper";

type ExperiencePropsType={
    text:string;
    button:string;
    text1:string;
    text2:string;
    text3:string;
}


export const Experience = (props:ExperiencePropsType) => {

    return(
        <div>
            <FlexWrapper justify={'space-between'} align={'center'}>
                <StyledTitleExperience>{props.text}</StyledTitleExperience>
                <StyledButton>{props.button}</StyledButton>
            </FlexWrapper>
            <FlexWrapper justify={'space-between'} align={'center'}>
                <Icon iconId={'building'} width={'16px'} height={'12px'} viewBox={'0 0 16 12'}/>
                <StyledText>Dr. Rajkumar’s Learning App</StyledText>
                <Icon iconId={'location'} width={'16px'} height={'12px'} viewBox={'0 0 16 12'}/>
                <StyledText>Bengaluru</StyledText>
                <Icon iconId={'calendar'} width={'16px'} height={'12px'} viewBox={'0 0 16 12'}/>
                <StyledText>Sep 2021 - Dec 2021</StyledText>
            </FlexWrapper>
        </div>
    );


};

export const StyledTitleExperience=styled.h1`
  font-size: 20px;
  line-height: 28px;
  color: #666;
`
export const StyledText=styled.span`
  color: #A7A7A7;
  font-size: 12px;
  line-height: 28px;
`
export const StyledButton=styled.button`
  background-color: #D7FFE0;
  width: 84px;
  height: 24px;
  border-radius: 100px;
`

