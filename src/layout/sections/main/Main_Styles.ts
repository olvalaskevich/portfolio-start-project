import styled from "styled-components";
import {theme} from "../../../styles/Theme";


const MainWrapper=styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
      
  @media ${theme.media.mobile}{
    flex-wrap: wrap-reverse;
    justify-content: center;
    align-items: center;
  }
`

const Photo=styled.img`
  width: calc(100% - 17px);
  height: calc(100% - 17px);
  border-radius: 50%;
  object-fit: cover;
  
`

const  Border=styled.div`
  width: 359px;
  height: 359px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(${theme.colors.gradientMain}, ${theme.colors.gradientEnd});
  border-radius: 50%;
  flex-shrink: 0;
  margin-top: 20px;
  
  
  @media ${theme.media.mobile}{
    width: 300px;
    height: 300px;
  }
`

const GradientText=styled.span`
  display: block;
  color: transparent;
  
`

const String=styled.span`
  display: block;
  @media ${theme.media.mobile}{
  display: inline;
}
  
  `

const Main=styled.section`
  margin-top: 220px;
  @media ${theme.media.mobile}{
    margin-top: 50px;
    padding-top: 20px;
  }
  
`

const TextBlock=styled.div`
  width: 635px;
  height: 300px;
  color: ${theme.colors.fontTitle};
  font-family: 'Poppins', sans-serif;
  font-size: calc((100vw - 360px)/(1600 - 360) * (58 - 30) + 30px);
  font-style: normal;
  font-weight: 700;
  line-height: 70px;
  letter-spacing: -1px;
  background: linear-gradient(to right, ${theme.colors.gradientStart}, ${theme.colors.gradientMain});
  -webkit-background-clip: text;
  align-self: center;
  padding-top: 20px;
 
  @media ${theme.media.mobile}{
    text-align: center;
  }

  @media ${theme.media.desktopBig}{
    font-size: 58px;
  }
`


export const S={
    MainWrapper,
    Photo,
    Border,
    GradientText,
    String,
    Main,
    TextBlock,

}