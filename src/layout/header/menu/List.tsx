import React from 'react';
import {S} from '../Header_Styles'

type ListPropsType={
    mobile?:boolean
}
const listData=[
    {
        item:'Home',
        href:'home'
    },
    {
        item:'About',
        href:'about'
    },
    {
        item:'Tech Stack',
        href:'stack'
    },
    {
        item:'Projects',
        href:'projects'
    },
    {
        item:'Contact',
        href:'contact'
    },
]

const listDataMobile=[
    {
        item:'Home',
        href:'home'
    },
    {
        item:'Tech Stack',
        href:'stack'
    },
    {
        item:'Projects',
        href:'projects'
    },
    {
        item:'Contact',
        href:'contact'
    },
]

export const List:React.FC<ListPropsType> = (props:ListPropsType) => {
if (props.mobile===true){
    return (
        <S.List>
            {listDataMobile.map((s,index) => {
                return <S.LinkItem key={index}>
                    <S.LinkMenu
                        activeClass="active"
                        to={s.href}
                        smooth={true}
                        spy={true}
                    >
                        {s.item}
                    </S.LinkMenu>
                        </S.LinkItem>
            })}
        </S.List>
    )
}
else {return (
    <S.List>
        {listData.map((s,index) => {
            return <S.LinkItem key={index}>
                <S.LinkMenu
                    activeClass="active"
                    to={s.href}
                    smooth={true}
                    spy={true}
                >
                    {s.item}
                </S.LinkMenu>
            </S.LinkItem>
        })}
    </S.List>
)
}}

