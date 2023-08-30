import React from 'react';
import styled from "styled-components";

export const MenuStyled = () => {
    return (
        <StyledMenu>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Tech Stack</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
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