import styled from "styled-components";
import {theme} from "../../../styles/Theme";


const GridLinks=styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: auto;
  gap: 48px;
  

`

const Card=styled.div`
  max-width: 375px;
  width: 100%;
  height: auto;
  background-color: ${theme.colors.primaryBg};
  box-shadow: 2px 2px 100px 0 rgba(0, 0, 0, 0.20);
  border-radius: 20px; 
  
  img{
    width: 100%;
    height: 260px;
    border-radius: 20px 20px 0 0;
    object-fit: cover;
  }
  
  a{
    text-decoration: underline;
    color: ${theme.colors.fontLinkProject};
    font-size: 16px;    
    font-weight: 400;
    line-height: 26px;
  }
`

const Projects=styled.section`
  padding-top: calc(200px - 100px);
  position: relative;
  cursor:default;
  background-color: ${theme.colors.secondaryBg};
  padding-bottom: 155px;
`

const Cards=styled.div`
  display: flex;
  row-gap: 60px;
  column-gap: 30px;
  padding-top: 110px;
  flex-wrap: wrap;
  justify-content: center;
  
  @media ${theme.media.tablet}{
    padding-top: 60px;
`

export const Sp={
    GridLinks,
    Card,
    Projects,
    Cards
}