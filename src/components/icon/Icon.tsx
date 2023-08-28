import React from 'react';
import iconSprite from '../../accets/images/sprite.svg'

type IconPropsType= {
    iconId: string;
    width?: string;
    height?: string;
    viewBox?:string;

}
export const Icon = (props:IconPropsType) => {
    return (
        <svg width={props.width || "97"} height={props.height || "59"} viewBox={props.viewBox || "0 0 97 59"} xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconSprite}#${props.iconId}`}/>
        </svg>
    );
};

