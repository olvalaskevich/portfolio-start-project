import React from 'react';
import {Icon} from "../icon/Icon";
import {S} from '../../layout/header/Header_Styles'



type NetworksPropsType={
    footer?:boolean;
}


export const Networks:React.FC = (props:NetworksPropsType) => {
    if (props.footer===true){
        return (
            <S.Network>
                <Icon iconId={'githubFooter'} width={'30'} height={'30'} viewBox={'0 0 30 30'}/>
                <Icon iconId={'xFooter'} width={'32'} height={'32'} viewBox={'0 0 32 32'}/>
                <Icon iconId={'linkedinFooter'} width={'30'} height={'30'} viewBox={'0 0 30 30'}/>
            </S.Network>
        )
    }
    else {
        return (
            <S.Network>
                <Icon iconId={'git'} width={'30'} height={'30'} viewBox={'0 0 30 30'}/>
                <Icon iconId={'twitter'} width={'32'} height={'32'} viewBox={'0 0 32 32'}/>
                <Icon iconId={'linkedin'} width={'30'} height={'30'} viewBox={'0 0 30 30'}/>
            </S.Network>
        )
    }
};





