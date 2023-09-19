import React from 'react';
import logo1 from '../../accets/images/logo1.svg'
import logo2 from '../../accets/images/logo2.svg'


type LogoPropsType={
    footer?: boolean;
}



export const Logo1:React.FC<LogoPropsType> = (props:LogoPropsType) => {
    if (props.footer===true){
        return (
            <img src={logo2} alt={"logotype"}/>
        )
    }
    else
    {
        return (
            <img src={logo1} alt={"logotype"}/>
        );
    }
};

