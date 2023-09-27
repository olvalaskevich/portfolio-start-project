import React from 'react';
import {FlexWrapper} from "../../../components/flexwrapper/FlexWrapper";
import {StyledTitle2} from "../../../components/titel2styled/Title2.styled";
import {Container} from "../../../components/container/Conteiner";
import {theme} from "../../../styles/Theme";
import {Logo1} from "../../../components/logo/Logo1";
import {Networks} from "../../../components/networks/Networks";
import {Sf} from "../../footer/Footer_Styles";
import {S} from './Contacts_Styles'
import {Fade, Rotate, Zoom} from "react-awesome-reveal";
// import Mailto from "react-mailto-link";



export const Contacts:React.FC<{footer?:boolean}>= () => {
    return (
        <S.Contacts id={'contact'}>
            <Container padding={'0 15px'}>
            <FlexWrapper direction={'column'} align={'center'}>

                <Zoom cascade={true} triggerOnce={true}>

                <StyledTitle2 padding={'38px 0 10px'} size={'calc((100vw - 360px)/(1600 - 360) * (58 - 30) + 30px)'} color={`${theme.colors.fontTitleContact}`} family={'DM Sans'} height={'70px'}>
                    For any questions please mail me:
                </StyledTitle2>
                    <Rotate>
                        <S.Link href={'mailto:hi@pavanmg.in'}>hi@pavanmg.in</S.Link>
                    </Rotate>
                {/*<Mailto email="hi@pavanmg.in" obfuscated={true}><S.Link>hi@pavanmg.in</S.Link></Mailto>*/}
                </Zoom>

                <S.ContactsAdaptive>

                    <S.LogoAdaptive>
                        <Fade triggerOnce={true}>
                        <Logo1 footer/>
                        </Fade>
                    </S.LogoAdaptive>

                    {/*<Sf.FooterLink>+91 12345 09876</Sf.FooterLink>*/}

                    {/*<Sf.FooterLink>info@example.com</Sf.FooterLink>*/}

                    <Sf.FooterLink><Fade triggerOnce={true}>+91 12345 09876</Fade></Sf.FooterLink>

                    <Sf.FooterLink><Fade triggerOnce={true}>info@example.com</Fade></Sf.FooterLink>
                    <Networks footer/>

                </S.ContactsAdaptive>

            </FlexWrapper>
            </Container>
        </S.Contacts>
    );
};




