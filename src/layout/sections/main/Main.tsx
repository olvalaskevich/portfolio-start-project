import React from 'react';
import photo from '../../../accets/images/photo.jpg'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper/FlexWrapper";

export const Main = () => {
    return (
        <FlexWrapper justify={'space-between'} align={'center'}>
            <FlexWrapper>
                Hi 👋,<br/>
                My name is<br/>
                Pavan MG<br/>
                I build things for web
            </FlexWrapper>

            <StyledPhoto src={photo} alt='Photo'/>
        </FlexWrapper>
    );
};

const StyledPhoto=styled.img`
  width: 350px;
  height: 350px;
  border: solid 5px black;
  border-radius: 50%;
  object-fit: cover;
`





