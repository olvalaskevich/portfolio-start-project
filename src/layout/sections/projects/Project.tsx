import React from 'react';
import {Icon} from "../../../components/icon/Icon";
import {StyledText} from "../../../components/titel2styled/Text";
import {theme} from "../../../styles/Theme";
import {StyledInfoEducation} from "../../../components/experience/Education";
import {FlexWrapper} from "../../../components/flexwrapper/FlexWrapper";
import {Sp} from './Projects_Styles'


type ProjectPropsType={
    src:string;
    alt:string;
}

const textData=[
    {
        size:'28px',
        weight:'500',
        color:`${theme.colors.fontLinkProject}`,
        text:'Project Tile goes here'
    },
    {
        size:'18px',
        weight:'300',
        color:`${theme.colors.fontLinkProject}`,
        text:'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content'
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
        text:'HTML , JavaScript, SASS, React'
    }
]

const linksData=[
    {
        iconId:'link',
        width:'20px',
        height:'20px',
        viewBox:'0 0 20 20',
        text:'Live Preview'
    },
    {
        iconId:'github',
        width:'20px',
        height:'20px',
        viewBox:'0 0 20 20',
        text:'View Code'
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
                        {s.text}

                            </StyledText>
                })}

                <Sp.GridLinks>

                    {linksData.map((s , index)=>{
                        return <StyledInfoEducation>
                            <Icon iconId={s.iconId}
                                  width={s.width}
                                  height={s.height}
                                  viewBox={s.viewBox}/>
                            <a href={'#'}>{s.text}</a>
                        </StyledInfoEducation>
                    })}

                </Sp.GridLinks>
            </FlexWrapper>
        </Sp.Card>
    );
};






