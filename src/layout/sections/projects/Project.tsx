import React from 'react';
import {Icon} from "../../../components/icon/Icon";
import {StyledText} from "../../../components/titel2styled/Text";
import {theme} from "../../../styles/Theme";
import {StyledInfoEducation} from "../../../components/experience/Education";
import {FlexWrapper} from "../../../components/flexwrapper/FlexWrapper";
import {Sp} from './Projects_Styles'
import styled from "styled-components";



type ProjectPropsType={
    src:string;
    alt:string;
    number:number
}

const textData=[
    {
        size:'28px',
        weight:'500',
        color:`${theme.colors.fontLinkProject}`,
        text:['Portfolio project', 'To-do list project', 'Social network project']
    },
    {
        size:'18px',
        weight:'300',
        color:`${theme.colors.fontLinkProject}`,
        text:[
            'This is a portfolio project where companies can view information about me, get acquainted with the technologies I own and view pet projects.',
            'This is a to-do list, which is the main educational project. With its help, users can make to-do lists for every day and not worry about forgetting to do something, everything will be saved by a to-do list!',
            'The social network project implements sections for getting a list of users and their profile.'
        ]
    },
    {
        size:'16px',
        weight:'400',
        color:`${theme.colors.fontTitle}`,
        text:'Tech stack :'
    },
    {
        size:'14px',
        weight:'300',
        color:`${theme.colors.fontTitle}`,
        text:'HTML , JavaScript, SASS, React, SC'
    }
]

const linksData=[
    {
        iconId:'link',
        width:'20px',
        height:'20px',
        viewBox:'0 0 20 20',
        text:'Live Preview',
        stroke:'black'
    },
    {
        iconId:'github',
        width:'20px',
        height:'20px',
        viewBox:'0 0 20 20',
        text:'View Code',
        stroke:'black'
    }
]

export const Project: React.FC<ProjectPropsType> = (props:ProjectPropsType) => {
    return (

        <Sp.Card>
            <img src={props.src} alt={'props.alt'}/>
            <FlexWrapper direction={'column'} gap={'15px'} padding={'25px'}>

                {textData.map((s , index)=>{
                    return <StyledText size={s.size} key={index}
                                       weight={s.weight}
                                       color={s.color}>
                        {Array.isArray(s.text)?s.text[props.number]:s.text}

                            </StyledText>
                })}

                <Sp.GridLinks>

                    {linksData.map((s , index)=>{
                        return <StyledInfoEducation key={index}>
                            <Icon iconId={s.iconId}
                                  width={s.width}
                                  height={s.height}
                                  viewBox={s.viewBox}/>
                            <LinkProject href={'#'}>{s.text}</LinkProject>
                        </StyledInfoEducation>
                    })}

                </Sp.GridLinks>
            </FlexWrapper>
        </Sp.Card>

    );
};

const LinkProject=styled.a`
  transition: ${theme.animation.transition};
  &:hover{
    opacity: 0.4;
    border: none;
    text-decoration: none;
    font-size: 17px;
  }
`




