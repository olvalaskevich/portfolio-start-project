import styled from "styled-components";
import {theme} from "../../../styles/Theme";

const Stack=styled.section`
  padding-top: calc(200px - 65px);
  position: relative;
  cursor:default;
  background-color: ${theme.colors.primaryBg};
  @media ${theme.media.mobile}{
    margin-top: 0;
  }
`

const GridStack=styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 80px;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding-top: 124px;
  
  @media ${theme.media.tablet}{
    padding-top: 60px;
  }
  @media ${theme.media.mobile}{
    gap: 50px;
  }
`

const ThirdTitle=styled.h3`
  color: ${theme.colors.fontText};
  font-size: calc((100vw - 360px)/(1600 - 360) * (32 - 20) + 20px);
  font-weight: 400;
  line-height: 26px;
  text-align: center;
  padding-top: 10px;

  @media ${theme.media.desktopBig}{
    font-size: 32px;
  }
`
export const S={
    Stack,
    GridStack,
    ThirdTitle
}
