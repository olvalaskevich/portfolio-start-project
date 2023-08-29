import React from 'react';
import {FlexWrapper} from "../flexwrapper/FlexWrapper";
import {Icon} from "../icon/Icon";
import {StyledButton, StyledText, StyledTitleExperience} from "./Experience";

type EducationPropsType={
    text:string;
    button:string;
    text1:string;
    text3:string;
}

export const ButtonExperience = (props:EducationPropsType) => {
        return(
        <div>
            <FlexWrapper justify={'space-between'} align={'center'}>
                <StyledTitleExperience>{props.text}</StyledTitleExperience>
                <StyledButton>{props.button}</StyledButton>
            </FlexWrapper>
            <FlexWrapper justify={'space-between'} align={'center'}>
                <Icon iconId={'building'} width={'16px'} height={'12px'} viewBox={'0 0 16 12'}/>
                <StyledText>Dr. Rajkumar’s Learning App</StyledText>
                <Icon iconId={'calendar'} width={'16px'} height={'12px'} viewBox={'0 0 16 12'}/>
                <StyledText>Sep 2021 - Dec 2021</StyledText>
            </FlexWrapper>
        </div>
    );

};


