import React from 'react';
import {FlexWrapper} from "../flexwrapper/FlexWrapper";
import {Icon} from "../icon/Icon";
import {S} from "../../layout/sections/about/About_Styles";
import styled from "styled-components";


type EducationPropsType={
    text?:string;
    button?:string;
    text1?:string;
    text3?:string;
    justifySelf?:string
}

export const ButtonExperience:React.FC<EducationPropsType> = (props:EducationPropsType) => {
        return(
        <div>
            <FlexWrapper justify={'space-between'} align={'center'}>
                <S.TitleExperience>{props.text}</S.TitleExperience>
                <S.Button>{props.button}</S.Button>
            </FlexWrapper>
            <S.GridEducation>

                <StyledInfoEducation>
                    <Icon iconId={'building'} width={'16px'} height={'12px'} viewBox={'0 0 16 12'}/>
                    <S.Text>{props.text1}</S.Text>
                </StyledInfoEducation>
                <StyledInfoEducation justifySelf={'end'}>
                    <Icon iconId={'calendar'} width={'16px'} height={'12px'} viewBox={'0 0 16 12'}/>
                    <S.Text>{props.text3}</S.Text>
                </StyledInfoEducation>

            </S.GridEducation>
            <S.LineAbout/>
        </div>
    );

};


export const StyledInfoEducation=styled.div<EducationPropsType>`
  display: flex;
  align-items: center;
  gap: 5px;
  justify-self: ${props => props.justifySelf};
`
