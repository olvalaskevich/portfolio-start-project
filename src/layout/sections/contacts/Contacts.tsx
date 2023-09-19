import React from 'react';
import {FlexWrapper} from "../../../components/flexwrapper/FlexWrapper";
import {StyledTitle2} from "../../../components/titel2styled/Title2.styled";
import {Container} from "../../../components/container/Conteiner";
import {theme} from "../../../styles/Theme";
import {Logo1} from "../../../components/logo/Logo1";
import {Networks} from "../../../components/networks/Networks";
import {Sf} from "../../footer/Footer_Styles";
import {S} from './Contacts_Styles'


export const Contacts:React.FC<{footer?:boolean}>= () => {
    return (
        <S.Contacts>
            <Container padding={'0 15px'}>
            <FlexWrapper direction={'column'} align={'center'}>
                <StyledTitle2 padding={'38px 0 10px'} size={'calc((100vw - 360px)/(1600 - 360) * (58 - 30) + 30px)'} color={`${theme.colors.fontTitleContact}`} family={'DM Sans'} height={'70px'}>
                    For any questions please mail me:
                </StyledTitle2>
                <S.Link href={'mailto:hi@pavanmg.in'}>hi@pavanmg.in</S.Link>

                <S.ContactsAdaptive>
                    <S.LogoAdaptive>
                        <Logo1 footer/>
                    </S.LogoAdaptive>
                    <Sf.FooterLink>+91 12345 09876</Sf.FooterLink>
                    <Sf.FooterLink>info@example.com</Sf.FooterLink>
                    <Networks footer/>
                </S.ContactsAdaptive>

            </FlexWrapper>
            </Container>
        </S.Contacts>
    );
};




