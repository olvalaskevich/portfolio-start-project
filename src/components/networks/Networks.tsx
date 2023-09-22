import React from 'react';
import {Icon} from "../icon/Icon";
import {S} from '../../layout/header/Header_Styles'
import styled from "styled-components";
import {theme} from "../../styles/Theme";



type NetworksPropsType={
    footer?:boolean;
}

const networksFooterData=[
    {
        iconId:'githubFooter',
        width:'30',
        height:'30',
        viewBox:'0 0 30 30'
    },
    {
        iconId:'xFooter',
        width:'32',
        height:'32',
        viewBox:'0 0 32 32'
    },
    {
        iconId:'linkedinFooter',
        width:'30',
        height:'30',
        viewBox:'0 0 30 30'
    }

]

const networksData=[
    {
        iconId:'git',
        width:'30',
        height:'30',
        viewBox:'0 0 30 30'
    },
    {
        iconId:'twitter',
        width:'32',
        height:'32',
        viewBox:'0 0 32 32'
    },
    {
        iconId:'linkedin',
        width:'30',
        height:'30',
        viewBox:'0 0 30 30'
    }
]

export const Networks:React.FC<{footer?:boolean}> = (props:NetworksPropsType) => {
    if (props.footer===true){
        return (
            <S.Network>

                {networksFooterData.map((s , index)=>{
                    return <StyledLinkIcon><Icon iconId={s.iconId} key={index}
                                 width={s.width}
                                 height={s.height}
                                 viewBox={s.viewBox}/></StyledLinkIcon>
                })}

            </S.Network>
        )
    }
    else {
        return (
            <S.Network>

                {networksData.map((s , index)=>{
                    return <StyledLinkIcon><Icon iconId={s.iconId} key={index}
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



