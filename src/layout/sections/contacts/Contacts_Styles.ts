import styled from "styled-components";
import {theme} from "../../../styles/Theme";


const Contacts=styled.section`
  padding-top: calc(185px - 30px);
  padding-bottom: 40px;
  position: relative;
  cursor:default;
  background-color: ${theme.colors.primaryBg};
  @media ${theme.media.tablet}{
    padding-top: 60px;
  
  }
`

const ContactsAdaptive=styled.div`
  
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-top: 215px;
   
  
  @media ${theme.media.tablet}{
    flex-direction: column;
    justify-content: center;
    gap :40px;
    padding-top: 40px;
  }
`

const LogoAdaptive=styled.div`
  display: flex;
  flex-grow:1;
  @media ${theme.media.tablet}{
    display: none;
  }
`

const Link=styled.a`
  font-family: 'DM Sans', sans-serif;
  font-size: calc((100vw - 360px)/(1600 - 360) * (58 - 30) + 30px);
  font-weight: 700;
  line-height: 70px; 
  letter-spacing: -1px;
  background-image: linear-gradient(to right, ${theme.colors.gradientEnd}, ${theme.colors.gradientMain});
  color: transparent;
  -webkit-background-clip: text;

  @media ${theme.media.desktopBig}{
    font-size: 58px;
  }
`

export const S={
    Contacts,
    ContactsAdaptive,
    LogoAdaptive,
    Link
}