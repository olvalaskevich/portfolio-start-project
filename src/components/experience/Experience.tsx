import React from 'react';
import {Icon} from "../icon/Icon";
import {FlexWrapper} from "../flexwrapper/FlexWrapper";
import {S} from '../../layout/sections/about/About_Styles'

type ExperiencePropsType={
    text:string;
    button:string;
    text1:string;
    text2:string;
    text3:string;

}



export const Experience:React.FC<ExperiencePropsType> = (props:ExperiencePropsType) => {

    return(
        <div>
            <FlexWrapper justify={'space-between'} align={'flex-start'}>
                <S.TitleExperience>{props.text}</S.TitleExperience>
                <S.Button>{props.button}</S.Button>
            </FlexWrapper>
            <S.Grid>

                <S.Info>
                    <Icon iconId={'building'} width={'16px'} height={'12px'} viewBox={'0 0 16 12'}/>
                    <S.Text>{props.text1}</S.Text>
                </S.Info>
                <S.Info>
                    <Icon iconId={'location'} width={'16px'} height={'12px'} viewBox={'0 0 16 12'}/>
                    <S.Text>{props.text2}</S.Text>
                </S.Info>
                <S.Info>
                    <Icon iconId={'calendar'} width={'16px'} height={'12px'} viewBox={'0 0 16 12'}/>
                    <S.Text>{props.text3}</S.Text>
                </S.Info>

            </S.Grid>
            <S.LineAbout/>
        </div>
    );


};




