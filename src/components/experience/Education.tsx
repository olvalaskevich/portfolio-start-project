import React from 'react';
import {FlexWrapper} from "../flexwrapper/FlexWrapper";
import {Icon} from "../icon/Icon";
import {StyledButton, StyledText, StyledTitleExperience} from "./Experience";
import styled from "styled-components";

type EducationPropsType={
    text?:string;
    button?:string;
    text1?:string;
    text3?:string;
    justifySelf?:string
}

export const ButtonExperience = (props:EducationPropsType) => {
        return(
        <div>
            <FlexWrapper justify={'space-between'} align={'center'}>
                <StyledTitleExperience>{props.text}</StyledTitleExperience>
                <StyledButton>{props.button}</StyledButton>
            </FlexWrapper>
            <StyledGridEducation>

                <StyledInfoEducation>
                    <Icon iconId={'building'} width={'16px'} height={'12px'} viewBox={'0 0 16 12'}/>
                    <StyledText>{props.text1}</StyledText>
                </StyledInfoEducation>
                <StyledInfoEducation justifySelf={'end'}>
                    <Icon iconId={'calendar'} width={'16px'} height={'12px'} viewBox={'0 0 16 12'}/>
                    <StyledText>{props.text3}</StyledText>
                </StyledInfoEducation>

            </StyledGridEducation>
        </div>
    );

};

const StyledGridEducation=styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(270px, auto));
  grid-template-rows: auto;
  
`

export const StyledInfoEducation=styled.div<EducationPropsType>`
  display: flex;
  align-items: center;
  gap: 5px;
  justify-self: ${props => props.justifySelf};
`