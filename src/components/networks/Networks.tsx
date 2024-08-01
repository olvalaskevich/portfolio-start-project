import React from 'react';
import {Icon} from "../icon/Icon";
import {S} from '../../layout/header/Header_Styles'
import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {Fade} from "react-awesome-reveal";



type NetworksPropsType={
    footer?:boolean;
}

const networksFooterData=[
    {
        iconId:'githubFooter',
        width:'30',
        height:'30',
        viewBox:'0 0 30 30',
        href: 'https://github.com/olvalaskevich'
    },
    {
        iconId:'xFooter',
        width:'35',
        height:'35',
        viewBox:'0 0 25 25',
        href:'https://www.instagram.com/this.olyadev'
    },
    {
        iconId:'linkedinFooter',
        width:'30',
        height:'30',
        viewBox:'0 0 30 30',
        href: 'https://www.linkedin.com/feed'
    }

]

const networksData=[
    {
        iconId:'git',
        width:'30',
        height:'30',
        viewBox:'0 0 30 30',
        href: 'https://github.com/olvalaskevich'
    },
    {
        iconId:'instagram',
        width:'35',
        height:'35',
        viewBox:'0 0 25 25',
        href: 'https://www.instagram.com/this.olyadev'
    },
    {
        iconId:'linkedin',
        width:'30',
        height:'30',
        viewBox:'0 0 30 30',
        href: 'https://www.linkedin.com/in/volha-valaskevich-41a5b4288'
    }
]

export const Networks:React.FC<{footer?:boolean}> = (props:NetworksPropsType) => {
    if (props.footer===true){
        return (
            <S.Network>
                <Fade triggerOnce={true}>
                    {networksFooterData.map((s, index) => {
                        return <StyledLinkIcon href={s.href} target={'blank'} key={index}><Icon iconId={s.iconId}
                                                                 width={s.width}
                                                                 height={s.height}
                                                                 viewBox={s.viewBox}/></StyledLinkIcon>
                    })}
                </Fade>
            </S.Network>
        )
    }
    else {
        return (
            <S.Network>

                {networksData.map((s , index)=>{
                    return <StyledLinkIcon href={s.href} target={'blank'} key={index}><Icon iconId={s.iconId}
                                 width={s.width}
                                 height={s.height}
                                 viewBox={s.viewBox}/></StyledLinkIcon>
                })}

            </S.Network>
        )
    }
};

const StyledLinkIcon=styled.a`
  opacity: 1;
  transform: translateY(0);
  transition: ${theme.animation.transition};

  &:hover{
    opacity: 0.7;
    transform: translateY(-5px);
    cursor: pointer;
  }
`



