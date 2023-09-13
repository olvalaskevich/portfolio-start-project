import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";
import {theme} from "../../styles/Theme";

type NetworksPropsType={
    footer?:boolean;
}


export const Networks = (props:NetworksPropsType) => {
    if (props.footer===true){
        return (
            <StyledNetworks>
                <Icon iconId={'githubFooter'} width={'30'} height={'30'} viewBox={'0 0 30 30'}/>
                <Icon iconId={'xFooter'} width={'32'} height={'32'} viewBox={'0 0 32 32'}/>
                <Icon iconId={'linkedinFooter'} width={'30'} height={'30'} viewBox={'0 0 30 30'}/>
            </StyledNetworks>
        )
    }
    else {
        return (
            <StyledNetworks>
                <Icon iconId={'git'} width={'30'} height={'30'} viewBox={'0 0 30 30'}/>
                <Icon iconId={'twitter'} width={'32'} height={'32'} viewBox={'0 0 32 32'}/>
                <Icon iconId={'linkedin'} width={'30'} height={'30'} viewBox={'0 0 30 30'}/>
            </StyledNetworks>
        )
    }
};




const StyledNetworks=styled.div`
display: flex;
  align-items: center;
  column-gap: 20px;
  justify-self: right;
  align-self: center;

  @media ${theme.media.tablet}{
    display: none;
  }
`
