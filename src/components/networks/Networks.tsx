import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";

export const Networks = () => {
    return (
        <StyledNetworks>
            <Icon iconId={'git'} width={'30'} height={'30'} viewBox={'0 0 30 30'}/>
            <Icon iconId={'twitter'} width={'32'} height={'32'} viewBox={'0 0 32 32'}/>
            <Icon iconId={'linkedin'} width={'30'} height={'30'} viewBox={'0 0 30 30'}/>
        </StyledNetworks>
    );
};

const StyledNetworks=styled.div`
display: flex;
  align-items: center;
  gap: 20px;
`
