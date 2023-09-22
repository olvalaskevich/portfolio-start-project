import React from 'react';
import {S} from '../Header_Styles'


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

export const List:React.FC = () => {

    return (
        <S.List>
            {listData.map((s,index) => {
                return <li>
                    <S.LinkMenu key={index}
                        activeClass="active"
                        to={s.href}
                        smooth={true}
                        spy={true}
                    >
                        {s.item}
                    </S.LinkMenu>
                        </li>
            })}
        </S.List>
    );
};

