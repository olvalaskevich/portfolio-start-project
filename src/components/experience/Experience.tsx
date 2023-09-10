import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";
import {FlexWrapper} from "../flexwrapper/FlexWrapper";
import {theme} from "../../styles/Theme";

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
            <StyledGrid>
                <StyledInfo>
                    <Icon iconId={'building'} width={'16px'} height={'12px'} viewBox={'0 0 16 12'}/>
                    <StyledText>{props.text1}</StyledText>
                </StyledInfo>
                <StyledInfo>
                    <Icon iconId={'location'} width={'16px'} height={'12px'} viewBox={'0 0 16 12'}/>
                    <StyledText>{props.text2}</StyledText>
                </StyledInfo>
                <StyledInfo>
                    <Icon iconId={'calendar'} width={'16px'} height={'12px'} viewBox={'0 0 16 12'}/>
                    <StyledText>{props.text3}</StyledText>
                </StyledInfo>


            </StyledGrid>
        </div>
    );


};

export const StyledGrid=styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(270px, auto));
  grid-template-rows: auto;
  justify-items: start;
`

export const StyledInfo=styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  
`

export const StyledTitleExperience=styled.h1`
  font-size: 20px;
  line-height: 28px;
  color: #666;
  font-weight: 400;
  letter-spacing: 1px
`
export const StyledText=styled.span`
  color: ${theme.colors.fontSmallAbout};
  font-size: 12px;
  line-height: 28px;
  font-weight: 500;
  letter-spacing: 1px;
  }
`
export const StyledButton=styled.button`
  background-color: ${theme.colors.buttonSuccess};
  width: 84px;
  height: 24px;
  border-radius: 100px;
  color: ${theme.colors.buttonText};
  border: none;
  font-size: 9px;
  font-style: normal;
  font-weight: 600;
  line-height: 26px;
  text-align: center;
`

