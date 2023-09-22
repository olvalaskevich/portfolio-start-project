import React from 'react';
import {Icon} from "../../../components/icon/Icon";
import {FlexWrapper} from "../../../components/flexwrapper/FlexWrapper";
import {Container} from "../../../components/container/Conteiner";
import {StyledTitle2} from "../../../components/titel2styled/Title2.styled";
import {S} from './Stack_Styles'

const stackData=[
    {
        iconId: 'html',
        width: '120px',
        height: '120px',
        viewBox: '0 0 120 120'
    },
    {
        iconId: 'css',
        width: '120px',
        height: '120px',
        viewBox: '0 0 120 120'
    },
    {
        iconId: 'js',
        width: '120px',
        height: '120px',
        viewBox: '0 0 120 120'
    },
    {
        iconId: 'react',
        width: '113px',
        height: '101px',
        viewBox: '0 0 113 101'
    },
    {
        iconId: 'vector',
        width: '105px',
        height: '100px',
        viewBox: '0 0 105 100'
    },
    {
        iconId: 'bootstrap',
        width: '88px',
        height: '87px',
        viewBox: '0 0 88 87'
    },
    {
        iconId: 'tailwind',
        width: '131px',
        height: '131px',
        viewBox: '0 0 131 131'
    },
    {
        iconId: 'sass',
        width: '117px',
        height: '87px',
        viewBox: '0 0 117 87'
    },
    {
        iconId: 'skills1',
        width: '105px',
        height: '105px',
        viewBox: '0 0 105 105'
    },
    {
        iconId: 'greensock',
        width: '120px',
        height: '120px',
        viewBox: '0 0 120 120'
    },
    {
        iconId: 'vscode',
        width: '112px',
        height: '112px',
        viewBox: '0 0 112 112'
    },
    {
        iconId: 'project1',
        width: '88px',
        height: '88px',
        viewBox: '0 0 88 88'
    }
]

export const Stack:React.FC = () => {
    return (
        <S.Stack id={'stack'}>
            <Container padding={'0 15px'}>
        <FlexWrapper direction={'column'}>
            <StyledTitle2 size={'calc((100vw - 360px)/(1600 - 360) * (48 - 30) + 30px)'} height={'26px'} align={'center'}>My Tech Stack</StyledTitle2>
            <S.ThirdTitle>Technologies I’ve been working with recently</S.ThirdTitle>
            <S.GridStack>

                {stackData.map((s , index)=>{
                    return <Icon iconId={s.iconId} key={index}
                                 width={s.width}
                                 height={s.height}
                                 viewBox={s.viewBox}/>
                } )}

            </S.GridStack>
        </FlexWrapper>
            </Container>
        </S.Stack>
    );
};


