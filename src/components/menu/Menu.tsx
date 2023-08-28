import React from 'react';
import styled from "styled-components";
import {Networks} from "../networks/Networks";


export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Tech Stack</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
            <Networks/>
        </StyledMenu>
    );
};

const StyledMenu=styled.nav`
  display: flex;
  gap: 50px;
ul{
  list-style: none;
  display: flex;
  gap: 20px;
}
`