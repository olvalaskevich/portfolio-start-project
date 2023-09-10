import React from 'react';
import logo1 from '../../accets/images/logo1.svg'
import {Icon} from "../icon/Icon";


type LogoPropsType={
    footer?: boolean;
}



export const Logo1 = (props:LogoPropsType) => {
    if (props.footer===true){
        return (
            <Icon iconId={'logoFooter'} width={'97'} height={'59'} viewBox={'0 0 97 59'}/>
        )
    }
    else
    {
        return (
            <img src={logo1} alt={"logotype"}/>
        );
    }
};

